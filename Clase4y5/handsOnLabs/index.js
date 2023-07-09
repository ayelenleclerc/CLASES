import UserManager from "./managers/userManager.js";

const manager = new UserManager("./files/usuarios.json");

const env = async () => {
  const usuarios = await manager.getUsers();
  console.log(usuarios);

  const user = {
    nombre: "Ayelen",
    apellido: "Leclerc",
    edad: 41,
    curso: "Back",
  };

  await manager.createUser(user);
};
env();
