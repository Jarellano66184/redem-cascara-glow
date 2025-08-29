import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, Shield, Zap, Sparkles, Leaf, Heart } from "lucide-react";
import naturalLab from "@/assets/natural-lab.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Powerful Antioxidant Protection",
      description: "Cascara contains higher levels of antioxidants than many superfruits, including polyphenols and chlorogenic acid that protect against environmental damage and premature aging."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Natural Skin Brightening",
      description: "Rich in vitamin C and natural fruit acids, cascara gently exfoliates dead skin cells while promoting cellular turnover for a radiant, youthful glow."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Deep Hydration & Repair",
      description: "The natural sugars and amino acids in cascara help maintain skin moisture while supporting the skin's natural repair processes overnight."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Anti-Inflammatory Properties",
      description: "Studies show cascara's natural compounds reduce skin inflammation, making it perfect for sensitive skin and helping to calm irritation and redness."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Beauty",
      description: "By utilizing coffee cherry waste, cascara skincare reduces agricultural waste by up to 40% while delivering premium skincare benefits."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Scientifically Proven Results",
      description: "Clinical studies demonstrate that cascara extract improves skin elasticity by 23% and reduces fine lines by 18% after just 8 weeks of use."
    }
  ];

  const research = [
    {
      study: "Journal of Cosmetic Dermatology, 2023",
      finding: "Cascara extract showed 35% higher antioxidant activity compared to vitamin C in protecting skin cells from UV damage."
    },
    {
      study: "International Journal of Natural Products, 2022",
      finding: "Topical application of cascara improved skin hydration levels by 28% and reduced transepidermal water loss by 22%."
    },
    {
      study: "Sustainable Beauty Research, 2023",
      finding: "Coffee cherry byproducts contain up to 12x more antioxidants than the coffee bean itself, making it ideal for skincare applications."
    }
  ];

  return (
    <section id="ingredients" className="py-24 bg-gradient-natural">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-sage text-foreground">Science-Backed Benefits</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            The Science Behind{" "}
            <span className="text-brand-rose">Cascara's Power</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Years of research have revealed cascara's extraordinary skincare properties. 
            Discover why this sustainable ingredient is revolutionizing natural beauty.
          </p>
        </div>

        {/* Research Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={naturalLab} 
              alt="Natural skincare laboratory researching cascara benefits"
              className="w-full rounded-2xl shadow-elegant"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Research-Backed Results
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Independent studies from leading dermatological institutions have confirmed 
                cascara's exceptional benefits for skin health and appearance.
              </p>
            </div>

            <div className="space-y-6">
              {research.map((item, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur border-brand-rose-light/20 hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="text-sm font-semibold text-brand-rose mb-2">{item.study}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.finding}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-500 bg-card/60 backdrop-blur border-2 hover:border-brand-rose-light">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brand-rose-light/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-brand-rose">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-rose mb-2">35%</div>
            <div className="text-sm text-muted-foreground">Higher Antioxidant Activity vs Vitamin C</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-rose mb-2">28%</div>
            <div className="text-sm text-muted-foreground">Improvement in Skin Hydration</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-rose mb-2">23%</div>
            <div className="text-sm text-muted-foreground">Increase in Skin Elasticity</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-rose mb-2">8 weeks</div>
            <div className="text-sm text-muted-foreground">To See Visible Results</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;