const express = require("express");

const app = express();

const PORT = 8080;

//frase constante

const frase = "Hola mundo como están";

//metodo GET para obtener la frase
app.get("/api/frase", (req, res) => {
  res.json({ frase });
});

//metodo Get para obtener letras por orden
app.get("/api/letras/:num", (req, res) => {
  const num = parseInt(req.params.num);
  if (isNaN(num)) {
    res.status(400).json({ error: "El parametro no es un numero" });
  } else if (num < 1 || num > frase.length) {
    res.status(400).json({ error: "El parametro esta fuera de rango" });
  } else {
    const letra = frase.charAt(num - 1);
    res.json({ letra });
  }
});

//metodo Get para obtener el orden de la palabra dentro de la frase
app.get("/api/palabras/:num", (req, res) => {
  const num = parseInt(req.params.num);
  if (isNaN(num)) {
    res.status(400).json({ error: "El parametro no es un numero" });
  } else {
    const palabras = frase.split(" ");
    if (num < 1 || num > palabras.length) {
      res.status(400).json({ error: "El parametro esta fuera de rango" });
    } else {
      const palabra = palabras[num - 1];
      res.json({ palabra });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
