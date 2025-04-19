import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-16">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/9775889/pexels-photo-9775889.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Fashion atelier" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-black p-6 hidden md:block">
                <p className="text-white font-light tracking-wider text-sm">EST. 2025</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              VIRELL emerged from a passion for creating clothing that embodies both sophistication and contemporary style. Our journey began with a vision to redefine modern fashion through thoughtful design and sustainable practices.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every VIRELL piece is crafted with precision using carefully selected materials from ethical sources. We believe in creating timeless garments that transcend seasons and become lasting additions to your wardrobe.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">Ethical Production</h3>
                <p className="text-gray-600">Crafted by skilled artisans who share our commitment to excellence.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Quality Materials</h3>
                <p className="text-gray-600">Premium fabrics selected for their durability and refined aesthetic.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Timeless Design</h3>
                <p className="text-gray-600">Contemporary styles that maintain their relevance beyond seasonal trends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;