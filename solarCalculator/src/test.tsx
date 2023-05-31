import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from '../components/Narbar'
import Test from '../components/test.tsx'

import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Test/>
  </React.StrictMode>,
)