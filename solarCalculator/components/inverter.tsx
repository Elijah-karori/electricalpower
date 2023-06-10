import React from "react";
import Product from "./Product";
import axios from "axios";

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

const Inverter: React.FC<{ result: number;setResult: (result: number) => void }> = ({ result, setResult }) => {
  // Calculate the inverter power rating based on the result
  const inverterPowerRating = Math.ceil(result * 1.2);

  

return (
    <div className="container p-4 m-6 mt-7 bg-slate-300 rounded-lg shadow-md shadow-slate-600">
      <h2>Inverter Component</h2>
      <label htmlFor="power">custom Power</label>
      <input type="number" name="power" id="power" onChange={(e)=>{
        result= Math.ceil(parseFloat(e.target.value)*0.8)
        setResult(result)
      }} placeholder={(result/0.8).toString()} className="m-2 p-4 outline-none border-grey-400 border-solid border-2 rounded-lg"/>
      <div className="bg-blue-500 shadow-md flex flex-row max-[640px]:flex-col justify-around max-[640px]:justify-center p-4 m-2 rounded-md">
        <p>Load Power : <span className="bold font-bold text-center text-slate-950 ">{result}</span> Watts </p>
      <p>Inverter Power Rating: <span className="bold font-bold text-center text-slate-950 ">{inverterPowerRating}</span>  Watts</p>
      </div>
      

      
      <h3>Product Recommendations</h3>
      
      <div className="flex flex-row max-[640px]:flex-col m-2 p-4 justify-around max-[640px]:justify-center bg-yellow-500 max-h-max">
        {productRecommendations.map((product, index) => (
          <Product key={index} name={product.name} powerRating={product.powerRating} link={product.link} />
        ))}
      </div>
    </div>
  );
};

export default Inverter;
