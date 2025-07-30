import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import heroImage from "@/assets/hero-racing.jpg";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-racing-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-racing-white mb-6">
            RACE THE
            <span className="block bg-gradient-to-r from-racing-red to-racing-silver bg-clip-text text-transparent">
              FUTURE
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-racing-white/90 mb-8 max-w-2xl mx-auto">
            Premium F1-inspired streetwear for those who live life in the fast lane
          </p>
          <Link to="/products">
            <Button variant="racing" size="lg" className="text-lg px-8 py-4">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
            <p className="text-xl text-muted-foreground">Discover our racing-inspired collections</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="group relative overflow-hidden rounded-lg bg-racing-black aspect-square flex items-center justify-center hover:bg-racing-red transition-colors duration-300"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                />
                {category.active ? (
                  <Link 
                    to={`/category/${category.id}`}
                    className="relative z-10 w-full h-full flex items-center justify-center"
                  >
                    <span className="text-racing-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {category.name}
                    </span>
                  </Link>
                ) : (
                  <div className="relative z-10 w-full h-full flex items-center justify-center opacity-60 cursor-not-allowed">
                    <span className="text-racing-white text-xl font-bold">
                      {category.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Click on "Tees" to explore our first collection</p>
            <Link to="/products">
              <Button variant="racing-outline" size="lg">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};