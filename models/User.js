import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  userId: {type: String,required: true, unique: true },
  hashPassword: {type: String,required: true},
  role:  {type: String, enum: ['admin', 'employee'], default: 'employee'},
  department: {type: String, enum: ['hr', 'dev','test','admin','finance'], required: true}
})

export default mongoose.model('User', userSchema)