import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Racing Stripe Tee",
      price: 49.99,
      image: "/lovable-uploads/13689286-fdf9-4151-af15-30bdd2e7ddab.png",
      quantity: 2
    },
    {
      id: "2",
      name: "Velocity T-Shirt",
      price: 54.99,
      image: "/lovable-uploads/13689286-fdf9-4151-af15-30bdd2e7ddab.png",
      quantity: 1
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Shopping Cart</h1>
          <p className="text-xl text-muted-foreground">Review your racing gear</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h3>
            <p className="text-muted-foreground mb-8">Add some racing gear to get started!</p>
            <Button variant="racing" size="lg">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Cart Items */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-card rounded-lg p-6 shadow-lg">
                  <div className="flex items-center space-x-6">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                      <p className="text-racing-red font-bold">${item.price}</p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <Button 
                        variant="racing-outline" 
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="racing-outline" 
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Remove Button */}
                    <Button 
                      variant="destructive" 
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-foreground">Subtotal:</span>
                  <span className="font-bold text-racing-red">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-foreground">Shipping:</span>
                  <span className="text-muted-foreground">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-xl">
                    <span className="font-bold text-foreground">Total:</span>
                    <span className="font-bold text-racing-red">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Button variant="racing" size="lg" className="w-full mt-6">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};