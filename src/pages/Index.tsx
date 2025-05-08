
import React from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      
      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Electronics", "Furniture", "Kitchen", "Home"].map((category) => (
              <div key={category} className="bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition-shadow">
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium mb-4">{category}</h3>
                  <Button asChild variant="outline">
                    <Link to={`/products?category=${category}`}>View Products</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Lifestyle?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Browse our full collection of premium products designed to make your life better, simpler, and more stylish.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8">
            <Link to="/products">Shop All Products</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
