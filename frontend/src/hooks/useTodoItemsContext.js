import { TodoItemsContext } from "../context/TodoItemsContext"
import { useContext } from "react"

export const useTodoItemsContext = () => {
    const context = useContext(TodoItemsContext)

    if (!context) {
        throw Error("useTodoItemsContext must be used inside the provider")
    }
    return context
}
