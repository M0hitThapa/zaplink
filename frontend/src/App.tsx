import Dashboard from "./pages/Dashboard"
import { SignIn } from "./pages/Signin"
import { SignUp } from "./pages/Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {



  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
   

  )
}

export default App
