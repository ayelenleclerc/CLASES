import { Router } from "express";
import VideogameManager from "../dao/mongo/managers/videogameManager.js";
import uploader from "../service/uploadService.js";

const router = Router();
const videogameService = new VideogameManager();

router.get("/", async (req, res) => {
  const videogames = await videogameService.getVideogames();
  res.send({ status: "success", payload: videogames });
});
router.post("/", uploader.array("images"), async (req, res) => {
  const { title, description, price, categories } = req.body;
  if (!title || !description || !price)
    return res
      .status(400)
      .send({ status: "error", error: "Incomplete values" });
  const newVideogame = {
    title,
    description,
    price,
    categories,
  };
  const images = req.files.map(
    (file) =>
      `${req.protocol}://${req.hostname}:${process.env.PORT || 8080}/img/${
        file.filename
      }`
  );
  newVideogame.images = images;

  const result = await videogameService.createVideogame(newVideogame);
  res.send({ status: "success", payload: result.__id });
});

router.put("/:vid", async (req, res) => {
  const { vid } = req.params;
  const { title, description, price, categories } = req.body;

  const updateVideogame = {
    title,
    description,
    price,
    categories,
  };
  const videogame = await videogameService.getVideogameBy({ _id: vid });
  if (!videogame)
    return res
      .status(400)
      .send({ status: error, error: "Videogame not found" });
  await videogameService.updateVideogame(vid, updateVideogame);
  res.send({ status: "success", message: "Videogame updated" });
});

router.delete("/:vid", async (req, res) => {
  const { vid } = req.params;
  const result = await videogameService.deleteVideogame(vid);
  res.send({ status: "success", message: "Videogame deleted" });
});
export default router;
