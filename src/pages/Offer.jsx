import React, { useState } from "react";

const WhatWeOffer = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section className="py-16 bg-gray-100 text-black" id="offer">
      <div className="container px-4">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">
          WHAT WE OFFER
        </h2>

        <div className="space-y-12">
          {/* Left Column (Image and Description) */}
          <div className="flex items-center gap-2">
            {/* Left Section: Image */}
            <div
              className="relative group w-1/2"
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src="https://st3.depositphotos.com/7249566/16576/i/380/depositphotos_165761754-stock-photo-offerings-man-working-on-holographic.jpg"
                alt="Image 1"
                className="w-3/4 h-[300px] object-cover rounded-lg transition-all pl-4"
              />
            </div>

            {/* Right Section: Description */}
            <div
              className={`w-1/2 p-4 transition-all transform ${
                hoveredImage === 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">
                MONTHLY COMPENDIUM
              </h4>
              <p className="text-base text-black mb-4">
                Insightful industry updates delivered monthly.
              </p>

              <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">
                ADVICE FROM SEASONED EXPERTS
              </h4>
              <p className="text-base text-black mb-4">
                Guidance from veteran industry professionals.
              </p>

              <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">
                SUBSTANTIAL RAW DATA FROM RELIABLE SOURCES
              </h4>
              <p className="text-base text-black">
                Vast datasets sourced from trusted providers.
              </p>
            </div>
          </div>

          {/* Right Column (Image and Description) */}
          <div className="flex items-center gap-2">
            {/* Left Section: Image */}
            <div
              className="relative group w-1/2"
              onMouseEnter={() => setHoveredImage(2)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-3hWGEC3pasmhIR31kOJRxGERwYPi8PIjw&s"
                alt="Image 2"
                className="w-3/4 h-[300px] object-cover rounded-lg transition-all pl-4"
              />
            </div>

            {/* Right Section: Description */}
            <div
              className={`w-1/2 p-4 transition-all transform ${
                hoveredImage === 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">
                EXCLUSIVE INSIGHTS BASED ON DECADES OF INDUSTRIAL EXPOSURE
              </h4>
              <p className="text-base text-black mb-4">
                Decades-honed expertise distilled into actionable insights.
              </p>

              <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">
                TEAM OF GLOBALLY EXPERIENCED RESEARCHERS
              </h4>
              <p className="text-base text-black mb-4">
                Globally-connected research powerhouse.
              </p>

              <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">
                ADVICE FROM SEASONED EXPERTS
              </h4>
              <p className="text-base text-black">
                Guidance from veteran industry professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
