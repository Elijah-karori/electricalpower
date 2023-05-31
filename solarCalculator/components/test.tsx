import React, { useState } from "react";

const Test: React.FC = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
      setIsOn(!isOn);
    };
  
    return (
        <div className="relative w-14 h-8">
        <button
          className={`${
            isOn ? 'bg-green-500' : 'bg-gray-300'
          } absolute h-6 w-6 rounded-full top-1 left-1 transition-transform duration-300 transform ${
            isOn ? 'translate-x-full' : 'translate-x-0'
          }`}
          onClick={handleToggle}
        >
          <svg
            className={`${
              isOn ? 'text-white' : 'text-gray-500'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
          >
            <path
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 6H9a6 6 0 1 0 0 12h6a6 6 0 0 0 0-12Z"
            />
            <circle cx="15" cy="12" r="3" fill="#000000" stroke="#000000" strokeWidth="2" />
          </svg>
        </button>
      </div>
    );
      };
      

export default Test;
