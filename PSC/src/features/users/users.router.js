const express = require("express")
const app = express.Router()
const User = require("./users.model")
app.post("/login", async (req, res) => {
    let { email, password } = req.body
    try {
        let user = await User.findOne({ email, password })

        if (!user) {
            res.status(401).send("Authentication Failed")
        }
        res.send({
            token: `${user.id}:${user.password}`
        })
    } catch (e) {
        res.status(500).send(e.message)
    }
})
app.post("/signup", async (req, res) => {
    let { email } = req.body;
    try {
        let user = await User.findOne({ email })
        if (user) {
            return 
            res.status(404).send("cannot create a user exist mail id")
            let newUser = await User.create(req.body)
            res.send({
                token: `${newUser.id}:${newUser.email}:${newUser.password}`
            })

        }
    } catch (e) {
        res.status(500).send(e.message)
    }
})
module.exports = app