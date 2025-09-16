import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//import static components
import Footer from './components/footer'
import Navbar from './components/navbar'
import ScrollToTop from './components/scrolltotop'

//import routing components
import Home from './components/Home/home'
import Projects from './components/Projects/projects'
import Resume from "./components/Resume/resume"
import Contact from "./components/Contact/contact"
import Background from './components/background.tsx'

function App() {
    return (
        <BrowserRouter>
        <ScrollToTop/>


        <div className= 'background-container'>
            <Background />

        </div>
        
            
        <div className="content-container">
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
      </div>
    </BrowserRouter>
    )

}



 
export default App;