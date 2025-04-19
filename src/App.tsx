import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import About from './components/About';
import CategorySection from './components/CategorySection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <About />
      <CategorySection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;