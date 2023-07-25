const express = require("express");

const app = express();

const PORT = 8080;

//Middleware: filtro entre la peticion y la devolucion. Es una funcion
//app.use --> middleware, van directamente despues del puerto (PORT)

//analiza el contenido y lo transforma un json a un objeto de JS
app.use(express.json());
//analiza el cuerpo de las solicitudes con datos codificados con un formato distinto al json, ej: aplication/www.form.urlencoded.
app.use(express.urlencoded({ extended: true }));

let tasks = [
  { id: 1, title: "Primera entrega" },
  { id: 2, title: "Segunda entrega" },
  { id: 3, title: "Tercera entrega" },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(400).json({ message: "Tarea no encontrada" });
  }
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = { id: tasks.length + 1, title: title || "Nueva Tarea" };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    const { title } = req.body;
    task.title = title;
    res.json(task);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((t) => t.id !== taskId);
  if (tasks) {
    res.json({ message: "Tarea eliminada correctamente" });
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
