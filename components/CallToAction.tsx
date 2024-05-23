import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="text-center py-12 bg-blue-500 text-white">
      <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
      <p className="text-xl mb-8">Contact me today to discuss your next project.</p>
      <button className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg animate-pulse">Contact Me</button>
    </section>
  );
};

export default CallToAction;
