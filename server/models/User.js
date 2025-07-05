// server/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  name: String,
  email: String,
  batch: String,
  house: String,
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
