import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Home from './Home.jsx'
// import Mymain from './Mymain'
import Mymain from './Shopings/Main.jsx'
import './Shopings/shoping.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mymain />
  </StrictMode>,
)
