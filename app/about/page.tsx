"use client";
import React from "react";
import siteMetadata from "@/data/siteMetadata";
import { FaReact, FaJs, FaNode, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <section className="text-center min-h-screen flex flex-col items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-4">About Me</h2>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-lg max-w-2xl mx-auto mb-8">
          I am Noah Johansen, a passionate developer with a love for creating
          dynamic and interactive web applications. With a strong foundation in
          JavaScript, React, and Next.js, I strive to build user-friendly and
          efficient websites. Welcome to my personal website where you can learn
          more about my projects and skills.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center space-x-8 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <FaReact
          size={40}
          className="hover:text-blue-500 transition-colors duration-300"
        />
        <FaJs
          size={40}
          className="hover:text-yellow-500 transition-colors duration-300"
        />
        <FaNode
          size={40}
          className="hover:text-green-600 transition-colors duration-300"
        />
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg text-black">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="list-disc list-inside text-left">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-black">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <ul className="list-disc list-inside text-left">
            <li>
              Nothing here yet :(
            </li>
            
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-black">
          <h3 className="text-2xl font-semibold mb-4">Hobbies</h3>
          <ul className="list-disc list-inside text-left">
            <li>Coding</li>
            <li>Driving</li>
            <li>Gaming</li>
            <li>Traveling</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-black">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p>Email: contact@jhns.no</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href={siteMetadata.github}
              target="_blank"
              aria-label="GitHub"
              className="hover:text-gray-500"
            >
              <FaGithub size={30} />
            </a>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-blue-700"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
