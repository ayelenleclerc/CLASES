import { Router } from "express";

const router = Router(); //es el miniaplicativo para que yo pueda redirigir

const users = [];
router.get("/", (req, res) => {
  res.send(users);
  //con este método solicitamos obtener a los usuarios
});
router.post("/", (req, res) => {
  //con este método solicitamos crear usuarios
  const user = req.body;
  users.push(user);
  res.send({ status: "success", message: "User added" });
});
router.put("/", (req, res) => {
  //en este estamos solicitando actualizar la información de los usuarios
});
router.delete("/", (req, res) => {
  // con este método estamos solicitando borrar el listado de usuarios
});

export default router; //export por default (ACÁ IMPORTANTE: CUANDO YO HAGO UN EXPORT LO HAGO PARA QUE OTRAS PARTES DE MI PROYECTO PUEDAN IMPORTARLO)
