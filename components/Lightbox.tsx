import React from 'react';
import { motion } from 'framer-motion';

interface LightboxProps {
  image: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <img src={image} alt="lightbox" className="max-w-full max-h-full" />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white text-2xl"
        >
          &times;
        </button>
      </motion.div>
    </div>
  );
};

export default Lightbox;
