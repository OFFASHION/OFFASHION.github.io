import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "WELCOME TO FASHIONOVA",
    subtitle: "FIRST ORDER PERKS",
    features: ["30 DAYS FREE RETURN", "EXTRA 10% OFF VOUCHER", "FREE SHIPPING"],
    cta: "SHOP NOW",
    link: "/shop/women",
    bg: "fashion-gradient",
  },
  {
    title: "NEW ARRIVALS",
    subtitle: "SPRING COLLECTION 2025",
    features: ["Fresh Styles", "Premium Quality", "Limited Edition"],
    cta: "DISCOVER NOW",
    link: "/shop/women",
    bg: "bg-fashion-rose",
  },
  {
    title: "LUXURY FASHION",
    subtitle: "EXCLUSIVE DESIGNER PIECES",
    features: ["High-End Brands", "Timeless Elegance", "VIP Access"],
    cta: "EXPLORE LUXURY",
    link: "/shop/luxury",
    bg: "bg-primary text-primary-foreground",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } ${slide.bg} flex items-center justify-center`}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-sm tracking-widest mb-2">
              {slide.title}
            </h2>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-8">
              {slide.subtitle}
            </h1>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {slide.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full"
                >
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <Link to={slide.link}>
              <Button size="lg" className="font-semibold">
                {slide.cta}
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-accent" : "w-2 bg-primary/30"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
