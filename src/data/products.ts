export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  description: string;
  details: {
    material: string;
    care: string;
    origin: string;
  };
  isNew?: boolean;
  discount?: number;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  // Women's Fashion
  {
    id: "w1",
    name: "Elegant Evening Dress",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
    ],
    category: "Women",
    description: "Elevate your evening wardrobe with this stunning dress. Crafted from premium materials with attention to detail, this piece combines elegance with comfort. Perfect for special occasions and formal events.",
    details: {
      material: "Premium Polyester Blend",
      care: "Machine Washable",
      origin: "Made in Italy",
    },
    isNew: true,
    discount: 31,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#1a1a1a", "#8b4513"],
  },
  {
    id: "w2",
    name: "Classic Blazer",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
    category: "Women",
    description: "A timeless blazer that transitions seamlessly from office to evening. Tailored fit with structured shoulders for a polished silhouette.",
    details: {
      material: "Wool Blend",
      care: "Dry Clean Only",
      origin: "Made in Portugal",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#1a1a2e", "#6a5acd"],
  },
  {
    id: "w3",
    name: "Silk Blouse",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1564257577-2f293038c7b6?w=800&q=80",
    category: "Women",
    description: "Luxurious silk blouse with flowing drape and delicate button details. Perfect for both professional and casual settings.",
    details: {
      material: "100% Silk",
      care: "Hand Wash",
      origin: "Made in France",
    },
    discount: 20,
    sizes: ["XS", "S", "M", "L"],
    colors: ["#ffffff", "#ffc0cb", "#e6e6fa"],
  },
  {
    id: "w4",
    name: "High-Waisted Trousers",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
    category: "Women",
    description: "Sophisticated high-waisted trousers with wide-leg silhouette. Features side pockets and belt loops for versatile styling.",
    details: {
      material: "Cotton Twill",
      care: "Machine Washable",
      origin: "Made in Spain",
    },
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#8b4513", "#2f4f4f"],
  },
  {
    id: "w5",
    name: "Floral Midi Dress",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=800&q=80",
    category: "Women",
    description: "Romantic midi dress with vibrant floral print. Features adjustable waist tie and flowing skirt for effortless elegance.",
    details: {
      material: "Cotton Voile",
      care: "Machine Washable",
      origin: "Made in India",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#ff69b4", "#87ceeb", "#98fb98"],
  },
  {
    id: "w6",
    name: "Leather Jacket",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    category: "Women",
    description: "Edgy leather jacket with asymmetric zip and studded details. A wardrobe staple that adds instant cool to any outfit.",
    details: {
      material: "Genuine Leather",
      care: "Professional Leather Care",
      origin: "Made in Italy",
    },
    discount: 25,
    sizes: ["XS", "S", "M", "L"],
    colors: ["#000000", "#8b4513"],
  },

  // Men's Fashion
  {
    id: "m1",
    name: "Classic Oxford Shirt",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    category: "Men",
    description: "Timeless Oxford shirt crafted from premium cotton. Perfect for both business and casual wear with its versatile styling.",
    details: {
      material: "100% Cotton",
      care: "Machine Washable",
      origin: "Made in USA",
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#87ceeb", "#ffc0cb"],
  },
  {
    id: "m2",
    name: "Slim Fit Chinos",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    category: "Men",
    description: "Modern slim-fit chinos with stretch comfort. Features classic 5-pocket styling and durable construction.",
    details: {
      material: "Cotton Stretch",
      care: "Machine Washable",
      origin: "Made in Bangladesh",
    },
    discount: 20,
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["#d2b48c", "#000080", "#2f4f4f"],
  },
  {
    id: "m3",
    name: "Wool Suit Jacket",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    category: "Men",
    description: "Sophisticated suit jacket in premium wool blend. Tailored fit with notch lapels and functional buttons.",
    details: {
      material: "Wool Blend",
      care: "Dry Clean Only",
      origin: "Made in Italy",
    },
    isNew: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#000080", "#696969", "#000000"],
  },
  {
    id: "m4",
    name: "Casual Polo Shirt",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80",
    category: "Men",
    description: "Classic polo shirt in breathable piqué cotton. Perfect for weekend outings and casual Friday at the office.",
    details: {
      material: "Piqué Cotton",
      care: "Machine Washable",
      origin: "Made in Portugal",
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#000080", "#000000"],
  },
  {
    id: "m5",
    name: "Denim Jacket",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80",
    category: "Men",
    description: "Classic denim jacket with vintage wash. Features button front closure and chest pockets for a timeless look.",
    details: {
      material: "100% Cotton Denim",
      care: "Machine Washable",
      origin: "Made in Turkey",
    },
    discount: 25,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#4682b4", "#2f4f4f"],
  },
  {
    id: "m6",
    name: "Leather Sneakers",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    category: "Men",
    description: "Premium leather sneakers with cushioned sole. Combines comfort with sophisticated style for everyday wear.",
    details: {
      material: "Genuine Leather",
      care: "Wipe Clean",
      origin: "Made in Italy",
    },
    isNew: true,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["#ffffff", "#000000", "#8b4513"],
  },

  // Luxury
  {
    id: "l1",
    name: "Designer Handbag",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    category: "Luxury",
    description: "Exquisite designer handbag crafted from the finest materials. Features signature hardware and luxurious interior lining.",
    details: {
      material: "Premium Leather",
      care: "Professional Care",
      origin: "Made in France",
    },
    isNew: true,
    sizes: ["One Size"],
    colors: ["#000000", "#8b4513", "#dc143c"],
  },
  {
    id: "l2",
    name: "Silk Evening Gown",
    price: 899.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
    category: "Luxury",
    description: "Breathtaking silk evening gown with intricate beading. Red carpet ready with its dramatic silhouette and luxe finish.",
    details: {
      material: "Pure Silk with Beading",
      care: "Dry Clean Only",
      origin: "Made in France",
    },
    discount: 31,
    sizes: ["XS", "S", "M", "L"],
    colors: ["#000000", "#8b0000", "#00008b"],
  },
  {
    id: "l3",
    name: "Cashmere Coat",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    category: "Luxury",
    description: "Ultra-luxurious cashmere coat with timeless design. Features double-breasted front and belted waist.",
    details: {
      material: "100% Cashmere",
      care: "Dry Clean Only",
      origin: "Made in Scotland",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#8b4513", "#000000", "#696969"],
  },
  {
    id: "l4",
    name: "Diamond Watch",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    category: "Luxury",
    description: "Stunning timepiece with diamond-encrusted bezel. Swiss movement ensures precision and reliability.",
    details: {
      material: "Stainless Steel & Diamonds",
      care: "Professional Service",
      origin: "Made in Switzerland",
    },
    isNew: true,
    sizes: ["One Size"],
    colors: ["#c0c0c0", "#ffd700"],
  },

  // Sports
  {
    id: "s1",
    name: "Performance Running Shoes",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    category: "Sports",
    description: "Advanced running shoes with responsive cushioning and breathable mesh upper. Engineered for maximum performance.",
    details: {
      material: "Mesh & Synthetic",
      care: "Wipe Clean",
      origin: "Made in Vietnam",
    },
    isNew: true,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["#000000", "#ffffff", "#ff0000"],
  },
  {
    id: "s2",
    name: "Yoga Leggings",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
    category: "Sports",
    description: "High-performance yoga leggings with four-way stretch. Moisture-wicking fabric keeps you cool and comfortable.",
    details: {
      material: "Performance Fabric",
      care: "Machine Washable",
      origin: "Made in USA",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#4b0082", "#ff1493"],
  },
  {
    id: "s3",
    name: "Sports Jacket",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    category: "Sports",
    description: "Lightweight sports jacket with wind-resistant fabric. Features zippered pockets and adjustable hem.",
    details: {
      material: "Technical Fabric",
      care: "Machine Washable",
      origin: "Made in China",
    },
    discount: 25,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#000000", "#000080", "#ff0000"],
  },
  {
    id: "s4",
    name: "Training Shorts",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80",
    category: "Sports",
    description: "Lightweight training shorts with built-in brief. Quick-dry fabric perfect for intense workouts.",
    details: {
      material: "Performance Polyester",
      care: "Machine Washable",
      origin: "Made in Bangladesh",
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#000000", "#808080", "#0000ff"],
  },

  // Beauty
  {
    id: "b1",
    name: "Luxury Face Cream",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    category: "Beauty",
    description: "Premium anti-aging face cream with natural ingredients. Hydrates and rejuvenates for youthful, glowing skin.",
    details: {
      material: "Natural Ingredients",
      care: "Store in Cool Place",
      origin: "Made in Korea",
    },
    isNew: true,
    sizes: ["50ml"],
    colors: ["#ffffff"],
  },
  {
    id: "b2",
    name: "Professional Makeup Brush Set",
    price: 129.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    category: "Beauty",
    description: "Complete 15-piece makeup brush set with premium synthetic bristles. Includes storage case for travel.",
    details: {
      material: "Synthetic Bristles",
      care: "Clean Regularly",
      origin: "Made in Japan",
    },
    discount: 28,
    sizes: ["Set"],
    colors: ["#000000"],
  },
  {
    id: "b3",
    name: "Luxury Perfume",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    category: "Beauty",
    description: "Sophisticated fragrance with floral and woody notes. Long-lasting scent in elegant glass bottle.",
    details: {
      material: "Eau de Parfum",
      care: "Store Away from Light",
      origin: "Made in France",
    },
    sizes: ["50ml", "100ml"],
    colors: ["#ffd700"],
  },

  // Kids
  {
    id: "k1",
    name: "Kids Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=80",
    category: "Kids",
    description: "Soft cotton t-shirt with fun print. Comfortable fit perfect for active kids.",
    details: {
      material: "100% Cotton",
      care: "Machine Washable",
      origin: "Made in India",
    },
    sizes: ["2T", "3T", "4T", "5T", "6"],
    colors: ["#87ceeb", "#ff69b4", "#ffff00"],
  },
  {
    id: "k2",
    name: "Kids Sneakers",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&q=80",
    category: "Kids",
    description: "Durable sneakers with velcro straps for easy wear. Cushioned sole for all-day comfort.",
    details: {
      material: "Synthetic",
      care: "Wipe Clean",
      origin: "Made in Vietnam",
    },
    isNew: true,
    sizes: ["10", "11", "12", "13", "1", "2", "3"],
    colors: ["#ffffff", "#ff0000", "#0000ff"],
  },
  {
    id: "k3",
    name: "Kids Denim Jacket",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&q=80",
    category: "Kids",
    description: "Classic denim jacket sized for kids. Features button closure and chest pockets.",
    details: {
      material: "Cotton Denim",
      care: "Machine Washable",
      origin: "Made in Turkey",
    },
    discount: 29,
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"],
    colors: ["#4682b4", "#2f4f4f"],
  },
];

export const getProductsByCategory = (category: string) => {
  const categoryLower = category.toLowerCase();
  if (categoryLower === "all") return products;
  return products.filter((p) => p.category.toLowerCase() === categoryLower);
};

export const getProductById = (id: string) => {
  return products.find((p) => p.id === id);
};