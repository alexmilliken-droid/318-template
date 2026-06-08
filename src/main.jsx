import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewPage from './components/newPage.js'
import AboutUs from './components/AboutUs.js'
import Resources from './components/Resources.js'
import ScrollToTop from './components/ScrollToTop.jsx'
import TenCommitments from './components/TenCommitments.js'
import { BrowserRouter, Routes, Route } from "react-router"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop /> {/* 👈 Add this here */}

    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/expect' element={<NewPage />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/commitments' element={<TenCommitments />} />
    </Routes>

  </BrowserRouter>
)
