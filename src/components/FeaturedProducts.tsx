
import React from "react";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";
import ProductGrid from "./ProductGrid";
import { Button } from "@/components/ui/button";

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our hand-picked selection of premium products that stand out for their quality and innovation.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
