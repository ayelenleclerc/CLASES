import express from "express";
import userModel from "./dao/mongo/models/user.js";
import mongoose from "mongoose";
import studentRouter from "./routes/students.router.js";
import coursesRouter from "./routes/courses.router.js";
import orderRouter from "./routes/orders.router.js";
import usersRouter from "./routes/users.router.js";
import viewsRouter from "./routes/views.router.js";
import Handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();

const connection = mongoose.connect(
  "mongodb+srv://Ayelenleclerc:yuskia13@backend.xrrgkdz.mongodb.net/mongoAvanzado?retryWrites=true&w=majority"
);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("handlebars", Handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use("/", viewsRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/orders", orderRouter);
app.use("/api/users", usersRouter);

app.get("/indexacion", async (req, res) => {
  const info = await userModel
    .find({ email: "salwinrr@wordpress.org" })
    .explain("executionStats"); // estadisticas de ejecucion de esa operacion
  console.log(info);
  res.sendStatus(200);
});
