import React, { useState } from "react";
import svgImg from "../assets/svg1.png";
import svg2 from "../assets/svg2.png";
import svg3 from "../assets/svg3.png";
import svg4 from "../assets/svg4.png";

const Visualize = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh] space-y-8 text-center">
      {/* Header Section */}
      <div>
        <h1 className="font-bold font-sans text-black text-6xl">
          Palette Visualizer
        </h1>
        <p className="text-gray-500 text-md">
          Preview your colors on real designs for a better
        </p>
        <p className="text-gray-500 text-md">
          visual understanding. More templates to come!
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-row items-center justify-center space-x-8">
        <ul className="flex space-x-8">
          <li>
            <a
              href="#"
              className=" bg-gray-200 p-2 text-gray-800 hover:bg-gray-300 rounded-md  text-base"
            >
              All Design
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-gray-200 p-2 text-gray-800 hover:bg-gray-300 rounded-md text-base"
            >
              Mobile/Web UI
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-gray-200 p-2 text-gray-800 hover:bg-gray-300 rounded-md text-base"
            >
              Branding
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-gray-200 p-2 text-gray-800 hover:bg-gray-300 rounded-md text-base"
            >
              Typography
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-gray-200 p-2 text-gray-800 hover:bg-gray-300 rounded-md text-base"
            >
              Pattern
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-gray-200 p-2 text-gray-800 hover:bg-gray-300 rounded-md text-base"
            >
              Illustration
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full bg-gray-300">
        <div className=" absolute w-full grid grid-cols-2 bg-white gap-6 p-8">
          {/* Grid Item 1 */}
          <div className="w-full h-[450px] bg-gray-200 p-11">
            <div className="w-full h-[365px] bg-white rounded-lg">
              <div className=" absolute flex w-[41%] h-[350] ">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="47"
                  className="absolute top-2 left-2"
                  // Make background explicitly transparent
                >
                  <path
                    d="M0 0 C11.88 0 23.76 0 36 0 C36 15.51 36 31.02 36 47 C24.12 47 12.24 47 0 47 C0 31.49 0 15.98 0 0 Z"
                    fill="#FFFFFF"
                    transform="translate(0,0)"
                  />
                  <path
                    d="M0 0 C13.24210988 -0.49503214 13.24210988 -0.49503214 16.89453125 1.890625 C19.72485003 4.72619484 20.20420221 6.40385837 20.375 10.3125 C20.42398437 11.07175781 20.47296875 11.83101562 20.5234375 12.61328125 C19.70915558 16.32616374 17.986826 17.7254474 15 20 C12.16431975 20.53187371 10.00675895 20.78694036 7.1875 20.8125 C3.6296875 20.9053125 3.6296875 20.9053125 0 21 C0 14.07 0 7.14 0 0 Z"
                    fill="#CAA8F5"
                    transform="translate(9,13)"
                  />
                  <path
                    d="M0 0 C7 6 7 6 10 9 C8.59698853 12.18673962 6.92234929 14.32221406 4.4375 16.75 C3.50744141 17.67039062 3.50744141 17.67039062 2.55859375 18.609375 C1 20 1 20 0 20 C0 13.4 0 6.8 0 0 Z"
                    fill="#9984D4"
                    transform="translate(9,13)"
                  />
                </svg>
                <p className="text-sm z-10 ml-12 mt-[22.5px]">
                  Design<span className="text-[#CAA8F5]"> Academy</span>
                </p>
                <ul className="flex gap-6 font-serif text-sm text-gray-600 mt-6 ml-40">
                  <li>Learn More</li>
                  <li className="flex border-2 border-[#B27C66] text-[#B27C66] h-6 w-20 items-center justify-center">
                    Explore
                  </li>
                  <li className="flex bg-[#9984D4] text-black text-sm h-6 w-20 items-center justify-center">
                    {" "}
                    Enroll now
                  </li>
                </ul>
              </div>
              <div className=" absolute flex w-[40%] mt-20 h-64 p-0 ml-3">
                <div className="w-1/2 h-[270px] bg-white">
                  <h1 className="text-2xl font-semibold mt-10">Elevate Your Creativity with Expert Design Courses</h1>
                  <p className="text-xs px-2">
                    Whether you're a beginner or looking to refine your
                    skills, our courses offer hands-on experience valuable industry insights. Elevate your
                    design expertise and start creating stunning visuals today!
                  </p>
                </div>
                <div className="w-1/2 h-full">
                  <img src={svgImg} alt="" className="h-full ml-8 mt-3"/>
                </div>

              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="w-full h-[450px] bg-gray-200">
            <img src={svg2} alt="" className=" relative h-[45%] top-5 left-16"/>
            <img src={svg3} alt="" className=" relative h-[46%] top-8 left-[320px]"/>
          </div>

          {/* Grid Item 3 */}
          <div className="w-full h-[450px] bg-[#F7F7F8]">
            <img src={svg4} alt="" className="h-full pl-32" />
          </div>

          {/* Grid Item 4 */}
          {/* <div className="w-full h-[450px] bg-gray-200">
            <h3 className="font-bold text-lg text-gray-800">Item 2</h3>
            <p className="text-gray-600">Content for Item 2</p>
          </div> */}

          {/* Grid Item 5 */}
          {/* <div className="w-full h-[400px] bg-gray-200">
            <h3 className="font-bold text-lg text-gray-800">Item 1</h3>
            <p className="text-gray-600">Content for Item 1</p>
          </div> */}

          {/* Grid Item 6 */}
          {/* <div className="w-full h-[400px] bg-gray-200">
            <h3 className="font-bold text-lg text-gray-800">Item 2</h3>
            <p className="text-gray-600">Content for Item 2</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Visualize;
