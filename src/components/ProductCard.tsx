
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card group bg-white rounded-lg overflow-hidden border shadow-sm">
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-square">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.featured && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
            Featured
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </Link>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm text-muted-foreground">{product.category}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium mb-2 line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <Button 
            size="sm" 
            onClick={(e) => {
              e.preventDefault();
              if (product.inStock) {
                addToCart(product);
              }
            }}
            disabled={!product.inStock}
            variant={product.inStock ? "default" : "outline"}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
