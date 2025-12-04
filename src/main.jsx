// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// 1. Importar BrowserRouter
import { BrowserRouter } from 'react-router-dom'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Añadir BrowserRouter con el basename correcto */}
    <BrowserRouter basename="/Cotizador-Casa/"> 
      <App />
    </BrowserRouter>
  </StrictMode>,
);