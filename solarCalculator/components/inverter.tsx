// Inverter.tsx
import React from "react";
import Solarpower from "./solarPower";

const productRecommendations = [
    {
      name: 'Inverter Model 1',
      powerRating: 2000,
      link: 'https://example.com/inverter1',
    },
    {
      name: 'Inverter Model 2',
      powerRating: 3000,
      link: 'https://example.com/inverter2',
    },
    // Add more product recommendations as needed
  ];

const Inverter: React.FC<{ result: number }> = ({ result }) => {
  // Use the result prop as needed in the Inverter component
  return (
    <div>
      <h2>Inverter Component</h2>
      <p>Result from Solarpower: {result}</p>
      {/* You can include additional logic or components related to the inverter */}
    </div>
  );
};

export default Inverter;
