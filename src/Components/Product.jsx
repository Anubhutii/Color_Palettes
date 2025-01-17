import React from "react";
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";

const Product = () => {
  const CardsDtata = [
    {
      icon: <FaApple />,
      title: "iOS App",
      description: "Create, browse, and save palettes on the go.",
      hoverDetails: "View on the App Store",
      bgColor: "#D8F6FF",
      textColor: "#0FB3E7",
    },
    {
      icon: <BsAndroid2 />,
      title: "Android App",
      description: "Thousands of palettes in your pocket.",
      hoverDetails: "View on the Play Store",
      bgColor: "#D5F8EF",
      textColor: "#14B789",
    },
    {
      icon: <FaFigma />,
      title: "Figma Plugin",
      description: "All palettes right in your workspace.",
      hoverDetails: "Install Now",
      bgColor: "#FFE5F4",
      textColor: "#E50087"
    },
    {
      icon: <FaChrome />,
      title: "Chrome Extension",
      description: "Get and edit a palette every new tab.",
      hoverDetails: "Add to the Chrome",
      bgColor: "#E8E2F7",
      textColor: "#802FDE"
    },
    {
      icon: <SiAdobe />,
      title: "Adobe Extension",
      description: "Use Coolors with your favorite tools.",
      hoverDetails: "Download",
      bgColor: "#FDF3CE",
      textColor: "#DAAB00"
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-14">
      {CardsDtata.map((item, index) => (
        <div
          key={index}
          className="relative group flex flex-col items-center bg-[#F7F7F8] text-gray-800 p-14 rounded-lg shadow-lg overflow-hidden"
        >
          {/* Main Card Content */}
          <div className="flex flex-col items-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:translate-y-4 cursor-pointer">
            <div className="text-black text-6xl">{item.icon}</div>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-center text-gray-600">{item.description}</p>
          </div>

          {/* Hidden Details Card */}
          <div style={{background: item.bgColor}} className="absolute inset-0 flex justify-center items-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out rounded-lg cursor-pointer">
            
           <h3 style={{color: item.textColor}} className="text-3xl font-bold text-center px-14">{item.hoverDetails}</h3>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Product;
