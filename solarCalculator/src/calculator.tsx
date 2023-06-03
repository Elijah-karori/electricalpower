import React, { useState } from "react";
import Solarpower from "../components/solarPower";
import Inverter from "../components/inverter";
import Battery from "../components/Battery";
import Header from "../components/Header";


const Calculator: React.FC = () => {
  const [result, setResult] = useState(0);
  const [activeTab, setActiveTab] = useState('inverter');
  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  // Callback function to track changes in the result
  const handleResultChange = (newResult: number) => {
    // Perform tracking or handling logic here
    console.log('Result changed:', newResult);

    // Update the result state
    setResult(newResult);
  };

  const links = ["Calculator", "Inverter", "Solar Power", "Battery"];

  return (
    <>
      <Header
         items={links}
         links={links}
         title={`Calculator`}
         selectedLink={activeTab}
         handleTabChange={handleTabChange}
      />
      <div>
        <div>
          {activeTab === 'solar power' && <Solarpower setResult={handleResultChange} result={result}   />}
          {activeTab === 'inverter' && <Inverter result={result} setResult={handleResultChange}  />}
          {activeTab === 'battery' && <Battery result={result} setResult={handleResultChange} />}
        </div>
      </div>
    </>
  );
};

export default Calculator;
