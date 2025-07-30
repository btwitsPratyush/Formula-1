import { useState, useMemo } from "react";
import { Filter, SortAsc, SortDesc, Grid, List, Search } from "lucide-react";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
      
      const matchesPrice = priceFilter === "all" || 
                          (priceFilter === "under50" && product.price < 50) ||
                          (priceFilter === "50to100" && product.price >= 50 && product.price <= 100) ||
                          (priceFilter === "over100" && product.price > 100);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating! - a.rating!;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, sortBy, categoryFilter, priceFilter]);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "tees", label: "T-Shirts & Tops" },
    { value: "jackets", label: "Jackets" },
    { value: "caps", label: "Caps" },
    { value: "accessories", label: "Accessories" },
    { value: "limited", label: "Limited Edition" }
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "under50", label: "Under $50" },
    { value: "50to100", label: "$50 - $100" },
    { value: "over100", label: "Over $100" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-racing-black via-racing-dark-gray to-racing-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-racing-white mb-4 animate-fade-in">
            Racing Collection
          </h1>
          <p className="text-xl text-racing-white/80 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Premium F1-inspired streetwear for champions
          </p>
          <div className="flex justify-center items-center gap-4 text-racing-white/60 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <span>{products.length} Products</span>
            <span>•</span>
            <span>Free Shipping Over $75</span>
            <span>•</span>
            <span>30-Day Returns</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 w-full text-lg rounded-xl border-2 focus:border-racing-red"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Filters:</span>
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(range => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Best Rated</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>

            {(searchQuery || categoryFilter !== "all" || priceFilter !== "all") && (
              <Button 
                variant="racing-outline" 
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("all");
                  setPriceFilter("all");
                }}
                size="sm"
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Active Filters */}
          {(searchQuery || categoryFilter !== "all" || priceFilter !== "all") && (
            <div className="flex flex-wrap gap-2 justify-center">
              {searchQuery && (
                <Badge variant="outline" className="bg-racing-red/10 text-racing-red border-racing-red">
                  Search: "{searchQuery}"
                </Badge>
              )}
              {categoryFilter !== "all" && (
                <Badge variant="outline" className="bg-racing-red/10 text-racing-red border-racing-red">
                  {categories.find(c => c.value === categoryFilter)?.label}
                </Badge>
              )}
              {priceFilter !== "all" && (
                <Badge variant="outline" className="bg-racing-red/10 text-racing-red border-racing-red">
                  {priceRanges.find(p => p.value === priceFilter)?.label}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Showing {filteredAndSortedProducts.length} of {products.length} products
          </p>
        </div>
        
        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <ProductGrid products={filteredAndSortedProducts} />
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">No products found</h3>
              <p className="text-muted-foreground mb-6">
                No products match your current filters. Try adjusting your search criteria.
              </p>
              <Button 
                variant="racing" 
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("all");
                  setPriceFilter("all");
                }}
              >
                View All Products
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};