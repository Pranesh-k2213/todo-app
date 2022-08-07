import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBOe3C0oJtoFnqJdqLyToHDdSn7IwNWS9Y",
  authDomain: "todo-app-4d005.firebaseapp.com",
  projectId: "todo-app-4d005",
  storageBucket: "todo-app-4d005.appspot.com",
  messagingSenderId: "664281425811",
  appId: "1:664281425811:web:3d70eb5846c63d8b426a66",
  measurementId: "G-D474J6V43F",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
