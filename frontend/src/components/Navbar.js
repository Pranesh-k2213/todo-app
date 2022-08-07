import { auth } from "../firebase/initialize"
import { signOut } from "firebase/auth"
import { useUserContext } from "../hooks/useUserContext"
import { useTodoItemsContext } from "../hooks/useTodoItemsContext"

const NavBar = () => {
  const { user } = useUserContext()
  const { dispatch } = useTodoItemsContext()

  const handleSignout = async () => {
    dispatch({ type: "SET_TODOITEMS", payload: null })
    await signOut(auth)
  }

  return (
    <div className="nav-container">
      <div className="navbar">
        <p className="nav-title">Todo App</p>
        <div className="nav-right">
          <div className="nav-email">{user.email}</div>
          <button onClick={handleSignout} className="nav-signout">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
