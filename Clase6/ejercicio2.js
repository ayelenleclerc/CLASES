const express = require("express");

const app = express();

const PORT = 8080;

// const server = app.listen(PORT, () => {
//   console.log(
//     `Servidor Http escuchando el puerto ${connectedServer.address().port}`
//   );
// })

// server.on("error", error => console.log(` Error en el servidor :${error}`));

app.get("/", (req, res) => {
  res.send("BIenvenidos a Express");
});

let visitas = 0;
app.get("/visitas", (req, res) => {
  visitas++;
  res.send(`La cantidad de visitas es de  ${visitas}`);
});

app.get("/fyh", (req, res) => {
  const now = new Date();
  const fyh = now.toLocaleString();
  res.json({ fyh });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
