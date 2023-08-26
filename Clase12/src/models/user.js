import mongoose from "mongoose";

const collection = "Users";
const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
  phone: String,
  active: { type: Boolean, default: true },
});

const userModel = mongoose.model(collection, schema);

// export the model to be used in other files
export default userModel;
