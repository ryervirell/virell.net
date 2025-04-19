import React from 'react';

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Men\'s Collection',
    image: 'https://images.pexels.com/photos/9775889/pexels-photo-9775889.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Women\'s Collection',
    image: 'https://images.pexels.com/photos/9775663/pexels-photo-9775663.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Premium Accessories',
    image: 'https://images.pexels.com/photos/9775673/pexels-photo-9775673.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section id="shop" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">Explore our curated collections for sophisticated individuals.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {categories.map((category) => (
            <div key={category.id} className="relative group overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end p-4 sm:p-8">
                <div className="bg-white py-2 sm:py-3 px-4 sm:px-6 w-full text-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                  <h3 className="text-base sm:text-xl font-medium text-black">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;