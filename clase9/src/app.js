import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import userRouter from "./routes/users.router.js";
import viewRouter from "./routes/views.router.js";

const app = express();

const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());

app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}/views`));

app.use("/api/users", userRouter);
app.use("/", viewRouter);
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
[];
