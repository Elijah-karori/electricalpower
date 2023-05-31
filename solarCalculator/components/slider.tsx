import React, { useState } from 'react';

const SlidingInput = () => {
  const [value, setValue] = useState('');
  const [barColor, setBarColor] = useState('#000');

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const rect = input.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setValue(percentage.toFixed(0));
    setBarColor(`hsl(${percentage}, 100%, 50%)`);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const rect = input.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    const snappedValue = Math.round(percentage);
    setValue(snappedValue.toFixed(0));
    setBarColor(`hsl(${snappedValue}, 100%, 50%)`);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="slider"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      />
      <div
        className="slider-bar"
        style={{ background: barColor }}
      />
      <span style={{ color: barColor }}>{value}</span>
    </div>
  );
};

export default SlidingInput;
