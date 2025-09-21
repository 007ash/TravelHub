import { MapPin, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-hero-gradient p-2 rounded-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">TravelHub</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hotels" className="text-foreground hover:text-primary transition-colors">Hotels</a>
            <a href="#parking" className="text-foreground hover:text-primary transition-colors">Parking</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#map" className="text-foreground hover:text-primary transition-colors">Map</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="hidden md:flex">
              Sign Up
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;