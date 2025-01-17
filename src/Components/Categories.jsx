import React, { useRef, useState} from "react";
import color from "../assets/caegories.jpg";
import monochromatic from "../assets/monochromatic.jpg";
import pastel from "../assets/pastel.jpeg";
import analog from "../assets/analog.png";
import complementary from "../assets/complementary.jpg";
import grad from "../assets/grad.jpeg";
import warm from "../assets/warm.jpeg";
import cool from "../assets/cool.jpeg";
import vibrant from "../assets/vibrant.jpeg";
import {FaWindowClose } from "react-icons/fa";
import paletteData from "../../palettes.json";

const Categories = () => {

  
  const [selectedPalette, setSelectedPalette] = useState(null);
  const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState();

  const handleLinkClick = (type) => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const selected = paletteData.find((palette) => palette.type === type);
    setSelectedPalette(selected);
    setIsExpanded(true); // Expand the div when a palette is selected
  };

  const handleClose = () => {
    setIsExpanded(false); // Collapse the div
    setSelectedPalette(null); // Clear the selected palette
  };

  return (
    <div className="w-full h-[400px] relative">
      {/* Image */}
      <img
        src={color}
        alt="Color Categories"
        className="w-full h-full object-cover"
      />

      {/* Overlay with text */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-6 overflow-hidden">
        <h1 className="text-6xl font-bold text-white mb-4">
          Palette Perfection for Every Mood!
        </h1>
        <p className="text-base text-white mb-2">
          Discover the power of colors to match any vibe, from calm and cool to
          bold and vibrant.
        </p>
        <p className="text-base text-white">
          Create designs that inspire and express every emotion effortlessly!
        </p>
      </div>

      <div ref={containerRef}  className="flex items-center justify-center w-full h-16 mt-2 border-b-2 border-gray-200 shadow-lg p-5">
        <ul className="flex space-x-6 p-5 gap-2 text-gray-800">
        {paletteData.map((palette, index) => (
            <li
              key={index}
              onClick={() => handleLinkClick(palette.type)}
              className="text-sm font-serif text-gray-800 hover:text-blue-700 transition-colors duration-300 cursor-pointer"
            >
              {palette.type}
            </li>
          ))}
        </ul>
      </div>

      {selectedPalette && (
        <div
          className={`w-full bg-gray-100 mt-4 border-b-2 border-gray-200 shadow-lg p-2 transition-all duration-500 ease-in-out ${
            isExpanded ? "h-fit opacity-100" : "h-0 opacity-0"
    } overflow-hidden`}
        >
          <div className="relative flex items-start justify-center w-full h-full overflow-y-auto">
            <button onClick={handleClose}>
              <FaWindowClose
                size={22}
                className="absolute top-0 right-0 rounded-md hover:text-gray-700"
              />
            </button>
            
              <div className="w-full h-fit grid grid-cols-4 gap-4 p-5 ">
              {selectedPalette.colors.map((color, index) => (
                <div key={index} className="flex  rounded-2xl h-40 overflow-hidden">
                {color.map((shade, index) => (
                  <div
                    key={index}
                    className=" h-full w-full"
                    style={{ backgroundColor: shade }}
                  ></div>
                ))}
                </div>
              ))}
              </div>
            
          </div>
        </div>
      )}

      {/*------------------------------------------------------------------------------------------------------------------------------------------ */}

      <div className={`absolute ${isExpanded ? "hidden" : "block"} w-full h-40 p-10 text-black items-center justify-center`}>
        <p className="text-base text-gray-700 gap-5">
          The color wheel represents a scientific concept that demonstrates how
          white light splits into a spectrum of colors. It allows us to visually
          understand how colors are ordered, providing a clear structure for how
          we perceive and organize colors in the world around us.
          <br /> Dive deeper into each color scheme type to discover how they
          work and how you can use them in your designs. Gain valuable tips and
          inspiration to enhance your color choices, ensuring your projects
          achieve the desired aesthetic and emotional impact.
        </p>

        {/* Monochromatic Color Scheme */}

        <div className="text-black gap-4 grid grid-cols-2 w-full items-center">
          {/* Text Section */}

          <div className=" space-y-6 p-4 ml-3">
            <h1 className="text-lg font-serif hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 cursor-default">
              <span className="text-2xl text-black">1.</span> Monochromatic
              Color Scheme
            </h1>

            <p className="text-base">
              A monochromatic color scheme involves using various shades, tints,
              and tones of a single color. This color scheme relies on one hue,
              but it incorporates different variations of that hue by adjusting
              its lightness or darkness. The result is a visually harmonious and
              cohesive palette that feels unified.
            </p>

            <ul className="list-disc pl-5 space-y-4 text-base text-gray-700 mt-4">
              <li>
                <strong>Hue:</strong> The core color chosen for the scheme
                (e.g., blue, red, green).
              </li>
              <li>
                <strong>Shades:</strong> The darker versions of the hue, created
                by adding black.
              </li>
              <li>
                <strong>Tints:</strong> The lighter versions of the hue, created
                by adding white.
              </li>
              <li>
                <strong>Tones:</strong> The muted versions of the hue, created
                by adding gray.
              </li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="w-full h-full">
            <img
              src={monochromatic} // replace with the path to your image
              alt="Monochromatic Color Scheme"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/*------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* Pastel Color Scheme */}
        <div className="text-black gap-4 grid grid-cols-1 md:grid-cols-2 w-full items-center">
          {/* Image Section */}
          <div className="w-full h-full p-4">
            <img
              src={pastel} // replace with the path to your image
              alt="Pastel Color Scheme"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 p-4 ml-3">
            <h1 className="text-lg font-serif hover:text-pink-600 cursor-default">
              {" "}
              <span className="text-2xl text-black">2.</span> Pastel Color
              Scheme
            </h1>
            <p className="text-base">
              A pastel color scheme is known for its soft and light colors. It
              often involves using light tints of colors, making it ideal for
              creating calm, serene, and soothing designs. Pastels can range
              from pale pinks, blues, greens, and purples, to soft yellows and
              peaches.
            </p>
            <ul class="list-disc pl-5 space-y-2 text-gray-800">
              <li>
                <strong>Pastel Pink</strong> – A soft, light pink that is often
                associated with tenderness and romance.
              </li>
              <li>
                <strong>Pastel Blue</strong> – A pale blue, often linked to
                tranquility and peace.
              </li>
              <li>
                <strong>Pastel Yellow</strong> – A soft yellow, bringing warmth
                and optimism without being too overwhelming.
              </li>
              <li>
                <strong>Pastel Green</strong> – A gentle green shade that evokes
                freshness and calmness.
              </li>
              <li>
                <strong>Pastel Lavender</strong> – A muted purple that feels
                both calming and elegant.
              </li>
              <li>
                <strong>Pastel Peach</strong> – A soft, light orange that brings
                a warm, welcoming feeling.
              </li>
              <li>
                <strong>Pastel Mint</strong> – A soft, fresh greenish-blue that
                is refreshing and cool.
              </li>
            </ul>
          </div>
        </div>

        {/*------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* Analogous Palette */}
        <div className="text-black gap-4 grid grid-cols-2 w-full items-center">
          {/* Text Section */}
          <div className="space-y-6 p-4 ml-3">
            <h1 className="text-lg font-serif hover:text-orange-600 cursor-default">
              <span className="text-2xl text-black">3.</span> Analogous Palette
            </h1>
            <p className="text-base">
              An Analogous Color Palette involves using colors that are next to
              each other on the color wheel. These colors typically share
              similar hues and harmonize well together, creating a serene and
              cohesive design. Analogous color schemes are often found in nature
              and are visually pleasing because they feel balanced and unified.
            </p>
            <ul class="list-disc pl-5 space-y-2 text-gray-800">
              <li>
                <strong>Yellow</strong> (the base color)
              </li>
              <li>
                <strong>Yellow-Orange</strong> (next to Yellow on the color
                wheel)
              </li>
              <li>
                <strong>Orange</strong> (next to Yellow-Orange on the color
                wheel)
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full h-[750px] p-4">
            <img
              src={analog} // replace with the path to your image
              alt="Pastel Color Scheme"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/*------------------------------------------------------------------------------------------------------------------------------------------ */}
        {/* Complementary Palette */}
        <div className="text-black gap-4 grid grid-cols-1 md:grid-cols-2 w-full items-center">
          {/* Image Section */}
          <div className="w-full h-full p-4">
            <img
              src={complementary} // replace with the path to your image
              alt="Pastel Color Scheme"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 p-4 ml-3">
            <h1 className="text-lg font-serif hover:text-green-700 cursor-default">
              <span className="text-2xl text-black">4.</span> Complementary
              Palette
            </h1>
            <p className="text-base">
              A Complementary Color Palette uses two colors that are opposite
              each other on the color wheel, such as red and green, blue and
              orange, or yellow and purple. These colors create high contrast
              and vibrancy when used together, making them ideal for designs
              that need to stand out or capture attention.
            </p>
            <ul class="list-disc pl-5 text-gray-800 space-y-2">
              <li>Opposite colors on the color wheel.</li>
              <li>Creates high contrast and vibrancy.</li>
              <li>Ideal for eye-catching designs.</li>
              <li>Balance is important to avoid overwhelming the viewer.</li>
              <li>Pink (fb6f92) and Green (#00FF00).</li>
              <li>Blue (#0000FF) and Orange (#FFA500).</li>
            </ul>
          </div>
        </div>

        {/*------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* Gradient Palette */}
        <div className="text-black gap-4 grid grid-cols-2 w-full items-center">
          {/* Text Section */}
          <div className="space-y-6 p-4 ml-3">
            <h1 className="text-lg font-serif hover:text-blue-800 cursor-default">
              <span className="text-2xl text-black">5.</span> Gradient Palette
            </h1>
            <p className="text-base">
              A Gradient Color Palette is a smooth transition between two or
              more colors, creating a gradient effect. This palette type is
              often used to create depth, movement, and a sense of fluidity in
              design. It combines colors seamlessly in a way that adds
              dimension, vibrancy, and a dynamic look.
            </p>
            <ul class="list-disc pl-5 space-y-2 text-gray-800">
              <li>Smooth color transition between two or more colors.</li>
              <li>Can be linear (straight line) or radial (circular).</li>
              <li>Adds depth and vibrancy without harsh contrast.</li>
              <li>Used in backgrounds, buttons, and UI elements.</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full h-[750px] p-4">
            <img
              src={grad} // replace with the path to your image
              alt="Pastel Color Scheme"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/*------------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* Warm Palette */}

        <div className="text-black gap-4 grid grid-cols-1 md:grid-cols-2 w-full items-center">
          {/* Image Section */}
          <div className="w-full h-full p-4">
            <img
              src={warm} // replace with the path to your image
              alt="Pastel Color Scheme"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 p-4 ml-3">
            <h1 className="text-lg font-serif hover:text-[#99271D] cursor-default">
              <span className="text-2xl text-black">5.</span> Warm Palette
            </h1>
            <p className="text-base">
              A warm palette refers to a collection of colors that evoke warmth,
              energy, and vibrancy. These colors are typically associated with
              heat, sunlight, and emotions like passion and excitement. Warm
              colors generally include shades of red, orange, yellow, and their
              variations.
            </p>
            <ul class="list-disc pl-5 text-gray-800 space-y-2">
              <li>
                They create feelings of heat, energy, and comfort, reminiscent
                of sunlight and fire.
              </li>
              <li>
                Warm colors often evoke emotions like passion, excitement, and
                happiness.
              </li>
              <li>
                They tend to stand out and grab attention in a design or visual
                composition.
              </li>
              <li>
                {" "}
                Linked to action, creativity, and vibrancy, often used to
                inspire or energize.
              </li>
              <li>
                Include red, orange, yellow, and their variations (e.g., gold,
                coral, amber).
              </li>
            </ul>
          </div>
        </div>
        {/*------------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* Cool Palette */}

        <div className="text-black gap-4 grid grid-cols-2 w-full items-center">
          {/* Text Section */}
          <div className="space-y-6 p-4 ml-3">
            <h1 className="text-lg font-serif hover:text-teal-700 cursor-default">
              <span className="text-2xl text-black">6.</span> Cool Color Palette
            </h1>
            <p className="text-base">
              A cool color palette consists of hues that evoke a sense of calm,
              tranquility, and serenity. These colors are typically associated
              with nature, like water, sky, and foliage, and include shades of
              blue, green, and purple.
            </p>
            <ul class="list-disc pl-5 space-y-2 text-gray-800">
              <li>
                <strong>Evokes Calmness:</strong> Cool colors create a soothing
                and tranquil effect.
              </li>
              <li>
                <strong>Nature-Inspired:</strong> Often associated with water,
                sky, and greenery.
              </li>
              <li>
                <strong>Emotional Impact:</strong> Convey feelings of peace,
                trust, and relaxation.
              </li>
              <li>
                <strong>Visual Effects:</strong> Recede in design, making spaces
                feel larger and more open.
              </li>
              <li>
                <strong>Common Hues:</strong> Include blue, green, purple, and
                their variations.
              </li>
              <li>
                <strong>Popular Usage:</strong> Used in professional, tech, and
                wellness designs for a serene tone.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full h-[750px] p-4">
            <img
              src={cool} // replace with the path to your image
              alt="Pastel Color Scheme"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/*------------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* Vibrant Palette */}
        <div className="text-black gap-4 grid grid-cols-1 md:grid-cols-2 w-full items-center">
          {/* Image Section */}
          <div className="w-full h-full p-4">
            <img
              src={vibrant} // replace with the path to your image
              alt="Pastel Color Scheme"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 p-4 ml-3">
            <h1 className="text-lg font-serif hover:text-purple-700 cursor-default">
              <span className="text-2xl text-black">7.</span> Vibrant Color
              Palette
            </h1>
            <p className="text-base">
              A vibrant color palette consists of bold, bright, and highly
              saturated colors that create a sense of energy, enthusiasm, and
              positivity. These palettes are eye-catching and often used to grab
              attention or evoke strong emotions.
            </p>
            <ul class="list-disc pl-5 text-gray-800 space-y-2">
              <li>
                <strong>Highly Saturated:</strong> Feature bold, vivid, and
                intense colors.
              </li>
              <li>
                <strong>Energetic Atmosphere:</strong> Evoke excitement,
                enthusiasm, and positivity.
              </li>
              <li>
                <strong>Emotional Appeal:</strong> Capture attention and convey
                creativity or fun.
              </li>
              <li>
                <strong>Popular Shades:</strong> Include bright red, orange,
                yellow, green, pink, blue, and purple.
              </li>
              <li>
                <strong>Design Use:</strong> Common in branding, marketing, and
                digital media for visual impact.
              </li>
              <li>
                <strong>Contrast and Balance:</strong> Best paired with neutral
                tones for harmony and readability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
