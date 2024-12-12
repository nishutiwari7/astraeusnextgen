import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-black text-white shadow-md z-50 font-['Jeju_Gothic']">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Image */}
        <div>
          <img
            src="https://astraeus.sentritalabs.com/wp-content/uploads/2024/08/Astraeus-Logo.png"
            alt="Brand Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row gap-4 lg:gap-8 ${
            isMenuOpen ? 'block absolute top-full left-0 w-full bg-black z-50 p-4 text-center' : 'hidden'
          }`}
        >
          {[
            { label: 'HOME', href: '#home' },
            { label: 'SERVICES', href: '#services' },
            { label: 'OUR OFFERS', href: '#offer' },
            { label: 'OPERATION', href: '#operation' },
            { label: 'PRODUCTS', href: '#vajra' }, 
            { label: 'TEAM', href: '#team' },
            { label: 'ADVISORS', href: '#advisors' },
            { label: 'CONTACT', href: '#contact' },
          ].map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer transition duration-300 text-sm lg:text-base mb-4 lg:mb-0"
            >
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="inline-block pb-1 hover:text-gray-400 transform hover:scale-110 transition duration-300"
              >
                {item.label}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
