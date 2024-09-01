import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
         <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/login" element={<Login/>}/>
               <Route path="/signup" element={<Signup/>}/>
         </Routes>
    </BrowserRouter>
  </StrictMode>,
)
