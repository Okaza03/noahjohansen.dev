import React from 'react';

const SVGAnimation: React.FC = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-4xl font-bold mb-4">SVG Animation</h2>
      <div className="flex justify-center">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="4"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset="0"
            strokeLinecap="round"
            className="animate-draw"
          />
        </svg>
      </div>
    </section>
  );
};

export default SVGAnimation;
