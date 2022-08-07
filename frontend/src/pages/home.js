import NavBar from "../components/Navbar"
import CreateItem from "../components/CreateItem"
import ListItem from "../components/ListItem"
import { useTodoItemsContext } from "../hooks/useTodoItemsContext"
import { useUserContext } from "../hooks/useUserContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const { todoItem, dispatch } = useTodoItemsContext()
  const { user } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/login")
    } else {
      const token = "Bearer " + user.tokenId
      const getItems = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api`,
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        )
        const json = await response.json()
        if (response.ok) {
          dispatch({ type: "SET_TODOITEMS", payload: json })
        }
      }
      getItems()
    }
  }, [dispatch, user, navigate])

  return (
    <div>
      {user && (
        <div>
          <NavBar />
          <div className="container">
            <div className="layout">
              <div className="list-items">
                {todoItem &&
                  todoItem.map((item) => {
                    return <ListItem key={item._id} item={item} />
                  })}
              </div>
              <div className="create-item">
                <CreateItem />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
