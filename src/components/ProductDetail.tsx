
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(Number(id)) : undefined;
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">We couldn't find the product you're looking for.</p>
        <Button onClick={() => navigate("/products")}>
          Browse All Products
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden border shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="mb-2">
            <span className="text-sm font-medium bg-muted px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="text-2xl font-semibold mb-6">
            ${product.price.toFixed(2)}
          </div>
          
          <p className="text-muted-foreground mb-8">
            {product.description}
          </p>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="flex-1"
              onClick={() => product.inStock && addToCart(product)}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex-1"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
