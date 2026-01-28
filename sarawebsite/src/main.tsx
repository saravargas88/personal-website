import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';


//BY WRAPPING THE ROOT COMPONENT IN A STRIC MODE WE ARE ADDING CHECKS
// FOR POTENTIAL PROBLEMS IN THE APP (CHECKS ONLY RUN IN DEVELOPMENT)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


