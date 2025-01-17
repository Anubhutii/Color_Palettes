import React from "react";

const ThreeDotsMenu = () => {
  return (
    <div
      className="absolute top-[50px] right-0 bg-white shadow-lg rounded-md w-[200px] py-2"
      onClick={closeMenu} // Close menu when an item is clicked
    >
      <a
        href="#collage"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Make a collage
      </a>
      <a
        href="#generate"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Generate method
      </a>
      <a
        href="#settings"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Settings
      </a>
      <a
        href="#tutorial"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Watch tutorial
      </a>
    </div>
  );
};

export default ThreeDotsMenu;
