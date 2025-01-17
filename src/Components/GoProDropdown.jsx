import React from "react";
import gopro from "../assets/gopro_users.png";
import gopro_logo from "../assets/gopro_companies.png";
import gopro_bgPic from "../assets/gopro_bg.jpg";
import { IoCloseSharp } from "react-icons/io5";

const GoProDropdown = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div
        className="relative bg-white rounded-lg z-20"
        style={{ width: "1000px", height: "600px" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-transparent text-white hover:border-2 border-gray-200 text-xl w-10 h-10 flex items-center justify-center p-0 rounded-lg"
        >
          <IoCloseSharp size={40} />
        </button>

        <div className="flex h-[90%] rounded-t-md cursor-default">
          <div className="w-[45%] h-full p-4 justify-center items-center">
            <h1 className="font-bold font-sans text-4xl text-black mt-5">
              Go Pro to unlock all the features.
            </h1>
            <h2 className="font-serif text-gray-600 mt-2">
              Level up your design skills with the best color tools ever.
            </h2>

            <ul className="text-gray-700 font-sans space-y-3 text-base pt-3">
              <li className="text-gray-500">
                🌸 <span className="text-black">Remove ads</span> and popups to
                enter the heaven of colors.
              </li>
              <li className="text-gray-500">
                🌸 <span className="text-black">Generate palettes</span> with
                more than 5 colors automatically or with color theory rules.
              </li>
              <li className="text-gray-500">
                🌸 Save <span className="text-black">unlimited palettes</span>,
                colors and gradients, and organize them in projects and
                collections.
              </li>
              <li className="text-gray-500">
                🌸 Explore more than{" "}
                <span className="text-black">10 million color schemes</span>{" "}
                perfect for any project.
              </li>
              <li className="text-gray-500">
                🌸 <span className="text-black">Pro Profile,</span> a new
                beautiful page to present yourself and showcase your palettes,
                project and collections.
              </li>
              <li>
                <p className="text-sm font-semibold "><span className="font-bold">Cancel your subscription anytime.</span> we'll send you reminders 3 days before renewals.</p>
              </li>
            </ul>

            <div className="mt-3">
              <button className="bg-blue-500 text-white w-full font-sans py-1 border-2 border-transparent rounded hover:bg-blue-700 transition-colors">
                Upgrade for just ₹231/month
              </button>
            </div>
          </div>

          <div className="w-[55%] h-full bg-green-700 overflow-hidden">
            <img
              src={gopro_bgPic}
              alt="Go Pro Features"
              className="rounded-tr-md object-cover"
            />
            <div className="absolute top-[32%] right-[9.5%] transform -translate-x-1/2 w-44 h-44 bg-transparent rounded-full flex justify-center items-center">
              <h2 className="absolute text-3xl font-bold text-white font-sans justify-center items-center mb-1 z-10">
                PRO
              </h2>

              <div className="animate-spin-slow w-44 h-44">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                >
                  <path
                    className="st0"
                    d="M199.5,100c0-14.9-9.9-27.5-23.6-31.5c6.8-12.5,4.9-28.4-5.6-38.9s-26.5-12.4-38.9-5.6
                    c-4-13.6-16.6-23.6-31.5-23.6S72.5,10.4,68.5,24c-12.5-6.8-28.4-4.9-38.9,5.6S17.2,56.1,24,68.5C10.4,72.5,0.5,85.1,0.5,100
                    s9.9,27.5,23.6,31.5c-6.8,12.5-4.9,28.4,5.6,38.9s26.5,12.4,38.9,5.6c4,13.6,16.6,23.6,31.5,23.6s27.5-9.9,31.5-23.6
                    c12.5,6.8,28.4,4.9,38.9-5.6s12.4-26.5,5.6-38.9C189.6,127.5,199.5,114.9,199.5,100z"
                    style={{ fill: "#ff0096" }}
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[10%] w-full p-2 border-t-2 border-gray-300 cursor-default">
          <p className="text-sm pt-2 text-gray-700 justify-center items-center">
            Used by 5+ million users
          </p>
          <img
            src={gopro}
            alt=""
            style={{ width: "200px", marginLeft: "20px", marginBottom: "15px" }}
          />

          <p className="text-gray-700 pl-3 ml-2 text-sm">
            And Top <br /> Companies
          </p>

          <img
            src={gopro_logo}
            alt=""
            style={{ height: "30px", marginLeft: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GoProDropdown;
