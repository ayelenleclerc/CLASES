import express from "express";
import Handlebars from "express-handlebars";
import __dirname from "./utils.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//signed cookie -> secret
app.use(cookieParser("palabraSecretaCodershhhhh"));

app.engine("handlebars", Handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const { accepted } = req.query;

  if (accepted) {
    res
      .cookie(
        "galletaTriste",
        { name: "Edward", lastName: "Bastos", role: "admin" },
        { maxAge: 5000 }
      )
      .cookie(
        "galletaFeliz",
        {
          name: "Pablo",
          lastName: "Franco",
          role: "empleado",
        },
        {
          signed: true,
        }
      )
      .send({ status: "success", payload: "Usuario" });
  } else {
    res.send({ error: "NO puedes seguir en la página si no aceptas" });
  }
});

app.get("/getCookie", (req, res) => {
  console.log(req.cookies);

  res.send(
    `Hola, ${req.cookies?.galletaFeliz?.name}, eres un ${req.cookies?.galletaFeliz?.role}`
  );
});

app.get("/getSecretCookies", (req, res) => {
  console.log(req.signedCookies);
  if (!req.signedCookies.galletaFeliz) return res.send("Rechazado");
  res.send(
    `Hola, ${req.signedCookies?.galletaFeliz?.name}, eres un ${req.signedCookies?.galletaFeliz?.role}`
  );
});

app.get("/logout", (req, res) => {
  res.clearCookie("galletaFeliz").send("Deslogueado");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
