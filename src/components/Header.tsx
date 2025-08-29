import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-brand-rose">redēm</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-brand-rose transition-colors">About</a>
            <a href="#products" className="text-foreground hover:text-brand-rose transition-colors">Products</a>
            <a href="#ingredients" className="text-foreground hover:text-brand-rose transition-colors">Ingredients</a>
            <a href="#sustainability" className="text-foreground hover:text-brand-rose transition-colors">Sustainability</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative hover:bg-brand-rose-light/50">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-4 w-4 bg-brand-rose text-white text-xs rounded-full flex items-center justify-center">0</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:bg-brand-rose-light/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-border">
            <a href="#about" className="block px-2 py-2 text-foreground hover:text-brand-rose transition-colors">About</a>
            <a href="#products" className="block px-2 py-2 text-foreground hover:text-brand-rose transition-colors">Products</a>
            <a href="#ingredients" className="block px-2 py-2 text-foreground hover:text-brand-rose transition-colors">Ingredients</a>
            <a href="#sustainability" className="block px-2 py-2 text-foreground hover:text-brand-rose transition-colors">Sustainability</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;