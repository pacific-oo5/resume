import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "./components/Aboutme";
import Home from "./components/Home";
import Instagram from "./footer/Instagram"
import Git from "./footer/Git"



import Myskills from "./components/Myskills"
import 'bootstrap/dist/css/bootstrap.min.css';
import Facebook from './footer/Facebook';

const MainRoutse = () => {
    return (
        <div>            
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/myskills" element={<Myskills />} />
        <Route path='/inst' element={<Instagram/>}/>
        <Route path='/facebook' element={<Facebook/>}/>
        <Route path="git" element={<Git/>}/>

       
       

      </Routes>

        </div>
    );
};

export default MainRoutse;