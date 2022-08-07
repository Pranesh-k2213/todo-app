const mongoose = require("mongoose")

const Schema = mongoose.Schema
const todoSchema = Schema(
    {
        content: {
            type: String,
            required: true,
        },
        isDone: {
            type: Boolean,
            default: false,
        },
        user: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("TodoItem", todoSchema)
