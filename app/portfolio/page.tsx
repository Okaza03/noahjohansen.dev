import React from 'react';
import PortfolioItem from '@/components/PortfolioItem';

const portfolioItems = [
  { title: 'Project One', image: '/images/project1.jpg' },
  { title: 'Project Two', image: '/images/project2.jpg' },
  // Add more items as needed
];

const PortfolioPage: React.FC = () => {
  return (
      <>
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} title={item.title} image={item.image} />
            ))}
          </div>
        </section>
      </>
  );
};

export default PortfolioPage;
