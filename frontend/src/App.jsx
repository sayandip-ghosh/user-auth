import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup.jsx"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
