import { Router } from "express";
import VideogameManager from "../dao/mongo/managers/videogameManager.js";

const router = Router();
const videogameService = new VideogameManager();
router.get("/", async (req, res) => {
  const videogames = await videogameService.getVideogames();
  res.render("home", { videogames });
});

export default router;
