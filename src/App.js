import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import "./styles/header.css"
import './styles/home.css';

import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Work from "./pages/Work.js"
import Contact from "./pages/Contact.js"
import Header from "./Header.js"

function App() {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Work" element={<Work />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App;
