import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Narbar";

//import SlidingInput from "../components/slider"

const Navapp: React.FC = () => {

  return (
    <BrowserRouter>
    <div>
        <Navbar/>
      
    </div>
    </BrowserRouter>
  );
};

export default Navapp;