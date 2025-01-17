import React from "react";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute  w-[600px] h-[500px] right-1 flex justify-center items-center top-0  bg-transparent  rounded-lg z-50 ">
      <div className="  w-full h-[440px] right-1 bg-white shadow-lg rounded-lg z-50 border border-gray-200">
        <div className=" flex h-full">
          {/* Left Column */}
          <div className="w-[600px] border-r border-gray-200 p-5">
            <ul>
              <li className=" pl-2 flex items-start py-2 gap-3 text-black text-lg cursor-pointer hover: hover:border-green-500 hover:bg-[#E9FCF6] hover:text-green-500 rounded-md">
                <div className="w-12 h-10 pt-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <g>
                      <path
                        d="M21,17H38a0,0,0,0,1,0,0V83a0,0,0,0,1,0,0H21a7,7,0,0,1-7-7V24A7,7,0,0,1,21,17Z"
                        style={{ fill: "#02d1ac" }}
                      />
                      <rect
                        x="38"
                        y="17"
                        width="24"
                        height="66"
                        style={{ fill: "#74e6d1" }}
                      />
                      <path
                        d="M62,17H79a7,7,0,0,1,7,7V76a7,7,0,0,1-7,7H62a0,0,0,0,1,0,0V17A0,0,0,0,1,62,17Z"
                        style={{ fill: "#ccf6ee" }}
                      />
                    </g>
                    <path
                      d="M22,29.57l-2-1-2-1a.6.6,0,0,0-.48,0l-2,1-2,1A3.43,3.43,0,0,1,8.88,25l1-2,1-2a.6.6,0,0,0,0-.48l-1-2-1-2a3.43,3.43,0,0,1,4.58-4.58l2,1,2,1a.6.6,0,0,0,.48,0l2-1,2-1a3.43,3.43,0,0,1,4.59,4.58l-1,2-1,2a.6.6,0,0,0,0,.48l1,2,1,2A3.43,3.43,0,0,1,22,29.57Z"
                      style={{ fill: "#a6efe2" }}
                    />

                    <g>
                      <path
                        d="M38.1,37.35h9.73a4,4,0,0,1,4,4v8a0,0,0,0,1,0,0H34.1a0,0,0,0,1,0,0v-8A4,4,0,0,1,38.1,37.35Z"
                        transform="translate(-18.05 44.12) rotate(-45.98)"
                        style={{ fill: "#ccf6ee" }}
                      />
                      <path
                        d="M57.41,39.34H75.14a0,0,0,0,1,0,0v49a4,4,0,0,1-4,4H61.41a4,4,0,0,1-4-4v-49a0,0,0,0,1,0,0Z"
                        transform="translate(-27.13 67.76) rotate(-45.98)"
                        style={{ fill: "#02a78a" }}
                      />
                    </g>
                  </svg>
                </div>
                <div
                  onClick={() => {
                    navigate("/generator");
                  }}
                >
                  <span className="font-bold">Palette Generator</span>
                  <p className="text-sm text-gray-500">
                    Create your palettes in seconds
                  </p>
                </div>
              </li>

              {/*------------------------------------------------------------------------------------------------------------------------ */}

              <li className="flex items-start pl-2 py-2 gap-3 text-black text-lg cursor-pointer hover:bg-[#FFF2F9] hover:text-pink-500 rounded-md ">
                <div className="w-12 h-10 pt-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <g>
                      <path
                        d="M21,17H38a0,0,0,0,1,0,0V45.92a0,0,0,0,1,0,0H21a7,7,0,0,1-7-7V24A7,7,0,0,1,21,17Z"
                        style={{ fill: "#ff4cb5" }}
                      />
                      <rect
                        x="38"
                        y="17"
                        width="24"
                        height="28.92"
                        style={{ fill: "#ff8cd0" }}
                      />
                      <path
                        d="M62,17H79a7,7,0,0,1,7,7V38.92a7,7,0,0,1-7,7H62a0,0,0,0,1,0,0V17A0,0,0,0,1,62,17Z"
                        style={{ fill: "#ffccea" }}
                      />
                    </g>
                    <g>
                      <path
                        d="M21,54.08H38a0,0,0,0,1,0,0V83a0,0,0,0,1,0,0H21a7,7,0,0,1-7-7V61.08A7,7,0,0,1,21,54.08Z"
                        style={{ fill: "#ffa6da" }}
                      />
                      <rect
                        x="38"
                        y="54.08"
                        width="24"
                        height="28.92"
                        style={{ fill: "#ff73c5" }}
                      />
                      <path
                        d="M62,54.08H79a7,7,0,0,1,7,7V76a7,7,0,0,1-7,7H62a0,0,0,0,1,0,0V54.08A0,0,0,0,1,62,54.08Z"
                        style={{ fill: "#ff0096" }}
                      />
                    </g>
                    <path
                      d="M78.51,73A6.54,6.54,0,0,0,70,72.42a6.62,6.62,0,0,0-.83.74,7.27,7.27,0,0,0-.65.84,6.39,6.39,0,0,0-1.29-1.42,6.16,6.16,0,0,0-1.84-1,6.66,6.66,0,0,0-3.3-.33,6.2,6.2,0,0,0-3,1.33,6.44,6.44,0,0,0-.5,9.58l3.93,3.94L66.43,90a3,3,0,0,0,4.17,0l3.93-3.93,3.93-3.94a6.41,6.41,0,0,0,1.9-4.53A6.49,6.49,0,0,0,78.51,73Z"
                      style={{ fill: "#ffccea" }}
                    />
                    <path
                      d="M28.61,50.57a6.44,6.44,0,0,0-4.13-1.89,6.38,6.38,0,0,0-5.2,2,6.4,6.4,0,0,0-.66.84,6.34,6.34,0,0,0-1.28-1.42,6.6,6.6,0,0,0-5.15-1.36,6.19,6.19,0,0,0-3,1.33,6.46,6.46,0,0,0-.5,9.58l3.94,3.94,3.93,3.93a2.95,2.95,0,0,0,4.16,0l3.93-3.93,3.94-3.94a6.46,6.46,0,0,0,0-9.09Z"
                      style={{ fill: "#e50087" }}
                    />
                    <path
                      d="M57.64,10.35a6.44,6.44,0,0,0-4.13-1.89,6.54,6.54,0,0,0-4.38,1.27,6.37,6.37,0,0,0-1.48,1.58,6.11,6.11,0,0,0-1.28-1.42,6.33,6.33,0,0,0-1.85-1,6.63,6.63,0,0,0-3.3-.32,6.28,6.28,0,0,0-3,1.33,6.46,6.46,0,0,0-.5,9.58l3.94,3.94,3.93,3.93a2.92,2.92,0,0,0,2.08.86,2.89,2.89,0,0,0,2.08-.86l3.94-3.93,3.93-3.94a6.46,6.46,0,0,0,0-9.09Z"
                      style={{ fill: "#b20069" }}
                    />
                  </svg>
                </div>
                <div onClick={() => navigate("/explore")}>
                  <span className="font-bold">Explore Palettes</span>
                  <p className="text-sm text-gray-500">
                    Browse millions of trending color schemes
                  </p>
                </div>
              </li>

              {/*----------------------------------------------------------------------------------------------------------------------------------------------- */}

              <li className="flex items-start pl-2 py-2 gap-3 rounded-md text-black text-lg cursor-default hover:bg-[#F2F7FF] hover:text-[#0067FB]">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-10 pt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <rect
                        x="14"
                        y="17"
                        width="72"
                        height="66"
                        rx="7"
                        style={{ fill: "#cce0fe" }}
                      />
                      <path
                        d="M23.24,63.18c1.3-2.65,2.62-5.28,4-7.91s2.66-5.27,4-7.89A2.78,2.78,0,0,1,33,45.94a2.7,2.7,0,0,1,2.28.46l3.33,2.48L42,51.37a2.76,2.76,0,0,0,3.85-.55l6.41-8.55q3.2-4.27,6.38-8.56a2.63,2.63,0,0,1,2.46-1.06,2.78,2.78,0,0,1,2.21,1.6q3.41,7.26,6.79,14.51T76.8,63.29a2.69,2.69,0,0,1-.23,2.6,2.86,2.86,0,0,1-2.33,1.29q-12.12.19-24.24.19t-24.24-.24a2.87,2.87,0,0,1-2.35-1.33A2.63,2.63,0,0,1,23.24,63.18Z"
                        style={{ fill: "#73abfd" }}
                      />
                      <path
                        d="M39.36,76.81a9.12,9.12,0,1,1,6.44-2.67A9.09,9.09,0,0,1,39.36,76.81Z"
                        style={{ fill: "#0067fb" }}
                      />
                      <path
                        d="M29,28.84a9.13,9.13,0,1,1,6.44-2.68A9.09,9.09,0,0,1,29,28.84Z"
                        style={{ fill: "#79b4ff" }}
                      />
                      <path
                        d="M85.73,50a9.12,9.12,0,1,1,6.44-2.67A9.09,9.09,0,0,1,85.73,50Z"
                        style={{ fill: "#0048b0" }}
                      />
                    </svg>
                  </div>
                  <div onClick={() => navigate("/image_picker")}>
                    <span className="font-bold">Image Picker</span>
                    <p className="text-sm text-gray-500">
                      Get beautiful palettes from your photos
                    </p>
                  </div>
                </div>
              </li>
              {/*-------------------------------------------------------------------------------------------------------------------------------------- */}
              <li className="flex items-start  pl-2 py-2 gap-3 rounded-md text-black text-lg cursor-default hover:bg-[#FEF9E6] hover:text-[#DAAB00]">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-10 pt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      style={{ enableBackground: "new 0 0 100 100" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            style={{ fill: "#FCECB8" }}
                            d="M83.8,18.9L66.6,34.7C70,38.6,72,43.6,72,49.1c0,12.1-9.8,22-22,22c-6.1,0-11.7-2.5-15.6-6.6
               L16.3,81.2c1.2,1.1,2.9,1.8,4.7,1.8h58c3.9,0,7-3.1,7-7V24C86,22,85.2,20.2,83.8,18.9z"
                          />
                          <path
                            style={{ fill: "#F6CF45" }}
                            d="M28,49.1c0-12.1,9.8-22,22-22c6.7,0,12.6,3,16.6,7.6l17.2-15.8C82.6,17.7,80.9,17,79,17H21
               c-3.9,0-7,3.1-7,7v52c0,2,0.9,3.9,2.3,5.2l18.1-16.7C30.4,60.5,28,55.1,28,49.1z"
                          />
                          <path
                            style={{ fill: "#F6CF45" }}
                            d="M50,71c12.1,0,22-9.8,22-22c0-5.5-2-10.5-5.3-14.3L34.4,64.5C38.3,68.5,43.9,71,50,71z"
                          />
                          <path
                            style={{ fill: "#FCECB8" }}
                            d="M50,27.1c-12.1,0-22,9.8-22,22c0,6,2.4,11.4,6.3,15.4l32.3-29.7C62.6,30.1,56.7,27.1,50,27.1z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ fill: "#DAAB00" }}
                            d="M75,94.1H63.5c-1.4,0-2.8-0.5-3.8-1.5s-1.5-2.4-1.6-3.8V77.3c0-2.9,2.4-5.3,5.3-5.3l0,0H75
               c2.9,0,5.3,2.4,5.4,5.3l0,0v11.5c0,1.4-0.6,2.8-1.6,3.8C77.8,93.6,76.4,94.1,75,94.1z"
                          />
                          <g>
                            <polyline
                              style={{
                                fill: "none",
                                stroke: "#FCECB8",
                                strokeWidth: 3.4577,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: 10,
                              }}
                              points="63.9,83 67.5,86.6 74.6,79.4"
                            />
                          </g>
                        </g>
                        <g>
                          <path
                            style={{ fill: "#A98502" }}
                            d="M19.8,46.6H8.2c-1.4,0-2.8-0.5-3.8-1.5s-1.5-2.4-1.6-3.8V29.8c0-2.9,2.4-5.3,5.3-5.3l0,0h11.5
               c2.9,0,5.3,2.4,5.4,5.3l0,0v11.5c0,1.4-0.6,2.8-1.6,3.8C22.5,46.1,21.2,46.6,19.8,46.6z"
                          />
                          <g>
                            <line
                              style={{
                                fill: "none",
                                stroke: "#FCECB8",
                                strokeWidth: 3,
                                strokeLinecap: "round",
                                strokeMiterlimit: 10,
                              }}
                              x1="19.5"
                              y1="30.1"
                              x2="8.5"
                              y2="41"
                            />
                            <line
                              style={{
                                fill: "none",
                                stroke: "#FCECB8",
                                strokeWidth: 3,
                                strokeLinecap: "round",
                                strokeMiterlimit: 10,
                              }}
                              x1="19.5"
                              y1="41"
                              x2="8.5"
                              y2="30.1"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold">Contrast Checker</span>
                    <p className="text-sm text-gray-500">
                      Check the contrast between two colors
                    </p>
                  </div>
                </div>
              </li>
              {/*------------------------------------------------------------------------------------------------------------------------------------------------ */}
              <li className="flex items-start  pl-2 py-2 rounded-md gap-3 text-black text-lg cursor-default hover:bg-[#F7F0FE] hover:text-[#802FDE]">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-10 pt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      style={{ enableBackground: "new 0 0 100 100" }}
                      xmlSpace="preserve"
                    >
                      <style type="text/css">
                        {`
            .st0 { fill: #ECD5FF; }
            .st1 { fill: #BB7BFF; }
            .st2 { fill: #A049FC; }
            .st3 { fill: #DDB7FF; }
            .st4 { fill: #7C23CD; }
          `}
                      </style>
                      <path
                        className="st0"
                        d="M11.14,34.04v40.24c0,5.36,4.35,9.71,9.71,9.71h58.29c5.36,0,9.71-4.35,9.71-9.71V34.04H11.14z"
                      />
                      <circle className="st1" cx="31.28" cy="26.32" r="4.09" />
                      <circle className="st2" cx="21.57" cy="26.32" r="4.09" />
                      <rect
                        x="23.29"
                        y="42.71"
                        className="st1"
                        width="12.14"
                        height="29.14"
                      />
                      <rect
                        x="42.71"
                        y="42.71"
                        className="st3"
                        width="34"
                        height="29.14"
                      />
                      <path
                        className="st3"
                        d="M88.86,25.71c0-5.36-4.35-9.71-9.71-9.71H20.86c-5.36,0-9.71,4.35-9.71,9.71v8.33h77.71V25.71z M21.46,29.36
          c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04s3.04,1.36,3.04,3.04S23.14,29.36,21.46,29.36z M32.39,29.36
          c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04c1.68,0,3.04,1.36,3.04,3.04S34.07,29.36,32.39,29.36z"
                      />
                      <g>
                        <path
                          className="st2"
                          d="M91.07,14.66c-2.47-2.47-6.48-2.47-8.96,0L56.58,40.19c2.14,0.55,4.1,1.65,5.7,3.26
            c1.63,1.63,2.71,3.62,3.25,5.71l25.53-25.53C93.55,21.15,93.55,17.13,91.07,14.66z"
                        />
                        <path
                          className="st4"
                          d="M57.68,47.67c-3.49-3.49-9.18-3.49-12.67,0c-3.1,3.1-4.14,13.08-4.32,15.04c-0.05,0.53,0.14,1.05,0.52,1.43
            c0.34,0.34,0.79,0.53,1.27,0.53c0.05,0,0.11,0,0.16-0.01c1.97-0.18,11.94-1.22,15.04-4.32C61.18,56.85,61.18,51.17,57.68,47.67z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold">Palette Visualizer</span>
                    <p className="text-sm text-gray-500">
                      Preview your colors on real designs
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div
            className="w-72 pl-4 pt-4 font-sans bg-[#F7F7F8]   rounded-r-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <ul className="space-y-2">
              <li className="text-black text-sm  hover:text-blue-600 cursor-pointer">
                List of Colors
              </li>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                Browse Gradients
              </li>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                Create a Gradient
              </li>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                Make a Gradient Palette
              </li>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                Color Picker
              </li>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                Collage Maker
              </li>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                List of Fonts
              </li>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                Image Converter
              </li>
            </ul>
            <ul className="space-y-2">
              <h3 className="text-black font-bold pt-3 pb-1 text-base">Apps</h3>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                iOS App
              </li>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                Android App
              </li>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                Figma Plugin
              </li>
              <li className="text-black text-sm hover:text-blue-600 cursor-pointer">
                Adobe Extension
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
