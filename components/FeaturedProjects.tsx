import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const featuredProjects = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    image: '/images/project1.jpg',
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    image: '/images/project2.jpg',
  },
  {
    title: 'Project Three',
    description: 'Description of project three.',
    image: '/images/project3.jpg',
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
      <Swiper spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
        {featuredProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedProjects;
