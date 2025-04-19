import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Join Our Community</h2>
          <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
            Subscribe to our newsletter for early access to new collections, exclusive offers, and style inspiration.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded">
              <p className="text-white text-sm sm:text-base">Thank you for subscribing! We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-gray-400 text-sm sm:text-base"
              />
              <button 
                type="submit"
                className="px-6 sm:px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-300 text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;