import React from 'react';

const timelineEvents = [
  { year: '2018', title: 'Started Freelancing', description: 'Began my journey as a freelance web developer.' },
  { year: '2019', title: 'First Major Client', description: 'Landed my first major client and delivered a successful project.' },
  { year: '2020', title: 'Expanded Team', description: 'Expanded my team to handle more projects and clients.' },
  { year: '2021', title: 'Award Recognition', description: 'Received an award for excellence in web development.' },
  { year: '2022', title: 'Global Presence', description: 'Started working with clients from around the world.' },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Journey</h2>
      <div className="container mx-auto">
        <div className="relative">
          <div className="border-r-2 border-blue-500 absolute h-full top-0" style={{ left: '50%' }}></div>
          <ul className="list-none m-0 p-0">
            {timelineEvents.map((event, index) => (
              <li key={index} className="mb-8 flex justify-between items-center w-full">
                <div className={`order-${index % 2 === 0 ? '1' : '2'} w-5/12`}></div>
                <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">{event.year}</h1>
                </div>
                <div className={`order-${index % 2 === 0 ? '2' : '1'} bg-blue-500 rounded-lg shadow-xl w-5/12 px-6 py-4`}>
                  <h3 className="mb-2 font-bold text-white text-xl">{event.title}</h3>
                  <p className="text-white">{event.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
