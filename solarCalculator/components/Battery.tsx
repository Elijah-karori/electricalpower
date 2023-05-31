import React, { useState, useEffect } from "react";

const Battery: React.FC<{ result: number }> = ({ result }) => {
  const [toggle, setToggle] = useState(false);
  const [power, setPower] = useState(0);
  const [time, setTime] = useState(1);
  const [volts, setVolts] = useState(12);
  const [dod, setDod] = useState(0.7);
  const [efficiency, setEfficiency] = useState(0.8);
  const [efficiencyBattery, setEfficiencyBattery] = useState(0);
  const [battery, setBattery] = useState(0);

  useEffect(() => {
    setPower(result);
  }, [result]);

  useEffect(() => {
    CalculateBatteryPower();
  }, [power, time, volts, dod, efficiency, CalculateBatteryPower]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function CalculateBatteryPower() {
    const batteryPower = Math.ceil((power * time) / volts);
    if (toggle) {
      const efficiencyBatteryPower = Math.ceil(
        (batteryPower / (efficiency * dod))
      );
      setEfficiencyBattery(efficiencyBatteryPower);
    }
    setBattery(Math.ceil(batteryPower/0.64));
  }

  return (
    <div className="card bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Battery Requirement</h2>
      <div className="input-container mb-4">
        <label htmlFor="customPower" className="mr-2">
          Power:
        </label>
        <input
          id="customPower"
          type="number"
          placeholder={result.toString()}
          onChange={(e) => {
            const value = Math.round(parseFloat(e.target.value) * 0.8);
            setPower(value);
          }}
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
        <p>{power}</p>
      </div>
      <div className="input-container mb-4">
        <label htmlFor="customTime" className="mr-2">
          Time:
        </label>
        <input
          id="customTime"
          type="number"
          placeholder={time.toString() + " hrs"}
          onChange={(e) => setTime(parseInt(e.target.value))}
          value={time}
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
      </div>
      <div className="input-container mb-4">
        <label htmlFor="customVolts" className="mr-2">
          Volts:
        </label>
        <input
          id="customVolts"
          type="number"
          placeholder={volts.toString() + " Volts"}
          onChange={(e) => setVolts(parseInt(e.target.value))}
          value={volts}
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
      </div>

      <div className="input-container mb-4">
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
        <div className="input-container mb-4">
          <label htmlFor="dod" className="mr-2">
            Depth of Discharge (DOD):
          </label>
          <input
            id="dod"
            type="range"
            min="0"
            max="100"
            onChange={(e) => {
              setDod(parseInt(e.target.value) / 100);
            }}
            className="w-1/2"
          />
          <span>{(dod * 100).toFixed(0)}</span>

          <label htmlFor="efficiency" className="mr-2">
            Battery Efficiency (BE):
          </label>
          <input
            id="efficiency"
            type="range"
            min="0"
            max="100"
            onChange={(e) => {
              setEfficiency(parseInt(e.target.value) / 100);
            }}
            className="w-1/2"
          />
          <span>{(efficiency * 100).toFixed(0)}</span>
        </div>
      ) : null}

      <button
        onClick={CalculateBatteryPower}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Calculate
      </button>
      <div className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Battery Power: {toggle ? efficiencyBattery : battery}
      </div>
    </div>
  );
};

export default Battery;
