const TodoItem = require("../models/todo_model")
const mongoose = require("mongoose")

const getItems = async (req, res) => {
    try {
        const items = await TodoItem.find(
            { user: req.user.uid, isDone: false },
            { content: 1 }
        ).sort({ createdAt: -1 })
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createItem = async (req, res) => {
    const { content } = req.body
    const user = req.user.uid
    try {
        const todoItem = await TodoItem.create({ content, user })
        res.status(200).json(todoItem)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const markDone = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "invalid Object id" })
    }
    try {
        const result = await TodoItem.updateOne(
            { _id: mongoose.Types.ObjectId(id), user: req.user.uid },
            { isDone: true }
        )
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteItem = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "invalid Object id" })
    }
    try {
        const result = await TodoItem.deleteOne({
            _id: mongoose.Types.ObjectId(id),
            user: req.user.uid,
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getItems,
    createItem,
    markDone,
    deleteItem,
}
