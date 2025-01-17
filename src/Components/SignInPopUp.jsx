import React from "react";
import { FaGoogle, FaApple, FaWindowClose } from "react-icons/fa";

const SignInPopup = ({ visible, onClose }) => {
  if (!visible) return null; // If not visible, return nothing

  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 py-9 px-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FaWindowClose size={22} />
        </button>

        {/* Header */}
        <h1 className="text-3xl text-black font-bold text-center mb-2">Hello!</h1>
        <p className="text-gray-600 text-center mb-6">
          Use your email or another service to continue with Coolors.
        </p>

        {/* Buttons */}
        <div className="space-y-3 ">
          <button className="flex bg-[#EDEDEE] text-black font-semibold items-center justify-center w-full rounded-md py-2 hover:bg-gray-200">
          <FaGoogle className=" absolute left-12 mr-2"/>
            Continue with Google
          </button>

          <button className="flex bg-[#EDEDEE] text-black font-semibold items-center justify-center w-full rounded-md py-2 hover:bg-gray-200">
          <FaApple className="absolute left-12 mr-2 h-24"/>
            Continue with Apple
          </button>

          <button className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700">
            Continue with email
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By continuing, you agree to our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service
          </a>
          . Read our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignInPopup;
