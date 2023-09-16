import mongoose from "mongoose";

const collection = "courses";

const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    difficulty: Number,
    topics: {
      type: Array,
      default: [],
    },
    professor: String,
    //lo que viene no aplica para tu proyecto
    students: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "students",
      },
    ],
  },
  { timestamps: true }
);

const courseModel = mongoose.model(collection, schema);

export default courseModel;
