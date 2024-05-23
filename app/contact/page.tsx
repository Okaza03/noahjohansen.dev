"use client";
import React from "react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { FaEnvelope  } from "react-icons/fa";
import siteMetadata from "@/data/siteMetadata";

const ContactPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Feel free to reach out to me for any inquiries, collaborations, or
          just to say hello!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center mb-8 w-full max-w-4xl mx-auto p-6  shadow-lg rounded-lg"
      >
        <ContactForm />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex justify-around mt-8 w-full max-w-xl"
      >
        <div className="flex flex-col items-center">
          <FaEnvelope size={30} className="mb-2" />
          <p>{siteMetadata.email}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
