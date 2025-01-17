import React, { useState, useEffect } from "react";
import photo1 from "../assets/pic1.jpg";
import photo2 from "../assets/pic2.jpg";
import photo3 from "../assets/pic3.jpg";
import photo4 from "../assets/pic4.jpg";
import { SlRefresh } from "react-icons/sl"; // Import Heroicons refresh icon

import CameraModal from "./CameraModal";

const ImagePicker = () => {
  // List of images
  const images = [photo1, photo2, photo3, photo4];

  // State to store the randomly selected image and colors
  const [randomImage, setRandomImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // Default modal visibility to false

  // Function to generate random colors from the current image
  const generateRandomPalette = () => {
    if (!randomImage) return; // Ensure there is an image loaded

    const img = new Image();
    img.src = randomImage;
    img.onload = () => {
      // Create a canvas to extract colors from the image
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);

      // Get pixel data from the canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      // Function to get a random color from pixel data
      const getRandomColor = () => {
        const randomPixelIndex =
          Math.floor((Math.random() * pixels.length) / 4) * 4;
        const r = pixels[randomPixelIndex];
        const g = pixels[randomPixelIndex + 1];
        const b = pixels[randomPixelIndex + 2];
        return `rgb(${r}, ${g}, ${b})`;
      };

      // Pick five random colors
      const pickedColors = [];
      for (let i = 0; i < 5; i++) {
        pickedColors.push(getRandomColor());
      }

      // Set the colors in the state
      setColors(pickedColors);
    };
  };

  const handleBrowserClick = () => {
    setModalVisible((prev) => !prev);
  };

  useEffect(() => {
    // Set a random image when the component mounts (only once)
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    setRandomImage(selectedImage);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  useEffect(() => {
    if (randomImage) {
      generateRandomPalette(); // Generate palette when the image is set
    }
  }, [randomImage]); // Trigger palette generation whenever the random image changes

  return (
    <div className="h-[680px] bg-gray-50 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl items-center justify-center font-serif font-bold text-black ">
          Image Picker
        </h1>
        <p className="text-lg items-center justify-center text-gray-600 mt-5">
          Create stunning & beautiful color palettes from your photos.
        </p>
      </div>

      <div className=" bg-gray-100 h-[70%] w-[70%] flex items-center rounded-3xl p-5 shadow-lg">
        <div className="flex flex-col items-center justify-between w-[40%] h-full bg-white rounded-l-xl">
          <h2 className="pt-24 text-xl font-serif text-black flex items-center">
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

          {/* Clickable Refresh Icon */}
          <div className="mt-4 cursor-pointer" onClick={generateRandomPalette}>
            <SlRefresh className="h-8 w-8 text-blue-600 hover:text-blue-700" />
          </div>

          <div className=" w-[380px] p-5 items-center justify-center">
            <button onClick={handleBrowserClick} className="w-full h-10 rounded-lg text-base text-white bg-blue-600 hover:bg-blue-700">
              Browse image
            </button>

            <button className="border-2 border-gray-200 text-base w-full h-10 rounded-lg mt-2 hover:border-gray-700">
              Export palette
            </button>
          </div>
        </div>

        <div className="h-full flex items-center justify-center w-[60%] bg-gray-50 rounded-r-xl">
          <div className="bg-gray-200 w-[90%] h-fit">
            {/* Display the randomly selected image */}
            {randomImage && <img src={randomImage} alt="Random" />}
          </div>
        </div>
      </div>
      {modalVisible && <CameraModal closeModal={handleBrowserClick} />}
    </div>
  );
};

export default ImagePicker;
