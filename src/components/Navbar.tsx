import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

export const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <nav className="bg-racing-black border-b border-racing-dark-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-racing-red rounded-sm flex items-center justify-center">
              <span className="text-racing-white font-bold text-xl">F1</span>
            </div>
            <span className="text-racing-white font-bold text-xl">RACING</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-racing-white hover:text-racing-red transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-racing-white hover:text-racing-red transition-colors">
              Shop
            </Link>
            <Link to="/cart" className="text-racing-white hover:text-racing-red transition-colors">
              Cart
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-racing-white hover:text-racing-red hover:bg-racing-dark-gray">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="icon" className="text-racing-white hover:text-racing-red hover:bg-racing-dark-gray">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-racing-white hover:text-racing-red hover:bg-racing-dark-gray relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-racing-red text-racing-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};