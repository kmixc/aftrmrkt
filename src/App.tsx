import React from 'react';
import logo from './img/logo.png'
import backgroundVideo from './img/background.mp4';

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src={backgroundVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure content visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {/* Logo placeholder - replace CircleIcon with your SVG later */}
        <div className="logo-container">
          <img className='logo' src={logo} alt="AFTRMRKT_LOGO" />
        </div>

        {/* Coming Soon text */}
        <div className="absolute bottom-16 text-gray-200">
          <h1 className="text-4xl bottom-text">coming soon.</h1>
        </div>
      </div>
    </div>
  );
}

export default App;