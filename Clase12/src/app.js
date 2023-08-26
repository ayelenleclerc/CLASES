import express from "express";
import __dirname from "./utils.js";
import userModel from "./models/user.js";
import studentModel from "./models/students.js";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
const connection = mongoose.connect(
  "mongodb+srv://Ayelenleclerc:yuskia13@backend.xrrgkdz.mongodb.net/colegio?retryWrites=true&w=majority"
);

app.get("/", async (req, res) => {
  const users = await userModel.find();
  res.send("ok");
});

// app.get("/students", async (req, res) => {
//   const students = [
//     {
//       firstName: "Christian",
//       lastName: "Menendez",
//       age: 27,
//       dni: "12345678",
//       grade: 10,
//     },
//     {
//       firstName: "Facundo",
//       lastName: "Lopez",
//       age: 29,
//       dni: "12458774",
//       grade: 10,
//     },
//     {
//       firstName: "Lucas",
//       lastName: "Gómez",
//       age: 30,
//       dni: "12345895",
//       grade: 9,
//     },
//   ];
//   const results = await studentModel.insertMany(students);
//   res.send({ status: "success", payload: results });
// });
//Super crud
//C
app.post("/students", async (req, res) => {
  const { firstName, lastName, age, dni, course, grade } = req.body;
  if (!firstName || !lastName || !age || !dni || !grade) {
    return res
      .status(400)
      .send({ status: "error", error: "Incomplete values" });
  }
  const newStudent = {
    firstName,
    lastName,
    age,
    dni,
    course,
    grade,
  };
  const results = await studentModel.create(newStudent); //no existe el insertOne en Mongoose se usa el .create
  //Cuando inserto un nuevo documento, SIEMPRE  me devuelve el documento completo, incluyendo el id generado automaticamente

  //respondo con el id generado
  res.send({ status: "success", payload: results._id });
});

app.get("/students", async (req, res) => {
  const students = await studentModel.find();
  res.send({ status: "success", payload: students });
});

app.get("/students/:dni", async (req, res) => {
  const { dni } = req.params;
  const student = await studentModel.findOne({ dni: dni });
  if (!student)
    return res
      .status(404)
      .send({ status: "error", error: "Student not found" });
  res.send({ status: "success", payload: student });
});

app.put("/students/:dni", async (req, res) => {
  //aqui el codigo
});

app.delete("/students/:sid", async (req, res) => {
  //aqui el codigo
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
