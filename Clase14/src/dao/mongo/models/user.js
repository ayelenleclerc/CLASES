import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "Users";

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    index: true,
  },
  gender: String,
});

// schema.index({   // multi indexacion por esquema
//   last_name: 1,
//   email: 1,
//   gender:1
// })

schema.plugin(mongoosePaginate);
const userModel = mongoose.model(collection, schema);

export default userModel;
