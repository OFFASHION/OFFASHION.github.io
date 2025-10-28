import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Share2, Truck, Shield, RefreshCcw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate("/shop/women")}>Back to Shop</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addToCart({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Images */}
            <div>
              <div className="aspect-square bg-secondary rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {(product.images || [product.image]).slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-fashion"
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                    {product.category}
                  </p>
                  <h1 className="font-display text-4xl font-bold mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    {product.isNew && (
                      <Badge className="bg-accent text-accent-foreground">NEW</Badge>
                    )}
                    {product.discount && (
                      <Badge variant="destructive">-{product.discount}% OFF</Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-4xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground mb-8">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Select Size</label>
                <div className="grid grid-cols-6 gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <Button key={size} variant="outline">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <label className="text-sm font-medium mb-3 block">Select Color</label>
                <div className="flex gap-3">
                  {["#000", "#fff", "#f00", "#0f0", "#00f"].map((color) => (
                    <button
                      key={color}
                      className="w-10 h-10 rounded-full border-2 border-border hover:scale-110 transition-fashion"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <Button size="lg" className="flex-1 gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4 pt-8 border-t">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-accent" />
                  <span className="text-sm">Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCcw className="h-5 w-5 text-accent" />
                  <span className="text-sm">30 days free returns</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm">Secure payment guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-8">
              <div className="prose max-w-none">
                <h3 className="font-display text-2xl font-bold mb-4">Product Description</h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-8">
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Material</span>
                  <span className="text-muted-foreground">{product.details.material}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Care</span>
                  <span className="text-muted-foreground">{product.details.care}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Origin</span>
                  <span className="text-muted-foreground">{product.details.origin}</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
