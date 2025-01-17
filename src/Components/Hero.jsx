import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import scrolling from "../assets/scrolling.png";
// Array of predefined color palettes
const palettes = [
  ["#FFB6C1", "#FFDAB9", "#FFE4B5", "#E6E6FA", "#B0E0E6"], // Soft Pastels
  ["#dad7cd", "#a3b18a", "#588157", "#3a5a40", "#344e41"], // Soft Pastels
  ["#21295c", "#1b3b6f", "#065a82", "#1c7293", "#9eb3c2"],
  ["#355C7D", "#6C5B7B", "#C06C84", "#F67280", "#F8B195"], // Gradient Shades
  ["#003F91", "#0075F2", "#00B5E2", "#00D1D1", "#3DF4F4"], // Cool Blues
  ["#780000", "#c1121f", "#fdf0d5", "#003049", "#669bbc"],
];

const Hero = () => {
  const [laptopColors, setLaptopColors] = useState(palettes[0]);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      const randomLaptopPalette =
        palettes[Math.floor(Math.random() * palettes.length)];

      setLaptopColors(randomLaptopPalette);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
    return () => {
      document.body.style.overflowX = "auto";
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white min-h-screen">
      {/* Text Section */}
      <div className="md:w-1/2 items-center justify-center text-left flex flex-col space-y-4">
        <h1 className="text-[60px] font-bold max-w-[700px] pl-16 text-gray-800">
          The <span className="text-blue-500">ultimate tool</span> for
          generating
          <span className="text-pink-500"> color</span> palettes instantly!
        </h1>

        <p className="text-gray-600 text-[18px]">
          Create stunning color palettes with ease using our super-fast
          generator.
        </p>

        <Link to="/generator">
          <button className="bg-blue-500 text-white w-[200px] py-3 rounded-lg hover:bg-blue-600">
            Start the generator!
          </button>
        </Link>

        <Link to="/explore">
          <button className=" bg-pink-500  text-white w-[200px] py-3 rounded-lg hover:bg-pink-600">
            Explore trending palettes
          </button>
        </Link>

        <Link to="/categories">
          <button className="border border-gray-300 text-black w-[200px] py-3 rounded-lg hover:border-gray-800">
          Palette for every mood !
          </button>
        </Link>
      </div>

      {/* Illustration Section */}
      <div className="md:w-1/2 flex justify-center items-end mt-8 md:mt-10 relative">
        {/* Desktop Screen */}
        <div className="absolute w-[700px] h-[500px] bg-white rounded-md shadow-lg right-[-200px] md:right-[-150px] bottom-[-10px] cursor-pointer"
        onClick={()=>navigate("/explore")}>
          {/* Bezel */}
          <div className="absolute top-0 left-0 right-0 bottom-0 border-[8px] border-black rounded-md flex items-center justify-center overflow-hidden">
            {/* Screen */}
            <div className="relative w-full h-full p-3">
              <img
                style={{
                  animationDuration: "30s",
                  animationIterationCount: "infinite",
                  top: "-900px", // Change this value to adjust the vertical position
                  transform: "translateX(0px) translateY(0px)", // Adjust the translate values
                }}
                src={scrolling} // Use the imported image here
                alt="Moving Image"
                className="absolute w-full h-auto animate-scroll-up"
              />
              <img
                style={{
                  animationDuration: "30s",
                  animationIterationCount: "infinite",
                  top: "-15px",
                  transform: "translateX(0px) translateY(0px)", // Adjust the translate values
                }}
                src={scrolling} // Use the imported image here
                alt="Moving Image"
                className="absolute w-full h-auto animate-scroll-up"
              />
            </div>
          </div>
          {/* Base */}
          <div className="absolute bottom-[-90px] left-[330px] right-[210px] h-[90px] bg-gray-200 shadow"></div>
          <div className="absolute bottom-[-95px] left-[280px] right-[160px] h-[12px] bg-gray-400 rounded-b-md shadow"></div>
        </div>

        {/* Laptop Screen */}
        <div className="relative w-[400px] h-[260px] bg-gray-200 rounded-md shadow-lg top-24 right-44 group cursor-pointer" 
        onClick={()=>{navigate("/generator")}}>
          {/* Bezel */}
          <div className="absolute top-0 left-0 right-0 bottom-0 border-[8px] border-black rounded-t-md flex items-center justify-center">
            {/* Screen */}
            <div className="w-full h-full bg-gray-100 flex relative">
              <div
                className="flex-1"
                style={{ backgroundColor: laptopColors[0] }}
              ></div>
              <div
                className="flex-1"
                style={{ backgroundColor: laptopColors[1] }}
              ></div>
              <div
                className="flex-1"
                style={{ backgroundColor: laptopColors[2] }}
              ></div>
              <div
                className="flex-1"
                style={{ backgroundColor: laptopColors[3] }}
              ></div>
              <div
                className="flex-1"
                style={{ backgroundColor: laptopColors[4] }}
              ></div>

              {/* Text Overlay */}
              <div className="absolute top-[-100px] right-[235px] inset-0 flex items-center justify-center h-11">
                <h2
                  style={{ fontFamily: "Annie Use Your Telescope , serif" }}
                  className="text-black text-3xl transition-transform transform"
                >
                  Make a Palette
                </h2>
              </div>

              {/* Arrow */}
              <div className="arrow-container absolute top-[-75px] right-[50px] inset-0 flex items-center justify-center h-11">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.000000pt"
                  height="60.000000pt"
                  viewBox="0 0 62.000000 65.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="arrow "
                >
                  <g
                    transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M140 520 c0 -5 16 -16 35 -25 20 -8 62 -40 94 -72 57 -58 89 -118
              105 -202 l6 -35 -25 24 c-17 16 -25 19 -24 9 0 -8 13 -24 28 -36 l28 -22 28
              29 c16 17 26 33 22 36 -4 4 -15 -4 -25 -16 l-19 -23 -5 47 c-12 103 -101 226
              -200 277 -43 22 -48 23 -48 9z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[-20px] left-[-40px] right-[-40px] h-[12px] bg-gray-400 rounded-b-md shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
