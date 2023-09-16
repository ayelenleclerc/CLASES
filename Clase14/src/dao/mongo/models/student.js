import mongoose from "mongoose";

const collection = "students";
//Subschema

const courseSubSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "courses",
    },
    added: Date,
  },
  { _id: false }
);

const schema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    courses: [courseSubSchema],
  },
  { timestamps: true }
);

schema.pre(["find", "findOne"], function () {
  this.populate("courses.course");
});
const studentModel = mongoose.model(collection, schema);

export default studentModel;
