
import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Button asChild>
          <Link to="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Shopping Cart</h2>
        <Button variant="outline" size="sm" onClick={clearCart}>
          <Trash className="h-4 w-4 mr-2" />
          Clear Cart
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="bg-muted py-3 px-4 grid grid-cols-6 gap-4 font-medium">
          <div className="col-span-3">Product</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Total</div>
        </div>

        {cart.map((item) => (
          <div key={item.id} className="py-4 px-4 border-t grid grid-cols-6 gap-4 items-center">
            <div className="col-span-3 flex items-center gap-4">
              <Link to={`/product/${item.id}`} className="w-16 h-16 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
              </Link>
              <div>
                <Link to={`/product/${item.id}`} className="font-medium hover:text-primary transition-colors">
                  {item.name}
                </Link>
                <div className="text-sm text-muted-foreground">{item.category}</div>
              </div>
            </div>

            <div className="text-center">${item.price.toFixed(2)}</div>

            <div className="flex items-center justify-center">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8" 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                className="h-8 w-12 mx-1 text-center"
              />
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8" 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            <div className="flex items-center justify-end gap-2">
              <div className="font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-muted-foreground hover:text-destructive" 
                onClick={() => removeFromCart(item.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <div className="w-full max-w-md bg-muted rounded-lg p-6">
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span className="font-medium">${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 pb-4 border-b">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold">${getCartTotal().toFixed(2)}</span>
          </div>
          <Button className="w-full">Proceed to Checkout</Button>
          <div className="text-center mt-4">
            <Link to="/products" className="text-primary hover:underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
