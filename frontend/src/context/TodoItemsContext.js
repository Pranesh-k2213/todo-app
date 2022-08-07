import { createContext, useReducer } from "react"

export const TodoItemsContext = createContext()

export const todoItemsReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOITEMS":
      return {
        todoItem: action.payload,
      }
    case "ADD_TODOITEM":
      return {
        todoItem: [action.payload, ...state.todoItem],
      }
    case "REMOVE_TODOITEM":
      return {
        todoItem: state.todoItem.filter((item) => {
          if (item._id !== action.payload) {
            return true
          } else {
            return false
          }
        }),
      }
    default:
      return {
        state,
      }
  }
}

export const TodoItemsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoItemsReducer, {
    todoItem: null,
  })

  return (
    <TodoItemsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoItemsContext.Provider>
  )
}
