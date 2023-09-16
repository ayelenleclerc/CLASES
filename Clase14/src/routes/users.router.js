import { Router } from "express";
import userModel from "../dao/mongo/models/user.js";

const router = Router();

router.get("/", async (req, res) => {
  const users = await userModel.paginate({}, { page: 1, limit: 30 });
  res.send({ stutus: "success", payload: users });
});

export default router;
