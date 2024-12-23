import React from 'react';
import images2 from '../assets/images2.jpg';

function Hero() {
  return (
    <header className="w-full h-2/5 flex flex-col items-center bg-gray-900 text-white py-8 shadow-lg">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center px-8 max-w-6xl">
        <img
          src={images2}
          alt="Briefly Logo"
          className="w-12 object-contain"
        />
        <button
          type="button"
          onClick={() => window.open('https://github.com/Rudra8799')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Github
        </button>
      </nav>

      {/* Hero Section */}
      <div className="mt-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Briefly</h1>
        <h2 className="text-lg leading-relaxed max-w-3xl mx-auto">
        Simplify your reading with <strong>Briefly</strong>—a free article summarizer that turns lengthy content into clear, concise summaries. Stay informed, save time, and focus on what matters most with <strong>Briefly</strong>.
        </h2>
      </div>
    </header>
  );
}

export default Hero;
