"use client";
import React from "react";
import SkillsSection from "@/components/SkillsSection";
import FloatingCircles from "@/components/FloatingCircles";

const SkillsPage: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-white">
      <div className="z-20">
        <SkillsSection />
      </div>
      <div className="z-10">
        <FloatingCircles />
      </div>
    </section>
  );
};

export default SkillsPage;
