import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Header from "../components/Tabs"
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Narbar'


function App() {
  const [count, setCount] = useState(0)

 
 

  return (
    <>
   <BrowserRouter>
    <div>
        <Navbar/>
      
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
