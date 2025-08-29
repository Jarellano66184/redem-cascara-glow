import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Droplets, Sparkles, Heart } from "lucide-react";
import productCollection from "@/assets/product-collection.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Cascara Gentle Cleanser",
      description: "A luxurious, sulfate-free cleanser that removes impurities while preserving your skin's natural moisture barrier. Infused with cascara extract and gentle botanicals.",
      price: "$20",
      size: "3 oz",
      rating: 4.8,
      reviews: 1247,
      benefits: ["Removes makeup & impurities", "Maintains pH balance", "Anti-inflammatory properties", "Suitable for all skin types"],
      keyIngredients: ["Cascara Extract", "Aloe Vera", "Chamomile", "Coconut Oil"]
    },
    {
      id: 2,
      name: "Cascara Recovery Moisturizer",
      description: "A deeply nourishing moisturizer that harnesses cascara's antioxidant power to repair and protect skin from environmental stressors while providing 24-hour hydration.",
      price: "$20",
      size: "3 oz",
      rating: 4.9,
      reviews: 892,
      benefits: ["24-hour hydration", "Antioxidant protection", "Reduces fine lines", "Improves skin texture"],
      keyIngredients: ["Cascara Extract", "Hyaluronic Acid", "Jojoba Oil", "Vitamin E"]
    },
    {
      id: 3,
      name: "Cascara Renewal Serum",
      description: "Our most concentrated formula featuring 15% cascara extract. This potent serum brightens, firms, and revitalizes skin while promoting cellular renewal overnight.",
      price: "$20",
      size: "3 oz",
      rating: 4.9,
      reviews: 634,
      benefits: ["Brightens complexion", "Firms skin", "Promotes cell renewal", "Reduces dark spots"],
      keyIngredients: ["15% Cascara Extract", "Niacinamide", "Peptides", "Rose Hip Oil"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-rose text-white">Our Products</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Transform Your Skin with{" "}
            <span className="text-brand-rose">Nature's Power</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each redēm product is carefully crafted with the highest concentration of cascara extract, 
            delivering visible results while supporting sustainable beauty practices.
          </p>
        </div>

        {/* Hero Product Image */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={productCollection} 
              alt="redēm product collection featuring natural skincare with cascara"
              className="w-full rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-rose/10 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={product.id} className={`group hover:shadow-elegant transition-all duration-500 border-2 hover:border-brand-rose-light bg-gradient-product ${index === 1 ? 'lg:scale-105 border-brand-rose-light shadow-product' : ''}`}>
              <CardHeader className="text-center pb-4">
                {index === 1 && (
                  <Badge className="mb-2 bg-brand-rose text-white w-fit mx-auto">Most Popular</Badge>
                )}
                <div className="w-16 h-16 bg-brand-rose-light/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && <Droplets className="w-8 h-8 text-brand-rose" />}
                  {index === 1 && <Heart className="w-8 h-8 text-brand-rose" />}
                  {index === 2 && <Sparkles className="w-8 h-8 text-brand-rose" />}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-rose text-brand-rose' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl font-bold text-brand-rose">{product.price}</span>
                  <span className="text-sm text-muted-foreground">• {product.size}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {product.description}
                </p>
                
                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Key Benefits</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-brand-rose rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Key Ingredients */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Key Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.keyIngredients.map((ingredient, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-brand-rose-light text-brand-rose">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-brand-rose hover:bg-brand-rose-dark text-white group-hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Try redēm Risk-Free
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Not completely satisfied? Return any product within 30 days for a full refund. 
            We're confident you'll love the natural transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-rose hover:bg-brand-rose-dark text-white">
              Shop All Products
            </Button>
            <Button variant="outline" size="lg" className="border-brand-rose text-brand-rose hover:bg-brand-rose hover:text-white">
              Learn More About Our Guarantee
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;