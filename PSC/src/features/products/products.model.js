const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String },
    price: { type: Number, min: 0, max: 400, require: true },
    quantity: { type: Number, require: true, min: 0, max: 100 }

})
const Product = mongoose.model("product",productSchema);
module.exports = Product