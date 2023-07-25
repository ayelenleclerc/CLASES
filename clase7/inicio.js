const express = require("express");

const app = express();

const PORT = 8080;

// app.get("/", (req, res) => {
//   res.send("Ruta raíz");
// });

// app.get("/", (req, res) => {
//   res.send("Ruta raíz");
// });
// app.get("/welcome", (req, res) => {
//   res.send("Welcome");
// });
// app.get("/catalogo", (req, res) => {
//   res.send("Catalgo");
// });

//RUTAS POR METODOS

app.get("/", (req, res) => {
  res.json({
    msg: "Get API",
  });
});

app.post("/api", (req, res) => {
  res.json({
    msg: "Post API",
  });
});
app.put("/api", (req, res) => {
  res.json({
    msg: "Put API",
  });
});
app.delete("/api", (req, res) => {
  res.json({
    msg: "delete API",
  });
});

app.get("*", (req, res) => {
  res.send("Page Not found");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
