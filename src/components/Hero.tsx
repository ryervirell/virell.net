import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[100svh] overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/9775889/pexels-photo-9775889.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      {/* Content overlay */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight max-w-3xl leading-tight animate-fade-in px-4">
          Elevate Your Style. Define Your Legacy.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-xl opacity-90 leading-relaxed px-6">
          Welcome to VIRELL — Where sophistication meets contemporary fashion.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto px-6">
          <a 
            href="#collections" 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-black font-medium rounded-none hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
          >
            Explore Collections
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border border-white text-white font-medium rounded-none hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1"
          >
            Our Story
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-0.5 h-6 bg-white opacity-70"></div>
        <div className="mt-2 text-white text-xs font-light tracking-wider opacity-70">SCROLL</div>
      </div>
    </div>
  );
};

export default Hero;