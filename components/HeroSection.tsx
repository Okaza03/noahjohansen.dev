"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link as ScrollLink } from "react-scroll";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          Welcome to Noah Johansen's Website
        </h1>
        <p className="text-2xl mb-8 animate-slide-up">
          Creating{" "}
          <span>
            <Typewriter
              words={["Interactive", "Dynamic", "Modern"]}
              loop={80}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          {""}
          Web Experiences{" "}
        </p>
        <ScrollLink
          to="achievements"
          smooth={true}
          duration={1000}
          className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg animate-bounce cursor-pointer"
        >
          Explore Now
        </ScrollLink>
      </div>
    </div>
  );
};

export default HeroSection;
