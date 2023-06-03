import React, { useState, useEffect } from "react";
import Slider from "./Slider";

const Battery: React.FC<{ result: number;setResult: (result: number) => void }> = ({ result, setResult }) => {
  const [toggle, setToggle] = useState(false);
  const [power, setPower] = useState(0);
  const [time, setTime] = useState(1);
  const [volts, setVolts] = useState(12);
  const [dod, setDod] = useState(0.7);
  const [efficiency, setEfficiency] = useState(0.8);
  const [efficiencyBattery, setEfficiencyBattery] = useState(0);
  const [battery, setBattery] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value: number): void => {
    setSliderValue(value);
    setTime(value);
  };
 function CalculateBatteryPower(): void {
    const batteryPower = Math.ceil((power * time) / volts);
    if (toggle) {
      const efficiencyBatteryPower = Math.ceil(batteryPower / (efficiency * dod));
      setEfficiencyBattery(efficiencyBatteryPower);
    }
    setBattery(Math.ceil(batteryPower / 0.64));
  }
  
  useEffect(() => {
    setPower(result);
  }, [result]);

  useEffect(() => {
    CalculateBatteryPower();
  });

 

  return (
    <div className="container bg-pink-500 mt-6 m-4  p-4 shadow-md rounded-md flex flex-col max-[640px]:flex-row justify-center items-center">
      <h2 className="text-xl font-bold mb-4">Battery Requirement</h2>
      <div className="flex flex-shrink-0  mb-4 align-middle items-center ">
        <label htmlFor="customPower" className="mr-2">
          Power:
        </label>
        <input
          id="customPower"
          type="number"
          placeholder={(result / 0.8).toString()}
          onChange={(e) => {
            const value = Math.round(parseFloat(e.target.value) * 0.8);
            setPower(value);
            setResult(value)
          }}
          className="m-2 p-4 outline-none border-grey-400 border-solid border-2 rounded-lg align-middle"
        />
        <label htmlFor="customVolts" className="mr-2 text-center">
          Volts:
        </label>
        <input
          id="customVolts"
          type="number"
          placeholder={volts.toString() + " Volts"}
          onChange={(e) => setVolts(parseInt(e.target.value))}
          value={volts}
          className=" m-2 p-4 outline-none border-grey-400 border-solid border-2 rounded-lg"
        />
      
      
      </div>
      <p>Load Power : <span className="bold font-bold text-center text-slate-950 ">{result}</span> Watts </p>
      <div className=" mb-4 flex flex-shrink-0 ">
        <label htmlFor="extra" className="mr-2">
          Options:
        </label>
        <input
          type="checkbox"
          name="extra"
          id="extra"
          onClick={() => {
            setToggle(!toggle);
          }}
          className="w-1/2"
        />
      </div>

      {toggle ? (
        <div className="flex flex-col justify-center m-4  p-2 border-solid">
          <label htmlFor="dod" className="mr-2">
            Depth of Discharge (DOD):
          </label>
          <Slider
            min={0}
            max={100}
            step={1}
            defaultValue={dod * 100}
            onChange={(value) => {
              setDod(value / 100);
            }}
          />
          <span>{(dod * 100).toFixed(0)}</span> 
          <br/>
          <label htmlFor="efficiency" className="m-2 p-4 justify-center">
            Battery Efficiency (BE):
          </label>
          <Slider
            min={0}
            max={100}
            step={1}
            defaultValue={efficiency * 100}
            onChange={(value) => {
              setEfficiency(value / 100);
            }}
          />
          <span>{(efficiency * 100).toFixed(0)}</span>
        </div>
      ) : null}
 <div className="mb-4">
        <label htmlFor="customTime" className="mr-2">
          Time:
        </label>
        <div className="text-center mt-4">
        <Slider
            min={1}
            max={10}
            step={1}
            defaultValue={time}
            onChange={(value) => {
              setTime(value);
            }}
          />
        </div>
      </div>
      

      <div className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md max-w-full">
        Battery Power: {toggle ? efficiencyBattery : battery}
      </div>
    </div>
  );
};

export default Battery;
