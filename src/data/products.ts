import tee1 from "@/assets/tee-1.jpg";
import jacket1 from "@/assets/jacket-1.jpg";
import cap1 from "@/assets/cap-1.jpg";
import accessories1 from "@/assets/accessories-1.jpg";
import hoodie1 from "@/assets/hoodie-1.jpg";
import polo1 from "@/assets/polo-1.jpg";
import bomber1 from "@/assets/bomber-1.jpg";
import trackpants1 from "@/assets/trackpants-1.jpg";
import sneakers1 from "@/assets/sneakers-1.jpg";
import watch1 from "@/assets/watch-1.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
  rating?: number;
  reviews?: number;
}

export const categories = [
  { id: "tees", name: "Tees", active: true, image: tee1 },
  { id: "jackets", name: "Jackets", active: false, image: jacket1 },
  { id: "caps", name: "Caps", active: false, image: cap1 },
  { id: "accessories", name: "Accessories", active: false, image: accessories1 },
  { id: "limited", name: "Limited Edition", active: false, image: hoodie1 },
];

export const products: Product[] = [
  // T-Shirts
  {
    id: "1",
    name: "Racing Stripe Tee",
    price: 49.99,
    image: tee1,
    category: "tees",
    description: "Premium cotton t-shirt with iconic racing stripes inspired by F1 champions.",
    featured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Velocity T-Shirt",
    price: 54.99,
    image: tee1,
    category: "tees",
    description: "Lightweight performance tee with moisture-wicking technology.",
    rating: 4.6,
    reviews: 89
  },
  {
    id: "3",
    name: "Championship Tee",
    price: 59.99,
    image: tee1,
    category: "tees",
    description: "Celebrate racing victories with this premium championship design.",
    featured: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: "4",
    name: "Speed Demon Shirt",
    price: 52.99,
    image: tee1,
    category: "tees",
    description: "Bold graphics inspired by the fastest cars on the circuit.",
    rating: 4.5,
    reviews: 73
  },
  {
    id: "5",
    name: "Track Master Tee",
    price: 48.99,
    image: tee1,
    category: "tees",
    description: "Classic fit tee with racing-inspired typography and design.",
    rating: 4.7,
    reviews: 92
  },
  {
    id: "6",
    name: "Pit Crew Shirt",
    price: 55.99,
    image: tee1,
    category: "tees",
    description: "Professional racing team inspired design for true enthusiasts.",
    rating: 4.6,
    reviews: 67
  },
  {
    id: "7",
    name: "Racing Performance Polo",
    price: 74.99,
    image: polo1,
    category: "tees",
    description: "Premium polo shirt with racing collar and performance fabric.",
    featured: true,
    rating: 4.8,
    reviews: 112
  },
  {
    id: "8",
    name: "Speed Racing Hoodie",
    price: 89.99,
    image: hoodie1,
    category: "tees",
    description: "Premium cotton hoodie with racing graphics and comfortable fit.",
    featured: true,
    rating: 4.9,
    reviews: 203
  },

  // Jackets
  {
    id: "9",
    name: "Racing Leather Jacket",
    price: 299.99,
    image: jacket1,
    category: "jackets",
    description: "Premium leather racing jacket with protective padding and racing stripes.",
    featured: true,
    rating: 4.9,
    reviews: 78
  },
  {
    id: "10",
    name: "Speed Bomber Jacket",
    price: 159.99,
    image: bomber1,
    category: "jackets",
    description: "Lightweight bomber jacket with racing-inspired design and premium materials.",
    rating: 4.7,
    reviews: 134
  },

  // Caps
  {
    id: "11",
    name: "Speedster Cap",
    price: 35.99,
    image: cap1,
    category: "caps",
    description: "Adjustable snapback cap with embroidered racing logo.",
    rating: 4.5,
    reviews: 89
  },

  // Accessories
  {
    id: "12",
    name: "Racing Gloves Set",
    price: 89.99,
    image: accessories1,
    category: "accessories",
    description: "Professional racing gloves with grip enhancement and style.",
    rating: 4.8,
    reviews: 56
  },
  {
    id: "13",
    name: "Racing Track Pants",
    price: 79.99,
    image: trackpants1,
    category: "accessories",
    description: "Performance track pants with racing stripes and athletic fit.",
    featured: true,
    rating: 4.7,
    reviews: 98
  },
  {
    id: "14",
    name: "Speed Racing Sneakers",
    price: 149.99,
    image: sneakers1,
    category: "accessories",
    description: "High-performance racing sneakers with advanced grip technology.",
    featured: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: "15",
    name: "Racing Chronograph Watch",
    price: 199.99,
    image: watch1,
    category: "accessories",
    description: "Professional racing watch with chronograph function and premium materials.",
    featured: true,
    rating: 4.9,
    reviews: 234
  },

  // Additional Products for variety
  {
    id: "16",
    name: "Limited Edition Racing Tee",
    price: 69.99,
    image: tee1,
    category: "limited",
    description: "Exclusive limited edition t-shirt celebrating racing heritage.",
    featured: true,
    rating: 5.0,
    reviews: 45
  },
  {
    id: "17",
    name: "Classic Racing Tee",
    price: 44.99,
    image: tee1,
    category: "tees",
    description: "Timeless racing design with vintage-inspired graphics.",
    rating: 4.4,
    reviews: 187
  },
  {
    id: "18",
    name: "Pro Driver Shirt",
    price: 58.99,
    image: tee1,
    category: "tees",
    description: "Professional driver-inspired shirt with technical fabric.",
    rating: 4.6,
    reviews: 123
  }
];

export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};