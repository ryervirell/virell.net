import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wool Coat',
    price: '$389',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Tailored Suit Set',
    price: '$649',
    image: 'https://images.pexels.com/photos/9775741/pexels-photo-9775741.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Designer Evening Dress',
    price: '$459',
    image: 'https://images.pexels.com/photos/9775663/pexels-photo-9775663.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    name: 'Luxury Blazer',
    price: '$299',
    image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const FeaturedCollection: React.FC = () => {
  return (
    <section id="collections" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">Discover our premium collection — where luxury meets contemporary style.</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden mb-3 sm:mb-4 aspect-[3/4]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="px-3 sm:px-4 py-2 bg-white text-black text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </span>
                </div>
              </div>
              <h3 className="text-sm sm:text-lg font-medium">{product.name}</h3>
              <p className="text-gray-800 font-medium mt-1 text-sm sm:text-base">{product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 sm:mt-16 text-center">
          <a 
            href="#shop" 
            className="inline-flex items-center text-black font-medium border-b border-black pb-1 hover:border-gray-500 hover:text-gray-700 transition-colors text-sm sm:text-base"
          >
            View All Collection
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;