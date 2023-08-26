import mongoose from "mongoose";

const collection = "Students";

const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  dni: { type: String, required: true, unique: true },
  course: {
    type: String,
    enum: ["Backend", "Frontend"],
    default: "Backend",
  },
  grade: {
    type: Number,
    require: true,
  },
});

const studentModel = mongoose.model(collection, schema);

export default studentModel;
