import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

export const Navbar = () => {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-800/50" 
          : "bg-slate-900/80 backdrop-blur-lg border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-racing-red to-red-700 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <span className="text-white font-bold text-xl leading-none">F1</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-racing-red transition-colors duration-300">RACING</span>
          </Link>

          {/* Primary nav */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive 
                    ? "text-white bg-slate-800/60" 
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive 
                    ? "text-white bg-slate-800/60" 
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive 
                    ? "text-white bg-slate-800/60" 
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`
              }
            >
              Cart
            </NavLink>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative h-10 w-10 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-gradient-to-br from-racing-red to-red-700 text-white text-[10px] font-semibold rounded-full flex items-center justify-center shadow-lg animate-in fade-in zoom-in duration-300">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};