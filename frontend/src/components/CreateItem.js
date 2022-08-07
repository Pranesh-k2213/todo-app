import { useState } from "react"
import { useTodoItemsContext } from "../hooks/useTodoItemsContext"
import { useUserContext } from "../hooks/useUserContext"
const CreateItem = () => {
  const [content, setContent] = useState("")
  const [error, setError] = useState()
  const { dispatch } = useTodoItemsContext()
  const { user } = useUserContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = "Bearer " + user.tokenId
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api`, {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    } else {
      setContent("")
      dispatch({ type: "ADD_TODOITEM", payload: json })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Create new Item</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>Create</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default CreateItem
