
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";

function App(){

  const[users,setusers] = useState([
    {
        username:"Sindhu",
        password:"Sindhu123"
    }
])

  return(<div>
    <BrowserRouter>

 

    <Routes>
      <Route path="/" element={<Login users={users} setusers={setusers} />}></Route>
      <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}></Route>
      <Route path="/Landing" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    
  </div>
    
  )
}
export default App

