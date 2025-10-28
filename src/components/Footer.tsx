import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">FASHIONOVA</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Your destination for the latest fashion trends and premium quality clothing.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-fashion">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-fashion">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-fashion">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-fashion">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/shop/women" className="hover:text-accent transition-fashion">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/shop/men" className="hover:text-accent transition-fashion">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/shop/luxury" className="hover:text-accent transition-fashion">
                  Luxury
                </Link>
              </li>
              <li>
                <Link to="/shop/sports" className="hover:text-accent transition-fashion">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/shop/beauty" className="hover:text-accent transition-fashion">
                  Beauty
                </Link>
              </li>
              <li>
                <Link to="/shop/kids" className="hover:text-accent transition-fashion">
                  Kids
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/contact" className="hover:text-accent transition-fashion">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-accent transition-fashion">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-fashion">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/privacy-policy" className="hover:text-accent transition-fashion">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-accent transition-fashion">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-accent transition-fashion">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 FASHIONOVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
