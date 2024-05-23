"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "John Doe",
    text: "Noah is an outstanding developer! Highly recommend.",
    image: "/images/testimonials/testimonial1.png",
  },
  {
    name: "Jane Smith",
    text: "A pleasure to work with Noah, always delivers on time.",
    image: "/images/testimonials/testimonial2.png",
  },
  {
    name: "Jane Smith",
    text: "A pleasure to work with Noah, always delivers on time.",
    image: "/images/testimonials/testimonial3.png",
  },
  {
    name: "Jane Smith",
    text: "A pleasure to work with Noah, always delivers on time.",
    image: "/images/testimonials/testimonial4.png",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonials: React.FC = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={true}
        customTransition="transform 300ms ease-in-out"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-item  p-6 rounded-lg shadow-lg mx-2 relative transition-transform transform hover:scale-110"
          >
            
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-lg italic">"{testimonial.text}"</p>
            <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
