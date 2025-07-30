import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shop Collections */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Racing Collections</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Mercedes AMG Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Red Bull Racing Gear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ferrari Streetwear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">McLaren Apparel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Limited Edition Drops</a></li>
            </ul>
          </div>

          {/* Global Shipping */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Worldwide Delivery</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors"> Global Shipping (190+ Countries)</a></li>
              <li><a href="#" className="hover:text-white transition-colors"> Express Delivery 2-5 Days</a></li>
              <li><a href="#" className="hover:text-white transition-colors"> Free Shipping Over $99</a></li>
              <li><a href="#" className="hover:text-white transition-colors"> Track Your Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors"> Easy Returns & Exchanges</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Racing Community</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Size Guide & Fit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">24/7 Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">F1 Style Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Racing Events & News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VIP Member Benefits</a></li>
            </ul>
          </div>

          {/* Connect & Follow */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Join the Grid</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors"> Follow @F1StreetWear</a></li>
              <li><a href="#" className="hover:text-white transition-colors"> Race Day Exclusives</a></li>
              <li><a href="#" className="hover:text-white transition-colors"> Behind the Scenes</a></li>
              <li><a href="#" className="hover:text-white transition-colors"> Customer Spotlights</a></li>
              <li><a href="#" className="hover:text-white transition-colors"> Newsletter (10% Off)</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and tagline */}
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-red-500 mb-1">🏁 F1 Street Wear</div>
              <div className="text-sm text-gray-400">Official Racing Streetwear • Shipped Worldwide</div>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6 pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              &copy; 2025 F1 Street Wear. Made with{' '}
              <span className="text-red-500">❤️</span>{' '}
              by <span className="text-red-500 font-medium">Pratyush</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};