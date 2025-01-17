import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt, FaSearch } from "react-icons/fa";
import { MdOutlineRefresh } from "react-icons/md";

const CameraModal = ({ closeModal }) => {
  const [fileName, setFileName] = useState("");
  const [activeTab, setActiveTab] = useState("upload");
  const [urlInput, setUrlInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [stockSearch, setStockSearch] = useState(""); // Stock search input
  const [stockImages, setStockImages] = useState([]); // Store fetched stock images
  const [loading, setLoading] = useState(false); // Loading state for stock images
  const [colors, setColors] = useState([]);

  const PIXABAY_API_KEY = "48265800-6bd7de754bf306c0b92a49638"; // Replace with your Pixabay API key

  // Function to extract random colors from the image
  const extractRandomColors = (img) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, img.width, img.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    const randomColors = [];

    const isColorUnique = (r, g, b) => {
      for (const color of randomColors) {
        const [cr, cg, cb] = color.match(/\d+/g).map(Number); // Extract RGB values
        const distance = Math.sqrt(
          Math.pow(cr - r, 2) + Math.pow(cg - g, 2) + Math.pow(cb - b, 2)
        );
        if (distance < 30) return false; // Threshold for similarity (adjust as needed)
      }
      return true;
    };

    while (randomColors.length < 5) {
      const randomIndex = Math.floor(Math.random() * (pixels.length / 4)) * 4;
      const r = pixels[randomIndex];
      const g = pixels[randomIndex + 1];
      const b = pixels[randomIndex + 2];
      const color = `rgb(${r}, ${g}, ${b})`;

      if (isColorUnique(r, g, b)) {
        randomColors.push(color);
      }
    }

    setColors(randomColors);
  };

  // Handle file selection from browse
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

      // Generate a preview URL for the uploaded file
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          setImageUrl(reader.result);
          extractRandomColors(img);
          setShowImagePopup(true);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle URL submission
  const handleUrlSubmit = () => {
    if (urlInput.trim() !== "") {
      setImageUrl(urlInput.trim());

      const img = new Image();
      img.crossOrigin = "Anonymous"; // To handle CORS for external images
      img.src = urlInput.trim();

      img.onload = () => {
        extractRandomColors(img);
        setShowImagePopup(true);
      };

      img.onerror = () => {
        alert("Failed to load the image. Please check the URL.");
      };
    } else {
      alert("Please enter a valid URL.");
    }
  };

  const handleCloseImagePopup = () => {
    setShowImagePopup(false);
    setImageUrl(""); // Clear the image URL
    setFileName(""); // Clear the file name
    setUrlInput(""); // Clear the URL input
    setColors([]); // Clear the colors when the modal is closed
  };

  // Handle Stock Search with Pixabay API (fetch random or searched images)
  const handleStockSearch = async () => {
    setLoading(true);
    try {
      const query = stockSearch.trim() || "random"; // If search input is empty, fetch random images
      const response = await fetch(
        `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
          query
        )}&image_type=photo&per_page=27&page=1`
      );
      const data = await response.json();

      if (data.hits) {
        setStockImages(data.hits); // Store fetched images
      } else {
        alert("No images found.");
      }
    } catch (error) {
      console.error("Error fetching stock images:", error);
      alert("Failed to fetch stock images. Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Enter") {
        event.preventDefault(); // Prevent default scrolling when pressing Space
        handleStockSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [stockSearch]);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#7F7F7F] bg-opacity-60 flex items-center justify-center overflow-hidden z-50">
      <div
        className={`absolute bg-white transition-all duration-500 ease-in-out w-[450px] rounded-2xl shadow-lg p-3 overflow-hidden`}
        style={{
          height:
            activeTab === "upload"
              ? "340px" // Height for Upload tab
              : activeTab === "url"
              ? "200px" // Height for URL tab
              : "510px", // Height for Stock tab
        }}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:bg-gray-200 hover:scale-110 transition-all rounded"
        >
          <IoMdClose size={22} />
        </button>
        <div className="flex align-middle justify-center border-b-2 cursor-default">
          <p className="font-sans text-lg">Select Image</p>
        </div>
        <div className="flex h-14 gap-5 bg-white items-center justify-center border-b-2">
          <button
            className={`text-gray-700 hover:text-black ${
              activeTab === "upload" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("upload")}
          >
            Upload
          </button>
          <button
            className={`text-gray-700 hover:text-black ${
              activeTab === "url" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("url")}
          >
            URL
          </button>
          <button
            className={`text-gray-700 hover:text-black ${
              activeTab === "stock" ? "font-bold" : ""
            }`}
            onClick={() => {
              setActiveTab("stock");
              handleStockSearch(); // Trigger stock search when "Stock" tab is clicked
            }}
          >
            Stock
          </button>
        </div>
        {activeTab === "upload" && (
          <div className="relative flex flex-col w-full h-[200px] items-center justify-center border-2 border-dashed border-gray-200 mt-3 rounded-xl">
            <input
              type="file"
              id="fileInput"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
            <div
              id="dropzone"
              className="w-[80%] h-full flex items-center justify-center text-center"
            >
              <FaCloudUploadAlt size={40} />
              <p className="text-gray-600 ml-3 h-1">
                {fileName
                  ? `File selected: ${fileName}`
                  : "Browse or drop image"}
              </p>
            </div>
          </div>
        )}
        {activeTab === "url" && (
          <div className="flex items-center justify-center w-full h-auto mt-3 gap-2 p-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
            <button
              onClick={handleUrlSubmit}
              className="px-4 py-2 w-1/5 bg-blue-500 text-white rounded-md hover:bg-white hover:text-blue-500 border border-blue-500"
            >
              OK
            </button>
          </div>
        )}
        {activeTab === "stock" && (
          <div className="flex flex-col w-full h-auto p-5 gap-4">
            <div className="flex gap-2  w-full">
              <input
                type="text"
                className="w-full px-4 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search stock images"
                value={stockSearch}
                onChange={(e) => setStockSearch(e.target.value)}
              />
              <button
                onClick={handleStockSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-white hover:text-blue-500 border border-blue-500 flex items-center"
              >
                <FaSearch size={16} />
              </button>
            </div>
            {loading && <p>Loading images...</p>}
            <div className="grid max-h-72 overflow-y-scroll grid-cols-3 gap-3 mt-2 custom-scrollbar">
              {stockImages.map((image) => (
                <img
                  key={image.id}
                  src={image.previewURL}
                  alt={image.tags}
                  className="w-full h-24 object-cover rounded-md cursor-pointer"
                  onClick={() => {
                    setImageUrl(image.largeImageURL);
                    const img = new Image();
                    img.crossOrigin = "Anonymous"; // Handle CORS for stock images
                    img.src = image.largeImageURL;

                    img.onload = () => {
                      extractRandomColors(img);
                      setShowImagePopup(true);
                    };
                    img.onerror = () => {
                      alert("Failed to process the stock image.");
                    };
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {showImagePopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white w-[500px] h-[580px] rounded-2xl shadow-lg relative">
            <div className="border-b-2 border-gray-300 flex items-center justify-center h-[50px] pt-5">
              <p className="text-2xl mb-2 font-serif">Image Picker</p>
              <button
                onClick={handleCloseImagePopup}
                className="absolute top-5 right-4 text-gray-500 hover:text-gray-700"
              >
                <IoMdClose size={25} />
              </button>
            </div>
            <div className="border-b-2 border-gray-300 bg-gray-100 flex flex-col items-center justify-center">
              {imageUrl && (
                <>
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="p-4 w-full h-[370px] object-contain rounded-lg"
                  />
                </>
              )}
            </div>

            {/* Color Palette */}

            <div className="mt-5 w-full h-30 flex flex-col items-center gap-2 relative">
              {/* Refresh Icon */}
              <MdOutlineRefresh
                onClick={() => {
                  const img = new Image();
                  img.crossOrigin = "Anonymous";
                  img.onload = () => extractRandomColors(img);
                  img.src = imageUrl; // Use the current image URL to re-pick colors
                }}
                className="absolute top-[-15px] right-[10px] text-gray-500 hover:text-gray-700 cursor-pointer text-2xl transition-transform transform hover:rotate-90 active:scale-110"
                title="Refresh Colors"
              />

              <div className="flex gap-1">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-20 h-28 shadow-md"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CameraModal;
