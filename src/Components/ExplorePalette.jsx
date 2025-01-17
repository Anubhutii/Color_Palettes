import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import colors from "../../colors.json";

const ExplorePalette = () => {
  const palettes = colors; // Assuming colors.json is an array of palettes
  const [hoveredColor, setHoveredColor] = useState({
    paletteIndex: null,
    colorIndex: null,
  });

  const [copiedColor, setCopiedColor] = useState(null);

  return (
    <div>
      <div className="flex gap-5 h-16 text-base items-center p-8 border-b-2 border-gray-200 ">
        <FaSearch size={20} />
        <p>Search with color, topics, style or hex values...</p>
      </div>

      <div className="text-center ">
        <h1 className="text-6xl font-bold text-black mt-24">
          Trending Color Palettes
        </h1>
        <h3 className="text-xl text-gray-600 mt-7">
          Get inspired by thousands of beautiful
        </h3>
        <h3
          className="text-x
        l text-gray-600"
        >
          color schemes and make something cool!
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-5 h-[100vh] mt-5 p-4">
        {palettes.map((palette, paletteIndex) => (
          <div key={paletteIndex}>
            <div className="rounded-md overflow-hidden hover:shadow-xl">
              <div className="flex">
                {palette.colors.map((color, colorIndex) => {
                  const isHovered =
                    hoveredColor.paletteIndex === paletteIndex &&
                    hoveredColor.colorIndex === colorIndex;

                  return (
                    <div
                      key={colorIndex}
                      className={`h-[120px] flex-1 transition-all duration-200 ease-in-out cursor-pointer ${
                        isHovered ? "flex-[3]" : "flex-[1]"
                      }`}
                      style={{ backgroundColor: color }}
                      onMouseEnter={() =>
                        setHoveredColor({ paletteIndex, colorIndex })
                      }
                      onMouseLeave={() =>
                        setHoveredColor({
                          paletteIndex: null,
                          colorIndex: null,
                        })
                      }
                    >
                      {isHovered && (
                        <span
                          onClick={() => {
                            navigator.clipboard.writeText(color); // Copy the color code
                            setCopiedColor(color); // Update the copied state
                            setTimeout(() => setCopiedColor(null), 2000); // Reset the text after 2 seconds
                          }}
                          className="text-white text-sm font-bold flex justify-center items-center h-full cursor-pointer"
                        >
                          {copiedColor === color ? (
                            <FaCheck size={25} />
                          ) : (
                            color
                          )}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-end items-center p-2  cursor-pointer">
              <GoHeart size={15} />
              <span className="text-xs mx-2">{palette.likes}</span>
              <HiOutlineDotsHorizontal size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePalette;
