import React, { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import GoProDropdown from "./GoProDropdown";
import SignInPopup from "./SignInPopUp";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [hoverColor, setHoverColor] = useState("text-pink-600");
  const [isToolsDropdownVisible, setToolsDropdownVisible] = useState(false);
  const [isGoProDropdownVisible, setGoProDropdownVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  const randomColor = () => {
    const colors = [
      "text-red-400",
      "text-green-400",
      "text-yellow-400",
      "text-purple-400",
      "text-pink-400",
      "text-blue-400",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleMouseEnter = () => {
    const intervalId = setInterval(() => {
      setHoverColor(randomColor());
    }, 200);
    return intervalId;
  };

  const handleMouseLeave = (intervalId) => {
    clearInterval(intervalId);
    setHoverColor("text-pink-500");
  };

  const handleToolsClick = () => {
    if (isMobile) {
      setToolsDropdownVisible(!isToolsDropdownVisible);
    }
  };

  const handleGoProClick = () => {
    if (isMobile) {
      setGoProDropdownVisible(!isGoProDropdownVisible);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdowns when closing mobile menu
    if (isMobileMenuOpen) {
      setToolsDropdownVisible(false);
      setGoProDropdownVisible(false);
    }
  };

  const handleSignInClick = () => {
    setPopupVisible(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-white border-b-2 border-gray-200 cursor-pointer relative z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div
          className="w-8 h-8 border-t-emerald-600 border-r-red-500 border-b-blue-400 border-l-yellow-500 border-[8px] rounded animate-spin-slow cursor-pointer"
          onClick={() => navigate("/")}
        ></div>
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 bg-clip-text text-transparent tracking-widest cursor-pointer"
          style={{ fontFamily: "Fontdiner Swanky, sans-serif" }}
        >
          Colours
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex gap-6 font-serif items-center">
          {/* Tools Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setToolsDropdownVisible(true)}
            onMouseLeave={() => setToolsDropdownVisible(false)}
          >
            <a
              href="#tools"
              className="text-black hover:text-blue-600 flex items-center gap-1"
            >
              Tools
              <FiChevronDown
                className={`transition-transform ${
                  isToolsDropdownVisible ? "rotate-180" : ""
                }`}
              />
            </a>
            {isToolsDropdownVisible && <DropdownMenu />}
          </li>

          {/* Go Pro Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setGoProDropdownVisible(true)}
            onMouseLeave={() => setGoProDropdownVisible(false)}
          >
            <a
              href="#go-pro"
              className={`${hoverColor} flex items-center gap-1`}
              onMouseEnter={(e) => (e.target.intervalId = handleMouseEnter())}
              onMouseLeave={(e) => handleMouseLeave(e.target.intervalId)}
            >
              Go Pro
              <FiChevronDown
                className={`transition-transform ${
                  isGoProDropdownVisible ? "rotate-180" : ""
                }`}
              />
            </a>
            {isGoProDropdownVisible && (
              <GoProDropdown onClose={() => setGoProDropdownVisible(false)} />
            )}
          </li>

          {/* Sign In */}
          <li>
            <a
              onClick={() => setPopupVisible(true)}
              href="#sign-in"
              className="text-black hover:text-blue-600 cursor-pointer"
            >
              Sign in
            </a>
          </li>

          {/* Sign Up Button */}
          <li>
            <a
              onClick={() => setPopupVisible(true)}
              href="#sign-up"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        {isMobileMenuOpen ? (
          <FiX className="h-6 w-6 text-gray-700" />
        ) : (
          <FiMenu className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center px-3 py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-t-emerald-600 border-r-red-500 border-b-blue-400 border-l-yellow-500 border-[8px] rounded animate-spin-slow"></div>
            {/* <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 bg-clip-text text-transparent tracking-widest">
              Colours
            </div> */}
          </div>
          <button onClick={toggleMobileMenu} className="p-2">
            <FiX className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-3 overflow-y-auto h-full">
          {/* User Info (if signed in) */}

          {/* Mobile Navigation Links */}
          <ul>
            {/* Tools Dropdown Mobile */}
            {/* <li className="border-b border-gray-100 pb-4">
              <button
                onClick={handleToolsClick}
                className="flex justify-between items-center w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-medium text-gray-800">Tools</span>
                <FiChevronDown
                  className={`transition-transform ${
                    isToolsDropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isToolsDropdownVisible && (
                <div className="mt-2 ml-4 space-y-2">
                
                  <DropdownMenu isMobile={true} />
                </div>
              )}
            </li> */}

            {/* Go Pro Dropdown Mobile */}
            {/* <li className="border-b border-gray-100 pb-4">
              <button
                onClick={handleGoProClick}
                className="flex justify-between items-center w-full text-left p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors"
              >
                <span className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Go Pro
                </span>
                <FiChevronDown
                  className={`transition-transform ${
                    isGoProDropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isGoProDropdownVisible && (
                <div className="mt-2 ml-4 space-y-2">
                  <GoProDropdown
                    isMobile={true}
                    onClose={() => setGoProDropdownVisible(false)}
                  />
                </div>
              )}
            </li> */}

            {/* Quick Links */}
            <li className="">
              <a
                href="#generator"
                onClick={() => {
                  navigate("/generator");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div>
                  <p className="font-medium">Color Generator</p>
                </div>
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  navigate("/image_picker");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div>
                  <p className="font-medium">Image Picker</p>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#categories"
                onClick={() => {
                  navigate("/categories");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div>
                  <p className="font-medium">Categories</p>
                </div>
              </a>
            </li>
          </ul>
          <div>
            <button
              onClick={handleSignInClick}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Sign in / Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Sign In Popup */}
      <SignInPopup
        visible={isPopupVisible}
        onClose={() => setPopupVisible(false)}
      />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        /* Smooth transitions */
        .transition-transform {
          transition: transform 0.3s ease;
        }

        /* Mobile menu backdrop blur effect */
        @supports (backdrop-filter: blur(10px)) {
          .mobile-menu-backdrop {
            backdrop-filter: blur(10px);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
