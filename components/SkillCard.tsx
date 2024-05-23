"use client";
import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  skill: string;
  level: string;
  IconComponent: React.ElementType;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  level,
  IconComponent,
  color,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group flex items-center p-4 bg-gray-900 shadow-lg rounded-lg transition-transform duration-300"
      style={{ color: color }}
    >
      <IconComponent
        className="w-12 h-12 mr-4 transition-colors duration-300 group-hover:text-current"
      />
      <div>
        <h4 className="text-xl font-bold text-white">{skill}</h4>
        <p className="text-gray-400">{level}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
