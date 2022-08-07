import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw Error("useUserContext hook must be used inside the provider")
  }
  return context
}
