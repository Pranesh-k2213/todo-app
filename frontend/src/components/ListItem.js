import { useTodoItemsContext } from "../hooks/useTodoItemsContext"
import { useUserContext } from "../hooks/useUserContext"

const ListItem = ({ item }) => {
  const { dispatch } = useTodoItemsContext()
  const { user } = useUserContext()

  const handleDone = async () => {
    const token = "Bearer " + user.tokenId
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/${item._id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
        },
      }
    )
    if (response.ok) {
      dispatch({ type: "REMOVE_TODOITEM", payload: item._id })
    }
  }

  return (
    <div>
      <input type="radio" onClick={handleDone} />
      {item.content}
    </div>
  )
}

export default ListItem
