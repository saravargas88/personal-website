import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

// import static components
import Footer from './components/footer'
import Navbar from './components/navbar'
import ScrollToTop from './components/scrolltotop'
import Background from './components/background.tsx'

// import routing components
import Home from './components/Home/home'
import Projects from './components/Projects/projects'
import Resume from "./components/Resume/resume"
import Contact from "./components/Contact/contact"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Background stays fixed behind everything */}
      <div className="background-container">
        <Background />
      </div>

      {/* Flex layout wrapper */}
      <div className="app-container">
        <Navbar />
     
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
