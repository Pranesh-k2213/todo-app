import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { TodoItemsContextProvider } from "./context/TodoItemsContext"
import { UserContextProvider } from "./context/UserContext"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoItemsContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </TodoItemsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
