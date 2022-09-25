const express = require("express");
const dbConnect = require("../config/db")
const userRouter = require("./features/users/users.router")
const userRouter = require("./features/products/products.router")
const userRouter = require("./features/cartItems/cartItem.router")

let port = 8080;
const app = express();
app.use(express.json());
app.use("/users", userRouter)
app.use("/products", userRouter)
app.use("/carts", userRouter)

app.listen(port, async () => {
    await dbConnect()
    console.log(`listening on http://localhost:${port}`)
})
