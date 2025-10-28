import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  discount,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-fashion-medium transition-fashion cursor-pointer">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-fashion duration-500"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-accent text-accent-foreground">NEW</Badge>
            )}
            {discount && (
              <Badge variant="destructive">-{discount}%</Badge>
            )}
          </div>
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-fashion">
            <Button size="icon" variant="secondary" className="rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {category}
        </p>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium mb-2 hover:text-accent transition-fashion">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-bold">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
