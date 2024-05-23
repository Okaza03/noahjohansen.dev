import React from "react";
import SkillCard from "./SkillCard";
import { FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    skill: "JavaScript",
    level: "Intermediate",
    IconComponent: FaJs,
    color: "#F7DF1E",
  },
  {
    skill: "CSS",
    level: "Advanced",
    IconComponent: FaCss3,
    color: "#1572B6",
  },
  {
    skill: "React",
    level: "Advanced",
    IconComponent: FaReact,
    color: "#61DAFB",
  },
  {
    skill: "Next.js",
    level: "Advanced",
    IconComponent: SiNextdotjs,
    color: "#000000",
  },
  {
    skill: "Tailwind CSS",
    level: "Advanced",
    IconComponent: SiTailwindcss,
    color: "#38B2AC",
  },
];

const SkillsSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-5xl font-bold mb-4">Skills</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Here are some of the technologies and frameworks I'm proficient in.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto p-4"
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill.skill}
            level={skill.level}
            IconComponent={skill.IconComponent}
            color={skill.color}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
