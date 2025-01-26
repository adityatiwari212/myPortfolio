import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SocialMedia from "./components/SocialMedia";
import ContactMe from "./components/ContactMe";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <ProjectSection />
        <ContactMe/>
        <SocialMedia/>

      </div>
    </div>
  );
};

export default App;
