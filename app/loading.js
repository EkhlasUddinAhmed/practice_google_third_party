import React from "react";

const LoadingModal = () => {
  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50  flex justify-center items-center z-50">
      <div className=" ">
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16">
            {/* Outer colorful ring */}
            <div className="absolute inset-0 rounded-full border-8 border-t-transparent animate-spin border-gradient"></div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-full border-8 opacity-25" style={{
              borderImage: 'linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899) 1',
              borderImageSlice: 1
            }}></div>
          </div>
        </div>
        {/* <p className="text-blue-800 font-semibold text-lg">Loading, please wait...</p> */}
      </div>
    </div>
  );
};

export default LoadingModal;