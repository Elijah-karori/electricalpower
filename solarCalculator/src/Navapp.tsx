import React, { useState } from "react";
import Navbar from "../components/Narbar";
import Solarpower from "../components/solarPower";
import Inverter from "../components/inverter";
import Battery from "../components/Battery"
//import SlidingInput from "../components/slider"

const Navapp: React.FC = () => {
  const [result, setResult] = useState(0);

  return (
    <div>
        <Navbar></Navbar>
      <Solarpower setResult={setResult} result={result} />
      <Inverter result={result} />
      <Battery result={result}/>
      
    </div>
  );
};

export default Navapp;