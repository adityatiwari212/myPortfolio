import React, { useState } from "react";
import { Menu, X, Home, Briefcase, Mail, Handshake } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          <a href="#home" className="hover:text-yellow-400 transition duration-300">&lt;myPortFolio/&gt;</a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none text-white hover:text-yellow-400 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`md:flex items-center space-x-8 font-semibold text-white hidden`}>
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="#home" className="flex items-center">
              <Home size={20} className="mr-2" /> Home
            </a>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="https://www.linkedin.com/in/aditya-tiwari-8833a7252" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Handshake size={20} className="mr-2" /> Connect
            </a>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="#projects" className="flex items-center">
              <Briefcase size={20} className="mr-2" /> Projects
            </a>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <a href="#contact" className="flex items-center">
              <Mail size={20} className="mr-2" /> Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-lg">
          <ul className="p-6 space-y-6 text-gray-800">
            <li className="hover:text-teal-500 transition duration-300">
              <a href="#home" className="flex items-center">
                <Home size={20} className="mr-2" /> Home
              </a>
            </li>
            <li className="hover:text-teal-500 transition duration-300">
              <a href="https://www.linkedin.com/in/aditya-tiwari-8833a7252" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Handshake size={20} className="mr-2" /> Connect
              </a>
            </li>
            <li className="hover:text-teal-500 transition duration-300">
              <a href="#projects" className="flex items-center">
                <Briefcase size={20} className="mr-2" /> Projects
              </a>
            </li>
            <li className="hover:text-teal-500 transition duration-300">
              <a href="#contact" className="flex items-center">
                <Mail size={20} className="mr-2" /> Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
