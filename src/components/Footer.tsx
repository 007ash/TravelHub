import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-hero-gradient p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">TravelHub</h3>
            </div>
            <p className="text-white/80">
              Your one-stop destination for hotels, parking, and local services. Making travel simple and convenient.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Find Hotels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book Parking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Local Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Map View</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@travelhub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 TravelHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;