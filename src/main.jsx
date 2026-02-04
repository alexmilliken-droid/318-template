import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewPage from './components/newPage.js'
import { BrowserRouter, Routes, Route } from "react-router";
import AboutUs from './components/AboutUs.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/expect' element={<NewPage/>}/>
    <Route path='/about' element={<AboutUs/>}/>
  </Routes>
  </BrowserRouter>,
)
