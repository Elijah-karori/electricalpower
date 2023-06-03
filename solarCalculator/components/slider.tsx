import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="relative h-2 w-64">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="absolute h-full w-full opacity-0 cursor-pointer left-0 right-0 top-0 border-2 border-red-500"
      />
      <div className="absolute left-0 right-0 top-0 h-2 bg-gray-300 rounded-full"></div>
      <div
        className="absolute left-0 top-0 h-2 bg-blue-500 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
      <div
        className="absolute top-0 -mt-3 ml-2 text-xs text-gray-500 border-red-600 border-solid border-spacing-3"
        style={{ left: `${value}%` }}
      >
        {value}
      </div>
    </div>
  );
};

export default Slider;
