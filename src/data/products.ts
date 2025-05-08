
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Laptop Pro",
    category: "Electronics",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    description: "The latest high-performance laptop with a stunning display and powerful processor. Perfect for professionals and creatives.",
    featured: true,
    inStock: true
  },
  {
    id: 2,
    name: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description: "Premium noise-canceling headphones with exceptional sound quality and all-day comfort.",
    featured: true,
    inStock: true
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1596162954151-fdcb16858af8?auto=format&fit=crop&w=600&q=80",
    description: "A comfortable and adjustable chair designed for long hours of work with proper lumbar support.",
    inStock: true
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    description: "Track your workouts, heart rate, sleep, and more with this advanced fitness smartwatch.",
    featured: true,
    inStock: true
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    category: "Home",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    description: "A stylish desk lamp with adjustable brightness and color temperature.",
    inStock: true
  },
  {
    id: 6,
    name: "Premium Coffee Maker",
    category: "Kitchen",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1570942872213-1242607a35eb?auto=format&fit=crop&w=600&q=80",
    description: "Brew perfect coffee every time with this programmable coffee maker with built-in grinder.",
    inStock: true
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    category: "Electronics",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80",
    description: "Fast wireless charging for all Qi-enabled devices with sleek, minimalist design.",
    inStock: true
  },
  {
    id: 8,
    name: "Smart Home Speaker",
    category: "Electronics",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?auto=format&fit=crop&w=600&q=80",
    description: "Voice-controlled smart speaker with exceptional sound quality and smart home integration.",
    featured: true,
    inStock: true
  },
  {
    id: 9,
    name: "Premium Backpack",
    category: "Fashion",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    description: "Durable and stylish backpack with multiple compartments, perfect for work or travel.",
    inStock: true
  },
  {
    id: 10,
    name: "Stainless Steel Water Bottle",
    category: "Home",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    description: "Keep your drinks hot or cold for hours with this vacuum-insulated water bottle.",
    inStock: true
  },
  {
    id: 11,
    name: "Modern Standing Desk",
    category: "Furniture",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1605565348518-bef3e7d6fed8?auto=format&fit=crop&w=600&q=80",
    description: "Adjustable height desk that transitions from sitting to standing with the press of a button.",
    inStock: true
  },
  {
    id: 12,
    name: "Smart 4K TV",
    category: "Electronics",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80",
    description: "Crystal clear 4K resolution smart TV with built-in streaming apps and voice control.",
    inStock: false
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(products.map(product => product.category)));
};
