import React, { useState } from "react";

const Solarpower: React.FC<{ result: number; setResult: (result: number) => void }> = ({ result, setResult }) => {
  //const [result, setResult] = useState(0);
  const [power, setPower] = useState(0);
  const [toggle, setToggle] = useState(false);

  function calculateTotalPower() {
    if (toggle) {
      const totalValue = document.querySelectorAll('.custom');
      const totalDc = Array.from(totalValue).reduce((total: number, element: Element) => {
        const value = parseFloat((element as HTMLInputElement).value);
        if (!isNaN(value)) {
          return total + value;
        }
        return total;
      }, 0);
      setResult(totalDc*0.8);
    } else {
      setResult(power*0.8);
    }
  }

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-6 relative">
        
        <div className="flex items-center mb-2">
          <div
            className={`relative inline-flex items-center rounded-full w-12 h-6 transition-colors duration-200 ${
              toggle ? "bg-green-400" : "bg-gray-400"
            }`}
            onClick={handleToggle}
          >
            <span
              className={`inline-block w-5 h-5 transform transition-transform duration-200 ease-in-out ${
                toggle ? "translate-x-6" : "translate-x-0"
              }`}
            >
              <svg
                className={`w-full h-full ${
                  toggle ? "text-white" : "text-gray-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="12" r="9" fill="#000000" stroke="#000000" strokeWidth="2" />
              </svg>
            </span>
          </div>
          <label className="ml-2 text-xs text-gray-500">
            {toggle ? "Switch to Total power Calculation" : "Switch to custom power Calculation"}
          </label>
        </div>
{!toggle && (
          <div>
            <label className="text-xs text-gray-500 mb-1">
              Total Power calculation
            </label>
            <input
              type="number"
              value={power}
              onChange={(e) => setPower(parseFloat(e.target.value))}
              placeholder="Enter power"
              className="w-full py-2 px-3 rounded border-gray-300"
            />
          </div>
        )}
        {toggle && (
          <div>
            <label className="text-xs text-gray-500 mb-1">
              Custom individual Power calculation
            </label>
            <input
              type="number"
              className="custom w-full py-2 px-3 rounded border-gray-300 mt-2"
              placeholder="Enter electronics power(phone Charger, laptop charger woofer power rating"
              id="electronics"
            />
            <input
              type="number"
              className="custom w-full py-2 px-3 rounded border-gray-300 mt-2"
              placeholder="Enter Room power usage e.g kitchen power(adding oven power, water heater, blender"
              id="kitchen"
            />
            <input
              type="number"
              className="custom w-full py-2 px-3 rounded border-gray-300 mt-2"
              placeholder="Enter siting Room power usage e.g siting power(adding TV power, lights, sound equipment"
              id="sitting"
            />
             <input
              type="number"
              className="custom w-full py-2 px-3 rounded border-gray-300 mt-2"
              placeholder="Enter server Room power usage e.g server machines, AC, routers, switches "
              id="server"
            />
             <input
              type="number"
              className="custom w-full py-2 px-3 rounded border-gray-300 mt-2"
              placeholder="Enter measured power usage e.g power measured by clamp meter"
              id="measured"
            />
             
            {/* Add more custom input fields as needed */}
          </div>
        )}

        <button
          onClick={calculateTotalPower}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Calculate
        </button>

        <p className="mt-4">Total Power: {`(AC) ${result.toFixed(2)} VA`}</p>
      </div>
    </div>
  );
};

export default Solarpower ;
