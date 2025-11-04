import { useState } from "react";
import { useParams } from "react-router-dom";
import { Search } from "lucide-react";
import { getProductById, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductGrid } from "@/components/ProductGrid";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

export const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useCart();
  const { toast } = useToast();
  
  if (!productId) {
    return <div>Product not found</div>;
  }
  
  const product = getProductById(productId);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  // Filter products based on search query
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show search results instead of product detail when searching
  const showSearchResults = searchQuery.length > 0;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>

        {showSearchResults ? (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-foreground mb-4">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  No items match your search criteria. Try a different search term.
                </p>
                <Button 
                  variant="racing-outline" 
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-card">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-racing-red mb-6">${product.price}</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-4">
                <Button
                  variant="racing"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    addItem(product, 1);
                    toast({
                      title: "Added to cart",
                      description: `${product.name} has been added to your cart.`,
                    });
                  }}
                >
                  Add to Cart
                </Button>
                <Button variant="racing-outline" size="lg" className="w-full">
                  Buy Now
                </Button>
              </div>
              
              <div className="mt-8 space-y-2">
                <p className="text-sm text-muted-foreground">✓ Free shipping on orders over $75</p>
                <p className="text-sm text-muted-foreground">✓ 30-day return policy</p>
                <p className="text-sm text-muted-foreground">✓ Premium quality materials</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};