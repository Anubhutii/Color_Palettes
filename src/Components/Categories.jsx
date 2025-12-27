import React, { useRef, useState } from "react";
import color from "../assets/caegories.jpg";
import monochromatic from "../assets/monochromatic.jpg";
import pastel from "../assets/pastel.jpeg";
import analog from "../assets/analog.png";
import complementary from "../assets/complementary.jpg";
import grad from "../assets/grad.jpeg";
import warm from "../assets/warm.jpeg";
import cool from "../assets/cool.jpeg";
import vibrant from "../assets/vibrant.jpeg";
import { FaWindowClose } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import paletteData from "../../palettes.json";

const Categories = () => {
  const [selectedPalette, setSelectedPalette] = useState(null);
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleLinkClick = (type) => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const selected = paletteData.find((palette) => palette.type === type);
    setSelectedPalette(selected);
    setIsExpanded(true);
    setShowMobileMenu(false);
    setActiveSection(type);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSelectedPalette(null);
    setActiveSection("");
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowMobileMenu(false);
  };

  return (
    <div className="w-full min-h-screen relative bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src={color}
          alt="Color Categories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-4 md:p-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 px-4">
            Palette Perfection for Every Mood!
          </h1>
          <p className="text-sm md:text-base text-white mb-2 max-w-3xl px-4">
            Discover the power of colors to match any vibe, from calm and cool
            to bold and vibrant.
          </p>
          <p className="text-sm md:text-base text-white max-w-3xl px-4">
            Create designs that inspire and express every emotion effortlessly!
          </p>
        </div>
      </div>

      {/* Palette Navigation */}
      <div
        ref={containerRef}
        className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10"
      >
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-gray-800">Color Palettes</h2>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-gray-100"
          >
            {showMobileMenu ? (
              <FiX className="h-6 w-6 text-gray-700" />
            ) : (
              <FiMenu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center w-full h-16">
            <ul className="flex flex-wrap justify-center space-x-4 lg:space-x-6 p-4 text-gray-800">
              {paletteData.map((palette, index) => (
                <li
                  key={index}
                  onClick={() => handleLinkClick(palette.type)}
                  className={`text-sm lg:text-base font-serif px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeSection === palette.type
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                  }`}
                >
                  {palette.type}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <ul className="flex flex-col p-4 space-y-2">
              {paletteData.map((palette, index) => (
                <li
                  key={index}
                  onClick={() => handleLinkClick(palette.type)}
                  className={`text-base font-medium px-4 py-3 rounded-lg cursor-pointer transition-all ${
                    activeSection === palette.type
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {palette.type}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Selected Palette Section */}
      {selectedPalette && (
        <div
          className={`w-full bg-gradient-to-br from-gray-50 to-white mt-4 border-t border-gray-100 shadow-lg transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="relative p-4 md:p-6">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <FaWindowClose className="h-5 w-5 text-gray-600 hover:text-gray-800" />
            </button>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
              {selectedPalette.type} Palette
            </h3>

            <div className="w-full overflow-x-auto pb-4">
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 min-w-max md:min-w-0">
                {selectedPalette.colors.map((color, index) => (
                  <div
                    key={index}
                    className="flex rounded-xl md:rounded-2xl h-32 md:h-40 overflow-hidden shadow-md hover:shadow-lg transition-shadow min-w-[200px] md:min-w-0"
                  >
                    {color.map((shade, shadeIndex) => (
                      <div
                        key={shadeIndex}
                        className="h-full w-full relative group"
                        style={{ backgroundColor: shade }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-20">
                          <span className="text-white text-xs font-bold px-2 py-1 bg-black bg-opacity-50 rounded">
                            {shade}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Click on color blocks to see their hex codes
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Color Schemes Information */}
      <div
        className={`w-full ${
          isExpanded ? "mt-8" : "mt-4"
        } px-4 md:px-8 lg:px-12 py-8 md:py-12`}
      >
        {/* Introduction */}
        <div className="mb-10 md:mb-16">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            The color wheel represents a scientific concept that demonstrates
            how white light splits into a spectrum of colors. It allows us to
            visually understand how colors are ordered, providing a clear
            structure for how we perceive and organize colors in the world
            around us.
            <br />
            <br />
            Dive deeper into each color scheme type to discover how they work
            and how you can use them in your designs. Gain valuable tips and
            inspiration to enhance your color choices, ensuring your projects
            achieve the desired aesthetic and emotional impact.
          </p>
        </div>

        {/* Monochromatic Color Scheme */}
        <div
          id="monochromatic"
          className="text-black mb-16 md:mb-20 bg-gradient-to-r from-white to-blue-50 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="md:w-1/2 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold text-blue-600">
                  1
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800">
                  Monochromatic Color Scheme
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                A monochromatic color scheme involves using various shades,
                tints, and tones of a single color. This color scheme relies on
                one hue, but it incorporates different variations of that hue by
                adjusting its lightness or darkness. The result is a visually
                harmonious and cohesive palette that feels unified.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">
                    <strong>Hue:</strong> The core color chosen for the scheme
                    (e.g., blue, red, green).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">
                    <strong>Shades:</strong> The darker versions of the hue,
                    created by adding black.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">
                    <strong>Tints:</strong> The lighter versions of the hue,
                    created by adding white.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">
                    <strong>Tones:</strong> The muted versions of the hue,
                    created by adding gray.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={monochromatic}
                alt="Monochromatic Color Scheme"
                className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Pastel Color Scheme */}
        <div
          id="pastel"
          className="text-black mb-16 md:mb-20 bg-gradient-to-r from-pink-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src={pastel}
                alt="Pastel Color Scheme"
                className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold text-pink-500">
                  2
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800">
                  Pastel Color Scheme
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                A pastel color scheme is known for its soft and light colors. It
                often involves using light tints of colors, making it ideal for
                creating calm, serene, and soothing designs. Pastels can range
                from pale pinks, blues, greens, and purples, to soft yellows and
                peaches.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Pastel Pink – Soft, light pink associated with tenderness",
                  "Pastel Blue – Pale blue for tranquility and peace",
                  "Pastel Yellow – Soft yellow for warmth and optimism",
                  "Pastel Green – Gentle green for freshness and calmness",
                  "Pastel Lavender – Muted purple, calming and elegant",
                  "Pastel Peach – Light orange for warmth and welcome",
                  "Pastel Mint – Fresh greenish-blue, refreshing and cool",
                ].map((item, index) => (
                  <div key={index} className="bg-white/50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analogous Palette */}
        <div
          id="analogous"
          className="text-black mb-16 md:mb-20 bg-gradient-to-r from-orange-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="md:w-1/2 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold text-orange-500">
                  3
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800">
                  Analogous Palette
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                An Analogous Color Palette involves using colors that are next
                to each other on the color wheel. These colors typically share
                similar hues and harmonize well together, creating a serene and
                cohesive design.
              </p>
              <div className="space-y-3">
                {[
                  "Yellow (the base color)",
                  "Yellow-Orange (next to Yellow on color wheel)",
                  "Orange (next to Yellow-Orange on color wheel)",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/50 p-3 rounded-lg"
                  >
                    <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={analog}
                alt="Analogous Color Scheme"
                className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Complementary Palette */}
        <div
          id="complementary"
          className="text-black mb-16 md:mb-20 bg-gradient-to-r from-green-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src={complementary}
                alt="Complementary Color Scheme"
                className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold text-green-600">
                  4
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800">
                  Complementary Palette
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                A Complementary Color Palette uses two colors that are opposite
                each other on the color wheel, such as red and green, blue and
                orange, or yellow and purple.
              </p>
              <div className="space-y-3">
                {[
                  "Opposite colors on the color wheel",
                  "Creates high contrast and vibrancy",
                  "Ideal for eye-catching designs",
                  "Balance is important to avoid overwhelming",
                  "Pink (#fb6f92) and Green (#00FF00)",
                  "Blue (#0000FF) and Orange (#FFA500)",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Palette */}
        <div
          id="gradient"
          className="text-black mb-16 md:mb-20 bg-gradient-to-r from-blue-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="md:w-1/2 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold text-blue-600">
                  5
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800">
                  Gradient Palette
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                A Gradient Color Palette is a smooth transition between two or
                more colors, creating a gradient effect. This palette type is
                often used to create depth, movement, and a sense of fluidity.
              </p>
              <div className="space-y-3">
                {[
                  "Smooth color transition between two or more colors",
                  "Can be linear (straight line) or radial (circular)",
                  "Adds depth and vibrancy without harsh contrast",
                  "Used in backgrounds, buttons, and UI elements",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/50 p-3 rounded-lg"
                  >
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={grad}
                alt="Gradient Color Scheme"
                className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Warm Palette */}
        <div
          id="warm"
          className="text-black mb-16 md:mb-20 bg-gradient-to-r from-red-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src={warm}
                alt="Warm Color Scheme"
                className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold text-red-600">
                  6
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800">
                  Warm Palette
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                A warm palette refers to a collection of colors that evoke
                warmth, energy, and vibrancy. These colors are typically
                associated with heat, sunlight, and emotions like passion and
                excitement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Creates feelings of heat, energy, and comfort",
                  "Evokes passion, excitement, and happiness",
                  "Tends to stand out and grab attention",
                  "Linked to action, creativity, and vibrancy",
                  "Includes red, orange, yellow variations",
                  "Inspired by sunlight and fire",
                ].map((item, index) => (
                  <div key={index} className="bg-white/50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cool Palette */}
        <div
          id="cool"
          className="text-black mb-16 md:mb-20 bg-gradient-to-r from-teal-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="md:w-1/2 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold text-teal-600">
                  7
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800">
                  Cool Color Palette
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                A cool color palette consists of hues that evoke a sense of
                calm, tranquility, and serenity. These colors are typically
                associated with nature, like water, sky, and foliage.
              </p>
              <div className="space-y-3">
                {[
                  "Evokes calmness and tranquility",
                  "Nature-inspired (water, sky, greenery)",
                  "Conveys peace, trust, and relaxation",
                  "Recedes in design, making spaces feel larger",
                  "Includes blue, green, purple variations",
                  "Used in professional and wellness designs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={cool}
                alt="Cool Color Scheme"
                className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Vibrant Palette */}
        <div
          id="vibrant"
          className="text-black bg-gradient-to-r from-purple-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src={vibrant}
                alt="Vibrant Color Scheme"
                className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold text-purple-600">
                  8
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800">
                  Vibrant Color Palette
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                A vibrant color palette consists of bold, bright, and highly
                saturated colors that create a sense of energy, enthusiasm, and
                positivity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Highly saturated, vivid colors",
                  "Energetic atmosphere, evokes excitement",
                  "Captures attention and conveys creativity",
                  "Includes bright red, orange, yellow, green",
                  "Common in branding and marketing",
                  "Best paired with neutral tones",
                ].map((item, index) => (
                  <div key={index} className="bg-white/50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-20 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        ↑
      </button>
    </div>
  );
};

export default Categories;
