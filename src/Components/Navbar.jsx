import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import GoProDropdown from "./GoProDropdown";
import SignInPopup from "./SignInPopUp";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [hoverColor, setHoverColor] = useState("text-pink-600");
  const [isToolsDropdownVisible, setToolsDropdownVisible] = useState(false);
  const [isGoProDropdownVisible, setGoProDropdownVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const randomColor = () => {
    const colors = [  
      "text-red-400",
      "text-green-400",
      "text-yellow-400",
      "text-purple-400",
      "text-pink-400",
      "text-blue-400",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleMouseEnter = () => {
    const intervalId = setInterval(() => {
      setHoverColor(randomColor());
    }, 200);
    return intervalId;
  };

  const handleMouseLeave = (intervalId) => {
    clearInterval(intervalId);
    setHoverColor("text-pink-500");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-white border-b-2 border-gray-200 cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 border-t-emerald-600 border-r-red-500 border-b-blue-400 border-l-yellow-500 border-[8px] rounded animate-spin-slow"></div>
        
          <div
            onClick={()=>{navigate("/")}}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 bg-clip-text text-transparent tracking-widest"
            style={{ fontFamily: "Fontdiner Swanky, sans-serif" }}
          >
            Colours
          </div>
        
      </div>
      <ul className="flex gap-6 font-serif">
        {/* Tools Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setToolsDropdownVisible(true)}
          onMouseLeave={() => setToolsDropdownVisible(false)}
        >
          <a href="#tools" className="text-black hover:text-blue-600">
            Tools
          </a>
          {isToolsDropdownVisible && <DropdownMenu />}
        </li>

        {/* Go Pro Dropdown */}
        <li
          className="relative"
          onClick={() => setGoProDropdownVisible(!isGoProDropdownVisible)}
        >
          <a
            href="#go-pro"
            className={`${hoverColor}`}
            onMouseEnter={(e) => (e.target.intervalId = handleMouseEnter())}
            onMouseLeave={(e) => handleMouseLeave(e.target.intervalId)}
          >
            Go Pro
          </a>
          {isGoProDropdownVisible && (
            <GoProDropdown onClose={() => setGoProDropdownVisible(false)} />
          )}
        </li>

        {/* Sign In and Sign Up */}
        <li>
          <a onClick={()=>{setPopupVisible(true)}} href="#sign-in" className="text-black hover:text-blue-600">
            Sign in
          </a>
        </li>
        <li>
          <a
            onClick={()=>{setPopupVisible(true)}}
            href="#sign-up"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign up
          </a>
        </li>
      </ul>
      <SignInPopup
        visible={isPopupVisible}
        onClose={() => setPopupVisible(false)}
      />
    </nav>
  );
};

export default Navbar;
