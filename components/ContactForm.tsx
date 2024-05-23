"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      phonenumber: "",
      subject: "",
      message: "",
    };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }
    if (!formData.phonenumber || !/\S+@\S+\.\S+/.test(formData.phonenumber)) {
      newErrors.phonenumber = "Valid phonenumber is required";
      valid = false;
    }
    if (!formData.subject || !/\S+@\S+\.\S+/.test(formData.subject)) {
      newErrors.subject = "Valid subject is required";
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent!");
      setFormData({
        name: "",
        email: "",
        phonenumber: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 mt-10 bg-gray-900 shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block pb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block pb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="phonenumber" className="block pb-2 font-semibold">
          Phone Number
        </label>
        <textarea
          id="phonenumber"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={1}
        ></textarea>
        {errors.phonenumber && (
          <p className="text-red-500 mt-1">{errors.phonenumber}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block pb-2 font-semibold">
          Subject
        </label>
        <textarea
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={1}
        ></textarea>
        {errors.subject && (
          <p className="text-red-500 mt-1">{errors.subject}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block pb-2 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={5}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
