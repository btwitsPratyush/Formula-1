import { useParams } from "react-router-dom";
import { getProductsByCategory, categories } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";

export const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  if (!categoryId) {
    return <div>Category not found</div>;
  }
  
  const category = categories.find(cat => cat.id === categoryId);
  const products = getProductsByCategory(categoryId);
  
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{category.name}</h1>
          <p className="text-xl text-muted-foreground">Premium racing-inspired {category.name.toLowerCase()}</p>
        </div>
        
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};