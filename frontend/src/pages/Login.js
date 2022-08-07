import { auth } from "../firebase/initialize"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useUserContext } from "../hooks/useUserContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Login = () => {
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate()
  const { user } = useUserContext()

  const handleLogin = () => {
    signInWithPopup(auth, provider).catch((error) => {
      console.log(error)
      navigate("/login")
    })
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <div>
      {!user && (
        <div>
          <h1>Log In page</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  )
}

export default Login
