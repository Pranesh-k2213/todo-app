import "./App.css"
import Home from "./pages/home"
import Login from "./pages/Login"
import { auth } from "./firebase/initialize"
import { onAuthStateChanged } from "firebase/auth"
import { useUserContext } from "./hooks/useUserContext"
import { Routes, Route, useNavigate } from "react-router-dom"

function App() {
  const { setUser, user } = useUserContext()
  const navigate = useNavigate()

  onAuthStateChanged(auth, (newUser) => {
    console.log(process.env.REACT_APP_BACKEND_URL)
    if (newUser && (!user || newUser.email !== user.email)) {
      setUser({
        name: newUser.displayName,
        email: newUser.email,
        tokenId: newUser.accessToken,
      })
    } else if (!newUser && user) {
      navigate("/login")
      setUser(null)
    }
  })

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
