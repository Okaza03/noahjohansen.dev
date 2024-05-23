"use client";
import React from "react";
import FloatingCircles from "@/components/FloatingCircles";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LottieAnimation from "@/components/LottieAnimation";

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center  text-white">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: -80, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <LottieAnimation src="/animations/404.json" />
      </motion.div>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: -64, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="text-center items-center justify-center"
      >
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      </motion.div>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: -64, opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="mb-8"
      >
        <p className="text-lg">
          Sorry, the page you're looking for doesn't exist.
        </p>
      </motion.div>
      <FloatingCircles />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-white text-blue-500 font-bold rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Go Home
        </button>
      </motion.div>
    </section>
  );
};

export default NotFoundPage;
