import fs from "fs";
import crypo from "crypo";

export default class UserManager {
  constructor(path) {
    this.path = path;
  }
  getUsers = async () => {
    try {
      if (fs.existsSync(this.path)) {
        const data = await fs.promises.readFile(this.path, "utf8");
        console.log(data);
        const users = JSON.parse(data);
        return users;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  createUser = async (usuario) => {
    try {
      const users = await this.getUsers();
      if (users.length === 0) {
        usuario.id = 1;
      } else {
        usuario.id = users[users.length - 1].id + 1;
      }

      console.log(usuario);

      //Agregar la lógica para hashear la contraseña
      usuario.salt = crypo.randomBytes(128).toString("base64");
      usuario.password = crypo
        .createHmac("sha256", usuario.salt)
        .update(usuario.password)
        .digest("hex");

      users.push(usuario);

      await fs.promises.writeFile(this.path, JSON.stringify(users, null, "\t"));
      return usuario;
    } catch (error) {
      console.log(error);
    }
  };

  validateUser = async (username, password) => {
    try {
      const usuarios = await this.getUsers();
      const usuarioIndex = usuarios.findIndex((u) => u.username === username);
      if (usuarioIndex === -1) {
        console.log("error, usuario no encontrado");
        return;
      }
      const usuario = usuarios[usuarioIndex];
      const newHash = crypto
        .createHmac("sha256", usuario.salt)
        .update(password)
        .digest("hex");

      if (newHash === usuario.contrasena) {
        console.log("Usuario logueado");
      } else {
        console.log("Contraseña inválida");
      }
    } catch (error) {
      console.error(error);
    }
  };
}
