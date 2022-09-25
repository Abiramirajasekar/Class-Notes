const express = require("express")
const app = express.Router()
const product = require("./products.model")
app.get("/", async (res, req) => {
    let products = await product.find().limit(10)
    res.send(products)
})
module.exports = app