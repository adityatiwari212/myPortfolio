import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import "./socialMedia.css"
const SocialMedia = () => {
  return (
    <section
      className="py-16 px-6 md:px-16 text-white relative"
      style={{
        background: `linear-gradient(to right, #081C22, #083d45)`,
      }}
    >
      {/* Dots Background Effect */}
      <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          Let's Connect and Build Awesome Projects
        </h2>
        <p className="text-lg mb-8 text-gray-200">
          Reach out to me on social media or join me on coding platforms to collaborate and grow together!
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-12 flex-wrap">
          <a
            href="https://www.instagram.com/aditya7_212/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl md:text-5xl hover:text-yellow-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/me_aditya0212"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl md:text-5xl hover:text-yellow-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-tiwari-8833a7252"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl md:text-5xl hover:text-yellow-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Coding Platforms Links */}
        <div className="space-y-6">
          <p className="font-semibold text-lg">Check out my profiles on coding platforms:</p>
          <div className="flex justify-center flex-wrap space-x-6 mb-8">
            <a
              href="https://leetcode.com/u/aditya5234/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl sm:text-3xl md:text-4xl text-white hover:text-yellow-500 transition space-x-2"
            >
              <SiLeetcode className="text-xl sm:text-2xl md:text-3xl" />
              <span>LeetCode</span>
            </a>
            <a
              href="https://codeforces.com/profile/aditya5234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl sm:text-3xl md:text-4xl text-white hover:text-yellow-500 transition space-x-2"
            >
              <SiCodeforces className="text-xl sm:text-2xl md:text-3xl" />
              <span>Codeforces</span>
            </a>
            <a
              href="https://github.com/adityatiwari212/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl sm:text-3xl md:text-4xl text-white hover:text-yellow-500 transition space-x-2"
            >
              <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;