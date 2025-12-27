import React, { useState, useEffect } from "react";
import photo1 from "../assets/pic1.jpg";
import photo2 from "../assets/pic2.jpg";
import photo3 from "../assets/pic3.jpg";
import photo4 from "../assets/pic4.jpg";
import { SlRefresh } from "react-icons/sl";
import { FiCopy, FiCheck } from "react-icons/fi";
import CameraModal from "./CameraModal";

const ImagePicker = () => {
  const images = [photo1, photo2, photo3, photo4];
  const [randomImage, setRandomImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showExportView, setShowExportView] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(null);

  // Convert RGB to Hex
  const rgbToHex = (rgbString) => {
    // Extract RGB values from string like "rgb(255, 0, 0)"
    const match = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (!match) return "#000000";

    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);

    const toHex = (n) => {
      const hex = n.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  };

  const generateRandomPalette = () => {
    if (!randomImage) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = randomImage;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      const pickedColors = [];
      const usedIndices = new Set();

      while (pickedColors.length < 5) {
        const randomPixelIndex =
          Math.floor((Math.random() * pixels.length) / 4) * 4;

        if (usedIndices.has(randomPixelIndex)) {
          continue;
        }

        usedIndices.add(randomPixelIndex);

        const r = pixels[randomPixelIndex];
        const g = pixels[randomPixelIndex + 1];
        const b = pixels[randomPixelIndex + 2];
        const color = `rgb(${r}, ${g}, ${b})`;

        pickedColors.push(color);
      }

      setColors(pickedColors);
    };
  };

  const handleImageSelect = (image, palette) => {
    setRandomImage(image);
    setColors(palette);
    setModalVisible(false);
  };

  const handleClick = () => {
    setIsAnimating(true);
    generateRandomPalette();

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleExport = () => {
    if (!randomImage) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = randomImage;

    img.onload = () => {
      const scaleFactor = 0.16;
      const scaledWidth = 1100;
      const scaledHeight = 700;
      const paletteHeight = 200;
      const gapHeight = 10;
      const paletteWidth = 1100;
      const colorGap = 10;
      const canvasWidth = scaledWidth;
      const canvasHeight = scaledHeight + gapHeight + paletteHeight;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

      const paletteX = (canvasWidth - paletteWidth) / 2;
      const colorWidth =
        (paletteWidth - colorGap * (colors.length - 1)) / colors.length;

      colors.forEach((color, index) => {
        ctx.fillStyle = color;
        ctx.fillRect(
          paletteX + index * (colorWidth + colorGap),
          scaledHeight + gapHeight,
          colorWidth,
          paletteHeight
        );

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "20px Serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(
          color,
          paletteX + index * (colorWidth + colorGap) + colorWidth / 2,
          scaledHeight + gapHeight + paletteHeight / 2
        );
      });

      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "exported_image.png";
      link.click();

      setShowExportView(true);
    };
  };

  const handleColorClick = async (color, index) => {
    const hexColor = rgbToHex(color);

    try {
      await navigator.clipboard.writeText(hexColor);

      // Show success feedback
      setCopiedIndex(index);
      setTooltipVisible(index);

      // Hide tooltip after 2 seconds
      setTimeout(() => {
        setTooltipVisible(null);
      }, 2000);

      // Reset copied state after 3 seconds
      setTimeout(() => {
        setCopiedIndex(null);
      }, 3000);

      console.log(`Copied ${hexColor} to clipboard`);
    } catch (err) {
      console.error("Failed to copy color: ", err);

      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = hexColor;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      // Still show feedback
      setCopiedIndex(index);
      setTooltipVisible(index);
      setTimeout(() => {
        setTooltipVisible(null);
        setCopiedIndex(null);
      }, 3000);
    }
  };

  const handleMouseEnter = (index) => {
    if (!copiedIndex) {
      setTooltipVisible(index);
    }
  };

  const handleMouseLeave = () => {
    if (!copiedIndex) {
      setTooltipVisible(null);
    }
  };

  useEffect(() => {
    console.log(randomImage);
    console.log(colors);
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  useEffect(() => {
    if (randomImage) {
      generateRandomPalette();
    }
  }, [randomImage]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-6 px-4 md:px-8">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-black">
          Image Picker
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-3 md:mt-5 max-w-2xl mx-auto px-4">
          Create stunning & beautiful color palettes from your photos.
        </p>
      </div>

      <div className="w-full max-w-6xl">
        <div className="bg-gray-100 flex flex-col md:flex-row items-center md:items-stretch rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg w-full">
          {/* Left Panel - Controls & Palette */}
          <div className="flex flex-col items-center justify-between w-full md:w-[40%] bg-white rounded-2xl md:rounded-l-2xl p-6 md:p-8 mb-4 md:mb-0">
            <div className="w-full">
              <h2 className="text-xl md:text-2xl font-serif text-black text-center md:text-left mb-6">
                Picked Palettes
              </h2>

              {/* Color Palette */}
              <div className="flex justify-center md:justify-start mb-6 relative">
                {colors.map((color, index) => {
                  const hexColor = rgbToHex(color);

                  // Check if color is dark or light for text contrast
                  const isDarkColor = () => {
                    const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
                    if (!match) return true;

                    const r = parseInt(match[1]);
                    const g = parseInt(match[2]);
                    const b = parseInt(match[3]);

                    // Calculate relative luminance
                    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                    return luminance < 0.5;
                  };

                  const textColor = isDarkColor() ? "white" : "black";

                  return (
                    <div key={index} className="relative mx-1 md:mx-2 group">
                      {/* Color Block */}
                      <div
                        style={{ backgroundColor: color }}
                        className="w-10 h-16 md:w-12 md:h-20 lg:w-16 lg:h-24 rounded-md cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                        onClick={() => handleColorClick(color, index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onTouchStart={() => handleMouseEnter(index)}
                        onTouchEnd={handleMouseLeave}
                      >
                        {/* Copy Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div
                            className={`p-1 rounded-full ${
                              textColor === "white"
                                ? "bg-black/30"
                                : "bg-white/30"
                            }`}
                          >
                            {copiedIndex === index ? (
                              <FiCheck
                                className={`h-4 w-4 md:h-5 md:w-5 ${
                                  textColor === "white"
                                    ? "text-white"
                                    : "text-black"
                                }`}
                              />
                            ) : (
                              <FiCopy
                                className={`h-4 w-4 md:h-5 md:w-5 ${
                                  textColor === "white"
                                    ? "text-white"
                                    : "text-black"
                                }`}
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Tooltip */}
                      {tooltipVisible === index && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                          <div className="bg-gray-800 text-white text-xs md:text-sm px-2 md:px-3 py-1 md:py-2 rounded-md shadow-lg whitespace-nowrap">
                            {copiedIndex === index ? (
                              <span className="flex items-center gap-1">
                                <FiCheck className="h-3 w-3" />
                                Copied {hexColor}
                              </span>
                            ) : (
                              <span className="flex items-center gap-1">
                                <FiCopy className="h-3 w-3" />
                                Click to copy {hexColor}
                              </span>
                            )}
                          </div>
                          {/* Tooltip arrow */}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Refresh Button */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={handleClick}
                  className="flex items-center justify-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors active:scale-95"
                >
                  <SlRefresh
                    className={`h-6 w-6 md:h-8 md:w-8 text-blue-600 ${
                      isAnimating ? "animate-rotateZoom" : ""
                    }`}
                  />
                  <span className="text-blue-600 font-medium md:text-lg">
                    Regenerate Colors
                  </span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full mt-auto">
              <button
                onClick={() => setModalVisible(true)}
                className="w-full h-12 rounded-lg text-base md:text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors mb-3 active:scale-95"
              >
                Browse Images
              </button>
              <button
                onClick={handleExport}
                className="w-full h-12 rounded-lg text-base md:text-lg font-medium border-2 border-gray-300 hover:border-gray-700 hover:bg-gray-50 transition-all active:scale-95"
              >
                Export Palette
              </button>
            </div>
          </div>

          {/* Right Panel - Image Display */}
          <div className="flex h-[300px] md:h-auto items-center justify-center w-full md:w-[60%] p-4 md:p-6 rounded-2xl md:rounded-r-2xl overflow-hidden bg-white md:ml-4">
            {randomImage && (
              <img
                src={randomImage}
                alt="Selected"
                className="h-full w-full object-contain rounded-lg shadow-sm"
              />
            )}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 mb-2">
          💡 Click on any color to copy its HEX code to clipboard
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
            Click color to copy
          </span>
          <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
            Export as PNG
          </span>
          <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
            Browse your own photos
          </span>
        </div>
      </div>

      {/* Camera Modal */}
      {modalVisible && (
        <CameraModal
          onImageSelect={handleImageSelect}
          closeModal={() => setModalVisible(false)}
        />
      )}

      {/* Add CSS for animation */}
      <style jsx>{`
        @keyframes rotateZoom {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.2);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        .animate-rotateZoom {
          animation: rotateZoom 0.5s ease-in-out;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .color-block {
            min-width: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImagePicker;
