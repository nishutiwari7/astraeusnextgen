import React from 'react';
import { FaGlobe, FaLightbulb, FaChartBar, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaGlobe size={40} className="text-black" />, // React Icon: FaGlobe
    title: "NAVIGATE GEOPOLITICAL CHALLENGES",
    description: "Provides tools to understand and navigate complex geopolitical situations.",
  },
  {
    icon: <FaLightbulb size={40} className="text-black" />, // React Icon: FaLightbulb
    title: "ACTIONABLE INSIGHTS",
    description: "Translate complex data into clear information you can use to make decisions.",
  },
  {
    icon: <FaChartBar size={40} className="text-black" />, // React Icon: FaChartBar
    title: "PREDICT GEOPOLITICAL IMPACTS",
    description: "Analyze and predict how geopolitical events might affect your business.",
  },
  {
    icon: <FaShieldAlt size={40} className="text-black" />, // React Icon: FaShieldAlt
    title: "PREPARE FOR THE NEW COLD WAR",
    description: "Brace for new challenges and opportunities in a tense geopolitical climate.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-10">OUR SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-transparent bg-blue-200 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 relative group"
          >
            <div className="flex justify-center items-center mb-6">
              <div className="text-black">{service.icon}</div>
            </div>
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-black mb-4">
              {service.title}
            </h3>
            <p className="text-sm text-black opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
