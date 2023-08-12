import { Router } from "express";
import uploader from "../services/uploader.js";
const router = Router(); //es el miniaplicativo para que yo pueda redirigir

const pets = [];
router.get("/", (req, res) => {
  res.send(pets);
  //con este método solicitamos obtener a los usuarios
});
router.post("/", uploader.single("image"), (req, res) => {
  const pet = req.body;
  pets.push(pet);
  res.send({ status: "success", message: "Pet added" });
  //con este método solicitamos crear usuarios
  //llega la petición luego de haber pasado los m
});
router.put("/", (req, res) => {
  //en este estamos solicitando actualizar la información de los usuarios
});
router.delete("/", (req, res) => {
  // con este método estamos solicitando borrar el listado de usuarios
});

export default router; //export por default (ACÁ IMPORTANTE: CUANDO YO HAGO UN EXPORT LO HAGO PARA QUE OTRAS PARTES DE MI PROYECTO PUEDAN IMPORTARLO)
