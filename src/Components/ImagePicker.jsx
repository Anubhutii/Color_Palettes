import React, { useState, useEffect } from "react";
import photo1 from "../assets/pic1.jpg";
import photo2 from "../assets/pic2.jpg";
import photo3 from "../assets/pic3.jpg";
import photo4 from "../assets/pic4.jpg";
import { SlRefresh } from "react-icons/sl";
import CameraModal from "./CameraModal";

const ImagePicker = () => {
  const images = [photo1, photo2, photo3, photo4];
  const [randomImage, setRandomImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showExportView, setShowExportView] = useState(false);



  const generateRandomPalette = () => {
    if (!randomImage) return;

    const img = new Image();
    img.crossOrigin = "Anonymous"; // Allows cross-origin access
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
          continue; // Skip if this index has already been used
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
    setRandomImage(image); // Update the displayed image
    setColors(palette); // Update the palette
    setModalVisible(false); // Close the modal
  };

  const handleClick = () => {
    setIsAnimating(true);
    generateRandomPalette(); // Call your function

    // Remove the animation class after the animation duration
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this to the animation duration in CSS (0.5s)
  };

  const handleExport = () => {
    if (!randomImage) return;
  
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = randomImage;
  
    img.onload = () => {
      const scaleFactor = 0.160; // Adjust this value to scale the image (e.g., 0.5 for half size)
      const scaledWidth = 1100;
      const scaledHeight = 700;
      const paletteHeight = 200; // Height of the palette
      const gapHeight = 10; // Gap between image and palette
      const paletteWidth = 1100; // Width of the palette
      const colorGap = 10; // Gap between colors in the palette
      const canvasWidth = scaledWidth; // Match the canvas width to the scaled image width
      const canvasHeight = scaledHeight + gapHeight + paletteHeight; // Total height with gap and palette
  
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
  
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
  
      // Draw the scaled image
      ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
  
      // Draw the color palette with a gap between the colors
      const paletteX = (canvasWidth - paletteWidth) / 2; // Center the palette horizontally
      const colorWidth = (paletteWidth - (colorGap * (colors.length - 1))) / colors.length; // Calculate width of each color block
  
      colors.forEach((color, index) => {
        ctx.fillStyle = color;
        // Apply gap between colors
        ctx.fillRect(paletteX + index * (colorWidth + colorGap), scaledHeight + gapHeight, colorWidth, paletteHeight);
  
        // Set text style and color for the hex value
        ctx.fillStyle = "#FFFFFF"; // Text color (white for contrast)
        ctx.font = "20px Serif"; // Font style and size
        ctx.textAlign = "center"; // Center text horizontally
        ctx.textBaseline = "middle"; // Center text vertically
  
        // Draw the hex color code in the center of each color block
        ctx.fillText(color, paletteX + index * (colorWidth + colorGap) + colorWidth / 2, scaledHeight + gapHeight + paletteHeight / 2);
      });
  
      // Convert canvas to image and trigger download
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "exported_image.png";
      link.click();
  
      // Show export view
      setShowExportView(true);
    };
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
    <div className="h-[680px] bg-gray-50 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-serif font-bold text-black">
          Image Picker
        </h1>
        <p className="text-lg text-gray-600 mt-5">
          Create stunning & beautiful color palettes from your photos.
        </p>
      </div>
      <div className="bg-gray-100 h-[70%] w-[70%]  flex items-center rounded-3xl p-5 shadow-lg">
        <div className="flex flex-col items-center justify-between w-[40%] h-full bg-white rounded-l-xl">
          <h2 className="pt-24 text-xl font-serif text-black">
            Picked Palettes
          </h2>
          <div className="flex mt-2">
            {colors.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className="w-16 h-24 mx-1"
              ></div>
            ))}
          </div>
          <div className="mt-4 cursor-pointer" onClick={handleClick}>
            <SlRefresh
              className={`h-8 w-8 text-blue-600 ${
                isAnimating ? "animate-rotateZoom" : ""
              }`}
            />
          </div>

          <div className="w-[380px] p-5 items-center justify-center">
            <button
              onClick={() => setModalVisible(true)}
              className="w-full h-10 rounded-lg text-base text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse image
            </button>
            <button
              onClick={handleExport}
              className="border-2 border-gray-200 text-base w-full h-10 rounded-lg mt-2 hover:border-gray-700"
            >
              Export palette
            </button>
          </div>
        </div>
        <div className="flex h-full items-center justify-center w-[60%] p-4 rounded-r-xl overflow-hidden rounded-md">
          {randomImage && (
            <img
              src={randomImage}
              alt="Selected"
              className="h-full w-full object-contain"
            />
          )}
        </div>
      </div>
      {modalVisible && (
        <CameraModal
          onImageSelect={handleImageSelect}
          closeModal={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};

export default ImagePicker;
