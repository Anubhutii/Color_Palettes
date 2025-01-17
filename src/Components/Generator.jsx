import React, { useState, useEffect } from "react";
import { PiDotsThree } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";
import { IoCameraReverseOutline } from "react-icons/io5";
import { LuUndo, LuRedo } from "react-icons/lu";
import { PiShapesLight } from "react-icons/pi";
import { GrGrid } from "react-icons/gr";
import { ImContrast } from "react-icons/im";
import { TbEye } from "react-icons/tb";
import { LuShare2 } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FiCopy } from "react-icons/fi";
import { HiLockOpen, HiLockClosed } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import CameraModal from "./CameraModal"; // Import the CameraModal component
import { Tooltip } from "antd";
import { ColorPicker } from "antd";
import GoProDropdown from "./GoProDropdown";
import { IoCheckmarkDone } from "react-icons/io5";
import { BsArrowsMove } from "react-icons/bs";

const Generator = () => {
  const [colors, setColors] = useState(["", "", "", "", ""]);
  const [newColor, setNewColor] = useState("");
  const [colorHistory, setColorHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]); // Track redo history
  const [undoIndex, setUndoIndex] = useState(-1); // Start with no undo history
  const [modalVisible, setModalVisible] = useState(false); // Default modal visibility to false
  const [goProVisible, setGoProVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLocked, setIsLocked] = useState(false); // Track lock status

  const [blendCount, setBlendCount] = useState(0);


  const hexToHue = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;

    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    const delta = max - min;

    let hue = 0;
    if (delta === 0) hue = 0;
    else if (max === rNorm)
      hue = ((gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)) * 60;
    else if (max === gNorm) hue = ((bNorm - rNorm) / delta + 2) * 60;
    else hue = ((rNorm - gNorm) / delta + 4) * 60;

    return Math.round(hue);
  };

  const hueToHex = (hue) => {
    const saturation = 0.7; // Adjust for vibrant colors
    const lightness = 0.5;

    const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = lightness - c / 2;

    let r = 0,
      g = 0,
      b = 0;

    if (hue >= 0 && hue < 60) [r, g, b] = [c, x, 0];
    else if (hue >= 60 && hue < 120) [r, g, b] = [x, c, 0];
    else if (hue >= 120 && hue < 180) [r, g, b] = [0, c, x];
    else if (hue >= 180 && hue < 240) [r, g, b] = [0, x, c];
    else if (hue >= 240 && hue < 300) [r, g, b] = [x, 0, c];
    else [r, g, b] = [c, 0, x];

    r = Math.round((r + m) * 255)
      .toString(16)
      .padStart(2, "0");
    g = Math.round((g + m) * 255)
      .toString(16)
      .padStart(2, "0");
    b = Math.round((b + m) * 255)
      .toString(16)
      .padStart(2, "0");

    return `#${r}${g}${b}`;
  };

  const generateAnalogousPalette = (baseColor) => {
    const baseHue = hexToHue(baseColor);
    const analogousHues = [
      baseHue,
      (baseHue + 30) % 360,
      (baseHue + 60) % 360,
      (baseHue + 90) % 360,
      (baseHue + 120) % 360,
    ];
    return analogousHues.map(hueToHex);
  };

  const generateComplementaryPalette = (baseColor) => {
    const baseHue = hexToHue(baseColor);
    const complementaryHue = (baseHue + 180) % 360;
    const complementaryHues = [
      baseHue,
      complementaryHue,
      (complementaryHue + 30) % 360,
      (complementaryHue - 30 + 360) % 360,
      baseHue,
    ];
    return complementaryHues.map(hueToHex);
  };

  const generateCoolPalette = (baseColor) => {
    const baseHue = hexToHue(baseColor);
    const coolHues = [
      (baseHue + 150) % 360,
      (baseHue + 180) % 360,
      (baseHue + 210) % 360,
      (baseHue + 240) % 360,
      (baseHue + 270) % 360,
    ];
    return coolHues.map(hueToHex);
  };

  const generateWarmPalette = (baseColor) => {
    const baseHue = hexToHue(baseColor);
    const warmHues = [
      (baseHue + 0) % 360,
      (baseHue + 30) % 360,
      (baseHue + 60) % 360,
      (baseHue + 90) % 360,
      (baseHue + 120) % 360,
    ];
    return warmHues.map(hueToHex);
  };

  const generateRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;

  const adjustBrightness = (color, amount) => {
    let usePound = false;

    if (color[0] === "#") {
      color = color.slice(1);
      usePound = true;
    }

    let r = parseInt(color.substring(0, 2), 16);
    let g = parseInt(color.substring(2, 4), 16);
    let b = parseInt(color.substring(4, 6), 16);

    r = Math.min(255, Math.max(0, r + amount));
    g = Math.min(255, Math.max(0, g + amount));
    b = Math.min(255, Math.max(0, b + amount));

    return (
      (usePound ? "#" : "") +
      r.toString(16).padStart(2, "0") +
      g.toString(16).padStart(2, "0") +
      b.toString(16).padStart(2, "0")
    );
  };

  const generateMonochromaticPalette = (baseColor, numColors = 6) => {
    baseColor = baseColor || generateRandomColor(); // Use provided base color or generate random

    // Extract RGB values from the base color
    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.slice(1), 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };

    const rgbToHex = ({ r, g, b }) => {
      return (
        "#" +
        [r, g, b]
          .map((x) => x.toString(16).padStart(2, "0"))
          .join("")
          .toUpperCase()
      );
    };

    const baseRgb = hexToRgb(baseColor);

    // Calculate the variations (this ensures the palette has 'n' colors)
    const step = 270 / (numColors - 1); // Calculate the step between colors
    const colors = Array.from({ length: numColors }, (_, index) => {
      const adjust = (index - Math.floor(numColors / 2)) * step; // Adjust brightness in both directions
      return rgbToHex({
        r: Math.max(0, Math.min(255, baseRgb.r + adjust)),
        g: Math.max(0, Math.min(255, baseRgb.g + adjust)),
        b: Math.max(0, Math.min(255, baseRgb.b + adjust)),
      });
    });

    return colors;
  };

  const blendColors = (color1, color2) => {
    // Convert hex to RGB
    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };

    // Convert RGB to hex
    const rgbToHex = (r, g, b) => {
      return `#${((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase()}`;
    };

    const { r: r1, g: g1, b: b1 } = hexToRgb(color1);
    const { r: r2, g: g2, b: b2 } = hexToRgb(color2);

    // Blend the colors by averaging the RGB values
    const r = Math.round((r1 + r2) / 2);
    const g = Math.round((g1 + g2) / 2);
    const b = Math.round((b1 + b2) / 2);

    return rgbToHex(r, g, b);
  };

  const handleAddColor = (index) => {
    if(colors.length >= 10) {
      window.alert("You can't add more than 10 colors");
      return;
    }

    const newColors = [...colors];

    // Get the previous and next colors in the palette
    const color1 = colors[index];
    const color2 = colors[index + 1] || colors[index]; // If it's the last color, use itself as the second color

    // Blend the colors
    const newColor = blendColors(color1, color2);

    // Add the blended color to the palette
    newColors.splice(index + 1, 0, newColor); // Insert the new color right after the clicked one

    setColors(newColors);
    setBlendCount(blendCount + 1); // Increment the blend count
  };

  // Function to remove a color from the list
  const handleRemoveColor = (index) => {
    // Prevent removing colors if there are only 3 colors
    if (colors.length <= 2) {
      return; // Do nothing
    }

    const updatedColors = colors.filter(
      (_, colorIndex) => colorIndex !== index
    );
    setColors(updatedColors);
  };

  const handleCopyColorCode = (color) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setCopied(true); // Show checkmark
        setTimeout(() => {
          setCopied(false); // Reset after 5 seconds
        }, 5000);
      })
      .catch((err) => {
        console.error("Failed to copy color code: ", err);
      });
  };

  const handleLockToggle = () => {
    setIsLocked(!isLocked); // Toggle the lock state
  };


  // Function to remove color from the palette
  const removeColor = (index) => {
    if (!isLocked) {
      const newColors = colors.filter((_, i) => i !== index);
      setColors(newColors);
    }
  };

  // pastel color pallate
  function generatePastelPalette() {
    return Array.from({ length: 5 }, () => {
      const baseColor = generateRandomColor();
      return adjustBrightness(baseColor, 100); // Lighten the base color
    });
  }

  const regeneratePalette = () => {
    // List of all palette generation functions
    const paletteGenerators = [
      generateMonochromaticPalette,
      generatePastelPalette,
      generateAnalogousPalette,
      generateComplementaryPalette,
      generateCoolPalette,
      generateWarmPalette,
    ];

    // Randomly pick one of the palette generation functions
    const randomGenerator =
      paletteGenerators[Math.floor(Math.random() * paletteGenerators.length)];

    // Generate a random base color
    const baseColor = generateRandomColor();

    // Generate the palette using the selected function
    const newColors = randomGenerator(baseColor);

    // Save the current state to history before generating a new palette
    setColorHistory((prevHistory) => [...prevHistory, colors]);
    setRedoHistory([]); // Clear the redo history when a new palette is generated
    setUndoIndex((prevIndex) => prevIndex + 1); // Increase undo index
    setColors(newColors); // Update with the new colors

    console.log("Generated Palette:", newColors);
  };

  // Undo the last color change and show previous palettes
  const handleUndo = () => {
    if (undoIndex > 0) {
      const previousIndex = undoIndex - 1;
      const previousColors = colorHistory[previousIndex];
      setRedoHistory((prevRedo) => [colors, ...prevRedo]); // Add current colors to redoHistory
      setColors(previousColors);
      setUndoIndex(previousIndex); // Decrease undo index to show the next previous palette
    }
  };
  // redo history
  const handleRedo = () => {
    if (redoHistory.length > 0) {
      const nextColors = redoHistory[0];
      setColorHistory((prevHistory) => [...prevHistory, colors]); // Save current state to colorHistory
      setColors(nextColors);
      setRedoHistory((prevRedo) => prevRedo.slice(1)); // Remove the first item from redoHistory
      setUndoIndex((prevIndex) => prevIndex + 1); // Increase undo index
    }
  };

  const handleCameraClick = () => {
    setModalVisible((prev) => !prev);
  };

  const handleVisualizeClick = () => {
    // Visualize the colors in a new page
    window.open("/visualize", "_blank");
  };

  const handleColorChange = (value) => {
    setNewColor(value.hex); // Update the color state with the selected hex value
  };

  // Add event listener for the spacebar
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // Prevent default scrolling when pressing Space
        regeneratePalette();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [colors, colorHistory, undoIndex, redoHistory]);

  useEffect(() => {
    setColors(generatePastelPalette(generateRandomColor()));
  }, []);

  return (
    <div
      className="flex flex-col items-center "
      style={{
        width: "100%",
        height: "90.7vh",
      }}
    >
      {/* Toolbar */}
      <div className="w-full h-[45px] flex bg-white items-center">
        {/* Left Column - Text and Dots Icon */}
        <div className="flex items-center justify-between flex-1 pl-5">
          <p className="text-gray-400 text-sm font-semibold">
            Press the spacebar to generate a new color palette!
          </p>
          <a
            className="cursor-pointer"
            onClick={() => {
              console.log("hehe abe chal");
            }}
          >
            <PiDotsThree size={30} className="text-black" />
          </a>
        </div>

        {/* Divider */}
        <RxDividerVertical size={30} className="text-gray-200" />

        {/* Right Column - Icons */}
        <div className="flex items-center justify-center space-x-3 pr-2">
          {/* Clickable Icons */}
          <a
            href="#createPalette"
            onClick={handleCameraClick}
            className="group relative"
          >
            <IoCameraReverseOutline
              size={35}
              className="text-black hover:bg-gray-200 hover:border-2 hover:border-gray-400 hover:rounded p-2 transition"
            />
            <span className="absolute hidden bottom-14 left-1/2 w-44 transform -translate-x-1/2 text-sm text-gray-100 bg-gray-700 p-1 rounded opacity-0 group-hover:block group-hover:opacity-100 transition-opacity">
              Create palette from photo
            </span>
          </a>

          <RxDividerVertical size={30} className="text-gray-200" />

          <a href="#undo" onClick={handleUndo} className="group relative">
            <LuUndo
              size={35}
              className="text-black hover:bg-gray-200 hover:border-2 hover:border-gray-400 hover:rounded p-2 transition"
            />
            <span className="absolute hidden bottom-14 left-1/2 w-10 transform -translate-x-1/2 text-sm text-gray-100 bg-gray-700 p-1 rounded opacity-0 group-hover:opacity-100 group-hover:block transition-opacity">
              Undo
            </span>
          </a>

          <a href="#redo" onClick={handleRedo} className="group relative">
            <LuRedo
              size={35}
              className="text-black hover:bg-gray-200 hover:border-2 hover:border-gray-400 hover:rounded p-2 transition"
            />
            <span className="absolute hidden bottom-14 left-1/2 w-10 transform -translate-x-1/2 text-sm text-gray-100 group-hover:block bg-gray-700 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Redo
            </span>
          </a>

          <RxDividerVertical size={30} className="text-gray-200" />

          <div className="flex gap-5">
            <a
              onClick={handleVisualizeClick}
              className="group relative cursor-pointer"
            >
              <PiShapesLight
                size={35}
                className="text-black hover:bg-gray-200 hover:border-2 hover:border-gray-400 hover:rounded p-2 transition"
              />
              <span className="absolute hidden group-hover:block bottom-14 left-1/2 w-[105px] transform -translate-x-1/2 text-sm text-gray-100 bg-gray-700 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Visualize colors
              </span>
            </a>

            <a
              href="#grid"
              onClick={() => {
                setGoProVisible(true);
              }}
              className="group relative"
            >
              <GrGrid
                size={35}
                className="text-black hover:bg-gray-200 hover:border-2 hover:border-gray-400 hover:rounded p-2 transition"
              />
              <span className="absolute bottom-14 hidden group-hover:block left-1/2 w-[150px] transform -translate-x-1/2 text-sm text-gray-100 bg-gray-700 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                View palette variations
              </span>
            </a>

            <a
              href="#contrast"
              onClick={() => {
                setGoProVisible(true);
              }}
              className="group relative"
            >
              <ImContrast
                size={35}
                className="text-black hover:bg-gray-200 hover:border-2 hover:border-gray-400 hover:rounded p-2 transition"
              />
              <span className="absolute hidden group-hover:block bottom-14 hiddne   left-1/2 w-[150px] transform -translate-x-1/2 text-sm text-gray-100 bg-gray-700 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Check palette contrast
              </span>
            </a>
          </div>

          <RxDividerVertical size={30} className="text-gray-200" />

          <a href="#eye" className="group relative flex items-center">
            <div className="flex items-center space-x-2 p-1 group-hover:bg-gray-200 group-hover:border-gray-400 group-hover:rounded">
              <TbEye size={25} className="text-black" />
              <span className="text-base text-black">View</span>
            </div>
            <span className="absolute hidden group-hover:block bottom-14 left-1/2 w-[90px] transform -translate-x-1/2 text-sm text-gray-100 bg-gray-700 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity group-hover:border-2 group-hover:border-gray-300 group-hover:shadow-lg">
              Quick View
            </span>
          </a>

          <a href="#share" className="group relative">
            <div className="flex items-center space-x-2 p-1 group-hover:bg-gray-200 group-hover:border-gray-400 group-hover:rounded">
              <LuShare2 size={20} className="text-black" />
              <span className="text-base text-black">Export</span>
            </div>
            <span className="absolute hidden group-hover:block bottom-14 left-1/2 w-[100px] transform -translate-x-1/2 text-sm text-gray-100 bg-gray-700 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Export palette
            </span>
          </a>

          <a href="#heart" className="group relative">
            <div className="flex items-center space-x-2 p-1 group-hover:bg-gray-200 group-hover:border-gray-400 group-hover:rounded">
              <GoHeart size={20} className="text-black" />
              <span className="text-base text-black">Save</span>
            </div>
            <span className="absolute hidden group-hover:block bottom-14 left-1/2 w-[85px] transform -translate-x-1/2 text-sm text-gray-100 bg-gray-700 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Save palette
            </span>
          </a>

          <a href="#menu" className="group relative">
            <IoMenuOutline
              size={40}
              className="text-black hover:bg-gray-200 hover:border-2 hover:border-gray-400 hover:rounded p-2 transition"
            />
          </a>
          {goProVisible && (
            <GoProDropdown onClose={() => setGoProVisible(false)} />
          )}
        </div>
      </div>

      {/* ------------------------------------------------Main Content------------------------------------------------------ */}
      <div className="bg-black flex flex-col items-center overflow-hidden">
        <div className="flex w-[100vw] ">
          {colors.map((color, index) => {
            // Function to determine if a color is dark
            const isDarkColor = (hex) => {
              // Convert hex color to RGB
              const r = parseInt(hex.slice(1, 3), 16);
              const g = parseInt(hex.slice(3, 5), 16);
              const b = parseInt(hex.slice(5, 7), 16);
              // Calculate luminance
              const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
              return luminance < 128; // Threshold for dark colors
            };

            const textColor = isDarkColor(color) ? "white" : "black";
            const lastIndex = colors.length - 1;

            return (
              <div
                key={index}
                className="relative flex flex-col justify-end items-center border-l-[0.1px] border-[#9e9e9e54] group "
                style={{
                  backgroundColor: color,
                  height: "635px",
                  width: `${100 / colors.length}%`, // Dynamic width based on the number of colors
                }}
              >
                {/* <div className="absolute top-0 h-[90vh] flex items-center opacity-0 hover:opacity-90 transition-all ease-in-out duration-150 ml-[92%] z-20 " ><div className="bg-white rounded-[30px] cursor-pointer p-1"><AiOutlinePlusCircle size={35} /></div></div> */}
                {index !== lastIndex && (
                  <div
                    className="absolute top-0 h-[90vh] flex items-center opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-150 right-[-20px] z-20"
                    onClick={() => handleAddColor(index)} // Add the new color based on current colors
                  >
                    <Tooltip title="Add Color" placement="top" arrow>
                      <div className="bg-white shadow-md rounded-[30px] cursor-pointer border-4 border-white p-1 transform scale-100 hover:scale-125 hover:bg-slate-200 transition-transform duration-150 ease-in-out">
                        <FiPlus size={20} />
                      </div>
                    </Tooltip>
                  </div>
                )}

                {/* Color Text */}
                <ColorPicker
                  value={color}
                  onChange={setNewColor}
                  showText
                  disabledAlpha
                >
                  <p
                    className={`font-bold text-[24px] mb-24 px-5 py-1 ${
                      textColor === "white"
                        ? "hover:bg-[#080f1427]"
                        : "hover:bg-[#ffffff60] "
                    } cursor-pointer rounded-md`}
                    style={{ color: textColor }}
                  >
                    {color.slice(1).toUpperCase()}
                  </p>
                </ColorPicker>

                {/* Icons on hover */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* Example icons */}
                  <div className="flex flex-col items-center justify-center  gap-5">
                    {/* Add any icons you want here */}

                    <div
                      className={`flex flex-col items-center justify-center gap-5`}
                      style={{ color: textColor }}
                    >
                      {/* Add clickable icons */}
                      <a
                        href="#"
                        onClick={() => handleRemoveColor(index)}
                        className="hover:bg-black hover:bg-opacity-10 p-2 rounded-md transition duration-300"
                      >
                        <IoMdClose size={25} />
                      </a>
                      <a
                        href="#"
                        className="hover:bg-black hover:bg-opacity-10 p-2 rounded-md transition duration-300"
                        onClick={() => handleCopyColorCode(color)} // Copy color code when clicked
                      >
                        {copied ? (
                          <IoCheckmarkDone size={25} /> // Show checkmark when copied
                        ) : (
                          <FiCopy size={25} /> // Show copy icon when not copied
                        )}
                      </a>

                      <a href="#" 
                        
                         className="hover:bg-black hover:bg-opacity-10 p-2 rounded-md transition duration-300"
                        >
                          < BsArrowsMove size={25}/>
                        </a>

                      <a
                        href="#"
                        onClick={handleLockToggle}
                        className="hover:bg-black hover:bg-opacity-10 p-2 rounded-md transition duration-300"
                      >
                        {isLocked ? (
                          <HiLockClosed size={25}  />
                        ) : (
                          <HiLockOpen size={25}  />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Camera Modal */}
      {modalVisible && <CameraModal closeModal={handleCameraClick} />}
    </div>
  );
};

export default Generator;
