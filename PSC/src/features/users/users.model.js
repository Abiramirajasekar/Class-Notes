const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    age: { type: Number, min: 18, max: 60 }
})
const User = mongoose.model("user", userSchema);
module.exports = User