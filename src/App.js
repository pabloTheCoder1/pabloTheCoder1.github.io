import React from "react";

import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"

import "./styles/header.css";
import './styles/home.css';
import './styles/about.css';
import './styles/work.css';
import './styles/contact.css';

import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Work from "./pages/Work.js"
import Contact from "./pages/Contact.js"
import Header from "./Header.js"

function App() {
  return(
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App;
