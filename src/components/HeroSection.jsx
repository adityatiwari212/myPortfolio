import React from "react";
import heroImage from "../assets/img.jpg";
const HeroSection = () => {
  return (
    <section id="home" className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-black text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 animate-gradient-background"></div>

      {/* Rotating Cube */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-32 h-32 bg-gradient-to-r from-yellow-500 to-yellow-600 animate-rotate-cube"></div>
      </div>

      {/* Left Section: Introduction */}
      <div className="relative text-center md:text-left md:w-1/2 z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
          Hi, I'm <span className="text-white">&lt;Aditya Tiwari/&gt;</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          I am a passionate and aspiring <span className="font-semibold text-gray-100">developer</span>, skilled in <span className="text-yellow-400">[JaVa]</span> for DSA, <span className="text-blue-400">[py_thon]</span> for machine learning, and the <span className="text-green-400">[MERN]</span> stack for full-stack applications. 
          Based in <span className="text-red-400">Mumbai</span>, I combine my love for technology with my enthusiasm for <span className="text-orange-400">[cricket]</span>. 
          Constantly learning and experimenting with new technologies, I aim to create meaningful experiences through <span className="text-teal-400">{`<code />`}</span>, crafting innovative solutions and bringing ideas to life.
        </p>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Let's <span className="font-semibold text-yellow-400">build something extraordinary</span> together! 
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg shadow-lg hover:opacity-90 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 flex justify-center z-10">
        <img
          src={heroImage}
          alt="Hero Illustration"
          className="w-3/4 md:w-[65%] lg:w-[60%] max-h-[500px] rounded-lg shadow-lg"
        />
      </div>

      {/* CSS for Rotating Cube */}
      <style jsx>{`
        .animate-rotate-cube {
          animation: rotateCube 6s infinite linear;
        }

        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
