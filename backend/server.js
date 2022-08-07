require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const corsMiddleware = require("./cors/corsMiddleware")

const {
    getItems,
    createItem,
    markDone,
    deleteItem,
} = require("./controller/todoContollers")

const authController = require("./utils/authControl")

// Middleware
app.options("*", corsMiddleware)
app.use(corsMiddleware)
app.use((req, res, next) => {
    console.log("path:" + req.path + "     method:" + req.method)
    next()
})

app.use(express.json())

// Routing
app.get("/api", authController, getItems)
app.post("/api", authController, createItem)
app.patch("/api/:id", authController, markDone)
app.delete("/api/:id", authController, deleteItem)

// Connections
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                "Connected to DB and Listening to port:" + process.env.PORT
            )
        })
    })
    .catch((error) => {
        console.log(error)
    })
