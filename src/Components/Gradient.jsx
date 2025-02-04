import React from "react";

const Gradient = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl mt-20 font-sans font-bold text-black">
          Gradients Color
        </h1>
        <p className="text-lg text-gray-600 mt-5">
          Explore beautiful gradient color for your projects and designs
        </p>
      </div>

      <div>
        <div className="grid grid-cols-4 gap-4 p-4 ">
        <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-500 to-teal-300 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#00B0FF_50%,_#4DB6AC_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-400 to-fuchsia-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#F06292_50%,_#9C27B0_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-300 to-blue-400 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#3F51B5_50%,_#64B5F6_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-300 to-lime-400 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#F8BBD0_50%,_#CDDC39_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-200 to-green-300 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#80CBC4_50%,_#66BB6A_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-indigo-600 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#64B5F6_50%,_#3F51B5_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-600 to-cyan-400 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#00796B_50%,_#00BCD4_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#BDBDBD_50%,_#616161_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-100 to-pink-200 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#F8BBD0_50%,_#F48FB1_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-200 to-teal-400 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#A5D6A7_50%,_#4DB6AC_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-100 to-lime-300 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#81D4FA_50%,_#CDDC39_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-200 to-blue-300 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#90CAF9_50%,_#64B5F6_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>
          
          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#FFEB3B_50%,_#F06292_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          
          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#8E44AD_50%,_#3498DB_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          
          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r ">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#F1C40F_50%,_#E74C3C_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          
          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r ">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#16A085_50%,_#27AE60_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-400 to-blue-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#F44336_50%,_#2196F3_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-yellow-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#4CAF50_50%,_#FFEB3B_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#00BCD4_50%,_#3F51B5_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 to-yellow-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#E91E63_50%,_#FFEB3B_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#9C27B0_50%,_#2196F3_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#009688_50%,_#00BCD4_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#FF5722_50%,_#F44336_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-lime-400 to-emerald-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#CDDC39_50%,_#4CAF50_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-400 to-blue-600 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#3F51B5_50%,_#2196F3_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#E91E63_50%,_#9C27B0_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-lime-600 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#009688_50%,_#CDDC39_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-green-400 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#1976D2_50%,_#4CAF50_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-yellow-400 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#D32F2F_50%,_#FFEB3B_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-pink-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#F57C00_50%,_#E91E63_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#2196F3_50%,_#009688_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-600 to-indigo-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#FFEB3B_50%,_#3F51B5_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-lime-500 to-teal-400 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#8BC34A_50%,_#009688_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-400 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#3F51B5_50%,_#9C27B0_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-teal-400 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#00BCD4_50%,_#009688_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#FFC107_50%,_#FF5722_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-800 to-amber-500 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#FF5722_50%,_#FFC107_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400 to-cyan-600 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#009688_50%,_#00BCD4_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#2196F3_50%,_#3F51B5_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>

          <div className="relative group h-44 w-full rounded-lg shadow-lg perspective-1000">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-700 to-pink-600 rounded-lg transition-all duration-300 group-hover:rotate-x-180 group-hover:bg-gradient-to-r">
              {/* Front content (gradient effect) */}
            </div>
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,_#FBC02D_50%,_#E91E63_50%)] rounded-lg backface-hidden opacity-0 group-hover:opacity-100 group-hover:rotate-x-180 transition-all duration-1000">
              {/* Back content (solid color split) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gradient;
