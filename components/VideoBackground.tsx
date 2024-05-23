import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/background-video.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Video Background Section</h2>
          <p className="text-xl">Add some compelling text here to capture visitors' attention.</p>
        </div>
      </div>
    </section>
  );
};

export default VideoBackground;
