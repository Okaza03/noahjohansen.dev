"use client"
import React, { useState } from 'react';
import Lightbox from './Lightbox';

interface PortfolioItemProps {
  title: string;
  image: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => setIsOpen(true)}>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      {isOpen && <Lightbox image={image} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default PortfolioItem;
