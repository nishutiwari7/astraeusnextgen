import React from "react";

const HeroSection = () => {
  return (
  <div id="">
    <section className="relative bg-gray-100 text-white h-screen">
      {/* Background Image with Overlay */}
      <div className="relative h-full mx-20">
        <img
          src="https://imgs.search.brave.com/Z6kXScuXvYyO6n9N7vg5HSFLMByW2Y1A-G50SSBiKVU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzUyLzE0Lzk0/LzM2MF9GXzUyMTQ5/NDMyXzRGaFJnV3RL/SlFGQ00yOTlTdE8z/dGUzendYRjVLQWZF/LmpwZw" // Replace with your image path
          alt="Background"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          {/* Quote Section */}
          <p className="text-3xl md:text-4xl mb-6 leading-relaxed mx-8 text-white font-normal">
  “Data is the new oil” is a common phrase, but we also believe that
  data is the new moral compass. If decision-makers get access to the
  right data at the right time, many misfortunes can be avoided.
</p>



          {/* Logo and Text */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-36 h-36">
              <img
                src="https://astraeus.sentritalabs.com/wp-content/uploads/2024/08/Astraeus-Logo.png"
                alt="Astraeus Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-xl  tracking-wide">
              ASTRAEUS NEXT GEN
            </h4>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
