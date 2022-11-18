import React from "react";
import {BrowserRouter,Routes , Route} from 'react-router-dom'

import Home from "./components/routes/home/Home";
import About from "./components/routes/about/About";
import Contact from "./components/routes/contact/Contact";
import Experience from "./components/routes/experience/Experience";
import Navbar from "./components/Navbar";


export default function App(){
  
  return(
      <BrowserRouter>
        <Navbar/>
        <Routes>      
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about-me' element={<About/>}/>
          <Route exact path='/contact-me' element={<Contact/>}/>
          <Route exact path='/experience' element={<Experience/>}/>
        </Routes>
    </BrowserRouter>
  )
}