import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Heart, Award } from "lucide-react";
import cascaraBerries from "@/assets/cascara-berries.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-natural">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-sage text-foreground">Our Story</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Beauty Born from{" "}
            <span className="text-brand-rose">Sustainability</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            redēm transforms waste into wonder. We discovered that cascara - the nutrient-rich coffee cherry 
            that surrounds coffee beans - was being discarded despite its incredible skincare properties.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Image */}
          <div className="relative">
            <img 
              src={cascaraBerries} 
              alt="Fresh cascara coffee cherries - the key ingredient in redēm skincare"
              className="w-full rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-rose/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                The Power of Cascara
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cascara is the outer fruit that surrounds coffee beans. Traditionally discarded as waste, 
                we discovered it contains powerful antioxidants, vitamins, and minerals that transform skin health. 
                Our sustainable approach turns agricultural byproducts into luxurious skincare.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="w-6 h-6 text-brand-sage mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Rich in Antioxidants</h4>
                    <p className="text-sm text-muted-foreground">Fights free radicals and environmental damage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-brand-rose mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Natural Hydration</h4>
                    <p className="text-sm text-muted-foreground">Deeply moisturizes without synthetic additives</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Recycle className="w-6 h-6 text-brand-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Zero Waste</h4>
                    <p className="text-sm text-muted-foreground">Repurposes agricultural byproducts sustainably</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center bg-card/50 backdrop-blur border-brand-rose-light/20 hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-brand-rose mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Natural Ingredients</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-card/50 backdrop-blur border-brand-sage/20 hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <Recycle className="w-8 h-8 text-brand-sage mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Pounds Waste Diverted</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-card/50 backdrop-blur border-brand-gold-light/20 hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <Heart className="w-8 h-8 text-brand-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-card/50 backdrop-blur border-brand-rose/20 hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <Leaf className="w-8 h-8 text-brand-rose mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">0</div>
              <div className="text-sm text-muted-foreground">Harmful Chemicals</div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default About;