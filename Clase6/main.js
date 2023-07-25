const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Bienvenidos a Express");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
