import UserManager from "./managers/userManager.js";

const manager = new UserManager("./files/usuarios.json");

const env = async () => {
  const usuarios = await manager.getUsers();
  console.log(usuarios);

  const user = {
    nombre: "Ayelen",
    apellido: "Leclerc",
    username: "laAye",
    password: "1234",
  };

  await manager.createUser(user);
  const userResult = await manager.getUsers();
  await manager.validateUser("laAye", "1234");
  console.log(userResult);
};
env();
