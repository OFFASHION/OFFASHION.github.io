import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Elegant Evening Dress",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
      category: "Women's Dresses",
      isNew: true,
      discount: 31,
    },
    {
      id: "2",
      name: "Classic Leather Jacket",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      category: "Women's Outerwear",
      isNew: true,
    },
    {
      id: "3",
      name: "Summer Floral Dress",
      price: 69.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      category: "Women's Dresses",
      discount: 30,
    },
    {
      id: "4",
      name: "Designer Handbag",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      category: "Accessories",
      isNew: true,
    },
  ];

  const categories = [
    {
      name: "Women",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      link: "/shop/women",
    },
    {
      name: "Men",
      image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80",
      link: "/shop/men",
    },
    {
      name: "Luxury",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      link: "/shop/luxury",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Featured Categories */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground">Discover our curated collections</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.link}
                className="group relative overflow-hidden rounded-lg shadow-fashion-medium hover:shadow-fashion-strong transition-fashion"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-fashion duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-8">
                  <h3 className="font-display text-3xl font-bold text-primary-foreground">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-display text-4xl font-bold mb-4">Featured Products</h2>
                <p className="text-muted-foreground">Handpicked items just for you</p>
              </div>
              <Link to="/shop/women">
                <Button variant="outline" className="gap-2">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <section className="container mx-auto px-4 py-16">
          <div className="fashion-accent-gradient rounded-2xl p-12 text-center text-accent-foreground shadow-fashion-strong">
            <h2 className="font-display text-5xl font-bold mb-4">
              BECOME A VIP MEMBER
            </h2>
            <p className="text-lg mb-8 text-accent-foreground/90">
              Enjoy exclusive perks, early access to sales, and special discounts
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              Join Now <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
