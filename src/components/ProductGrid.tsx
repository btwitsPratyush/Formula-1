import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div 
          key={product.id} 
          className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-racing transition-all duration-500 transform hover:scale-105 animate-fade-in border border-border hover:border-racing-red/30"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Product Image with Overlay */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
            <Link to={`/product/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay for better interaction */}
              <div className="absolute inset-0 bg-racing-black/0 group-hover:bg-racing-black/20 transition-all duration-300" />
              
              {/* Speed lines animation on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-racing-red to-transparent animate-speed-lines" />
              </div>
            </Link>
            
            {/* Featured Badge */}
            {product.featured && (
              <Badge className="absolute top-3 left-3 bg-racing-red text-racing-white border-0 animate-racing-pulse">
                FEATURED
              </Badge>
            )}
            
            {/* Quick Add to Cart */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
              <Button 
                variant="racing" 
                size="icon"
                className="rounded-full shadow-lg"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="p-6">
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-bold text-foreground group-hover:text-racing-red transition-colors mb-2 line-clamp-1">
                {product.name}
              </h3>
            </Link>
            
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${
                        i < Math.floor(product.rating!) 
                          ? 'fill-racing-red text-racing-red' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            )}
            
            {/* Price and Action */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-racing-red">
                  ${product.price}
                </span>
              </div>
              <Button 
                variant="racing-outline" 
                size="sm"
                className="group-hover:bg-racing-red group-hover:text-racing-white group-hover:border-racing-red transform group-hover:scale-105 transition-all duration-300"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};