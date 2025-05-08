
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="py-12 lg:py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Discover Modern Essentials for Your Lifestyle
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Shop our curated collection of premium products designed to enhance your everyday life with style and functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="px-8">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                alt="Modern laptop with code displayed on screen" 
                className="rounded-lg shadow-lg object-cover w-full max-h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                  <span className="font-medium">Free shipping on orders over $100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
