const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobItemSchema = new Schema({
  title: String,
  id: String,
  company: String,
  created_at: String,
  status: String,
  location: String
}, {
  timestamps: true
})

const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    jobsList: [jobItemSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
