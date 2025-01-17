import React from "react";
import { FaApple, FaGoogle, FaFacebook, FaTwitter, FaAmazon } from "react-icons/fa";
import { TbBrandDisney } from "react-icons/tb";
import { ImWindows } from "react-icons/im";
import { RiNetflixFill } from "react-icons/ri";
import { FaAirbnb } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { SiUbisoft } from "react-icons/si";

const Logos = () => {
  return (
    <div className=" items-center justify-center pb-28 ">
      <div className=" pt-16 text-center text-gray-800 font-semibold text-lg transition-transform duration-300 hover:scale-105 hover:text-blue-800">
        <h1>Used by 5+ million designers and by top companies</h1>
      </div>
{/*---------------------------------------------------------------------- */}

      <div className="flex justify-center items-center pt-10  ">
      <div className="grid grid-cols-10 gap-4 w-full max-w-5xl pt-5  hover:">
        {/* Logo Columns */}
        <div className="flex items-center justify-center ">
          <TbBrandDisney className="text-black text-7xl transition-transform duration-300 hover:scale-125 " />
        </div>
        <div className="flex items-center justify-center ">
          <ImWindows  className="text-black text-7xl transition-transform duration-300 hover:scale-125" />
        </div>
        <div className="flex items-center justify-center ">
          <RiNetflixFill className="text-black text-7xl transition-transform duration-300 hover:scale-125" />
        </div>
        <div className="flex items-center justify-center  ">
          <FaAirbnb className="text-black text-7xl transition-transform duration-300 hover:scale-125" />
        </div>
        <div className="flex items-center justify-center  ">
          <FaDropbox  className="text-black text-7xl transition-transform duration-300 hover:scale-125" />
        </div>
        <div className="flex items-center justify-center  ">
          <SiUbisoft className="text-black text-7xl transition-transform duration-300 hover:scale-125" />
        </div>
        <div className="flex items-center justify-center  ">
          <FaApple className="text-black text-7xl transition-transform duration-300 hover:scale-125" />
        </div>
        <div className="flex items-center justify-center ">
          <FaFacebook className="text-black text-7xl transition-transform duration-300 hover:scale-125" />
        </div>
        <div className="flex items-center justify-center  ">
          <FaTwitter className="text-black text-7xl transition-transform duration-300 hover:scale-125" />
        </div>
        <div className="flex items-center justify-center ">
          <FaAmazon className="text-black text-7xl transition-transform duration-300 hover:scale-125" />
        </div>
      </div>
    </div>


      
      </div>
    
  );
};

export default Logos;
