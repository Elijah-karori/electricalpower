import React, { useState } from "react";

const PowerCalculator = () => {
  const [power, setPower] = useState(0);
  const [averagePower, setAveragePower] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [result, setResult] = useState(0);

  const handleInputChange = (e: { target: { value: any; }; }) => {
    setPower(Number(e.target.value));
  };

  const handleAveragePowerChange = (e: { target: { value: any; }; }) => {
    setAveragePower(Number(e.target.value));
  };

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const calculatedResult = toggle ? power * 0.8 + averagePower : power * 0.8;
    setResult(calculatedResult);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
        </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="power" className="block mb-1">
            Power:
          </label>
          <input
            type="number"
            id="power"
            name="power"
            value={power}
            onChange={handleInputChange}
            className="block w-full border-solid border-2  border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {toggle && (
          <div>
            <label htmlFor="averagePower" className="block mb-1 mt-4">
              Average Power:
            </label>
            <input
              type="number"
              id="averagePower"
              name="averagePower"
              value={averagePower}
              onChange={handleAveragePowerChange}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}
        <div className="mt-4">
          <label htmlFor="toggle" className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="toggle"
              name="toggle"
              checked={toggle}
              onChange={handleToggleChange}
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="text-sm">Add Average Power</span>
          </label>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-indigo-600 px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
          >
            Calculate
          </button>
        </div>
      </form>
      {result !== 0 && (
        <div className="mt-4">
          <p className="text-gray-700">Result: {result}</p>
        </div>
      )}
    </div>
  );
};

export default PowerCalculator;
