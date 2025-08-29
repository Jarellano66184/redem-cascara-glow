import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import productHero from "@/assets/product-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-1 text-brand-rose">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-sm font-medium">Loved by 10,000+ customers</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-foreground">Discover</span>{" "}
                <span className="text-brand-rose">redēm</span>
                <br />
                <span className="text-muted-foreground text-2xl lg:text-4xl xl:text-5xl font-normal">
                  Revolutionary Natural Skincare
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Harness the power of cascara - a powerful antioxidant from coffee cherries that would otherwise go to waste. 
                100% natural, sustainable beauty for radiant skin.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-brand-rose hover:bg-brand-rose-dark text-white shadow-elegant group transition-all duration-300 hover:scale-105"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-brand-rose text-brand-rose hover:bg-brand-rose hover:text-white transition-all duration-300"
                >
                  Learn About Cascara
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-sage rounded-full"></div>
                  <span>100% Natural</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-rose rounded-full"></div>
                  <span>Sustainable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span>Cruelty-Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={productHero} 
                alt="redēm natural skincare product with cascara"
                className="w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl drop-shadow-elegant hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-1/4 -left-4 w-20 h-20 bg-brand-rose-light/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/3 -right-8 w-32 h-32 bg-brand-gold-light/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-rose-light/10 to-brand-gold-light/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;