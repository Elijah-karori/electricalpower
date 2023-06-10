import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
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
    <div className="relative w-full min-w-[200px] text-blue-500 h-2">
         <label
        className="absolute inset-0 z-10 rounded-l-full h-full pointer-events-none bg-current"
        style={{ width: `${step!=undefined &&step<10?value*8:value}%` }}
      ></label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="w-full absolute inset-0 bg-transparent cursor-pointer focus:outline-none focus:outline-0 appearance-none [-webkit-appearance:none] [&amp;::-webkit-slider-runnable-track]:h-full [&amp;::-moz-range-track]:h-full [&amp;::-webkit-slider-runnable-track]:rounded-full [&amp;::-moz-range-track]:rounded-full [&amp;::-webkit-slider-runnable-track]:bg-blue-gray-100 [&amp;::-moz-range-track]:bg-blue-gray-100 [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:[-webkit-appearance:none] [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:[-webkit-appearance:none] [&amp;::-moz-range-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-moz-range-thumb]:border-0 [&amp;::-webkit-slider-thumb]:border-0 [&amp;::-moz-range-thumb]:ring-2 [&amp;::-webkit-slider-thumb]:ring-2 [&amp;::-moz-range-thumb]:ring-current [&amp;::-webkit-slider-thumb]:ring-current [&amp;::-moz-range-thumb]:bg-white [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-moz-range-thumb]:relative [&amp;::-webkit-slider-thumb]:relative [&amp;::-moz-range-thumb]:z-20 [&amp;::-webkit-slider-thumb]:z-20 [&amp;::-moz-range-thumb]:w-3.5 [&amp;::-webkit-slider-thumb]:w-3.5 [&amp;::-moz-range-thumb]:h-3.5 [&amp;::-webkit-slider-thumb]:h-3.5 [&amp;::-moz-range-thumb]:-mt-[3px] [&amp;::-webkit-slider-thumb]:-mt-[3px]"
      color="green"
      />
      
    </div>
  );
};

export default Slider;
