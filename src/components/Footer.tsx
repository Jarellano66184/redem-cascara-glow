import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="text-center mb-12 pb-12 border-b border-background/20">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Stay Connected with <span className="text-brand-rose-light">redēm</span>
          </h3>
          <p className="text-background/80 mb-6 max-w-2xl mx-auto">
            Get exclusive access to new product launches, sustainability updates, 
            and skincare tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
            />
            <Button className="bg-brand-rose hover:bg-brand-rose-dark text-white">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-brand-rose-light mb-4">redēm</h2>
              <p className="text-background/80 leading-relaxed">
                Transforming coffee waste into luxurious, sustainable skincare that's good for you and the planet.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-brand-rose-light hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-brand-rose-light hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-brand-rose-light hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-brand-rose-light transition-colors">Cascara Cleanser</a></li>
              <li><a href="#" className="text-background/80 hover:text-brand-rose-light transition-colors">Recovery Moisturizer</a></li>
              <li><a href="#" className="text-background/80 hover:text-brand-rose-light transition-colors">Renewal Serum</a></li>
              <li><a href="#" className="text-background/80 hover:text-brand-rose-light transition-colors">Gift Sets</a></li>
              <li><a href="#" className="text-background/80 hover:text-brand-rose-light transition-colors">Sample Kits</a></li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Learn</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-brand-rose-light transition-colors">About Cascara</a></li>
              <li><a href="#" className="text-background/80 hover:text-brand-rose-light transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-background/80 hover:text-brand-rose-light transition-colors">Our Partners</a></li>
              <li><a href="#" className="text-background/80 hover:text-brand-rose-light transition-colors">Impact Report</a></li>
              <li><a href="#" className="text-background/80 hover:text-brand-rose-light transition-colors">Skincare Guide</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-rose-light" />
                <span className="text-background/80">hello@redeem-beauty.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-rose-light" />
                <span className="text-background/80">1-800-REDEEM-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-rose-light" />
                <span className="text-background/80">Portland, OR</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-background/60 text-sm">
            © 2024 redēm Beauty. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-brand-rose-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-brand-rose-light transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-brand-rose-light transition-colors">Shipping & Returns</a>
            <a href="#" className="text-background/60 hover:text-brand-rose-light transition-colors">FAQ</a>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <div className="flex justify-center items-center space-x-8 text-sm text-background/60">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-brand-sage rounded-full"></div>
              <span>100% Natural</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-brand-rose-light rounded-full"></div>
              <span>Cruelty-Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-brand-gold-light rounded-full"></div>
              <span>Sustainably Sourced</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;