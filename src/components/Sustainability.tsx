import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Recycle, Leaf, Globe, Users, ArrowRight } from "lucide-react";
import beautyLifestyle from "@/assets/beauty-lifestyle.jpg";

const Sustainability = () => {
  const impactStats = [
    {
      icon: <Recycle className="w-12 h-12" />,
      number: "50,000+",
      label: "Pounds of Coffee Waste Diverted",
      description: "Annually rescued from landfills"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      number: "40%",
      label: "Reduction in Agricultural Waste",
      description: "From our partner coffee farms"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      number: "100%",
      label: "Carbon Neutral Operations",
      description: "Including packaging and shipping"
    },
    {
      icon: <Users className="w-12 h-12" />,
      number: "25",
      label: "Coffee Farming Communities",
      description: "Directly supported worldwide"
    }
  ];

  const sustainabilityFeatures = [
    {
      title: "Circular Beauty Economy",
      description: "We transform what was once waste into premium skincare, creating economic value from agricultural byproducts while reducing environmental impact."
    },
    {
      title: "Direct Fair Trade Partnerships",
      description: "We work directly with coffee farmers, ensuring they receive fair compensation for both their coffee beans and cascara cherries."
    },
    {
      title: "Plastic-Free Packaging",
      description: "Our products come in recyclable glass bottles with biodegradable labels and plastic-free shipping materials."
    },
    {
      title: "Regenerative Agriculture Support",
      description: "We invest 5% of profits back into regenerative farming practices that restore soil health and biodiversity."
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-sage text-foreground">Sustainability</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Beauty that{" "}
            <span className="text-brand-rose">Heals</span>{" "}
            the Planet
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every redēm product represents a commitment to environmental stewardship, 
            social responsibility, and the belief that luxury shouldn't cost the earth.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-500 bg-gradient-natural border-2 hover:border-brand-sage">
              <CardContent className="p-8">
                <div className="text-brand-sage mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={beautyLifestyle} 
              alt="Sustainable beauty lifestyle with redēm natural skincare"
              className="w-full rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-sage/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                From Waste to Wonder
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The coffee industry generates over 6 billion pounds of cherry waste annually. 
                Instead of letting this nutrient-rich byproduct decompose in landfills, 
                we've created a sustainable supply chain that benefits farmers, consumers, and the planet.
              </p>
            </div>

            <div className="space-y-6">
              {sustainabilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-brand-sage rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="bg-brand-sage hover:bg-brand-sage/80 text-foreground group"
              size="lg"
            >
              Read Our Impact Report
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Join the Sustainable Beauty Movement
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every purchase supports sustainable farming, reduces waste, and proves that 
            luxury skincare can be both effective and environmentally responsible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-rose hover:bg-brand-rose-dark text-white">
              Start Your Sustainable Routine
            </Button>
            <Button variant="outline" size="lg" className="border-brand-sage text-brand-sage hover:bg-brand-sage hover:text-foreground">
              Learn About Our Partners
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sustainability;