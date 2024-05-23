import React from 'react';
import Counter from './Counter';

const CounterSection: React.FC = () => {
  return (
    <section className="text-center py-12" id="achievements">
      <h2 className="text-4xl font-bold mb-8">Our Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Projects Completed</h3>
          <p className="text-3xl text-blue-500">
            <Counter end={1592} duration={5} />
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Happy Clients</h3>
          <p className="text-3xl text-blue-500">
            <Counter end={1042} duration={5} />
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Awards Won</h3>
          <p className="text-3xl text-blue-500">
            <Counter end={401} duration={5} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
