
import React from "react";
import Cart from "@/components/Cart";

const CartPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
