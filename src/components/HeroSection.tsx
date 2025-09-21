import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Find Perfect 
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Hotels</span>, 
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"> Parking</span> & More
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover the best accommodations, parking spots, and local services in your area with real-time availability and instant booking.
          </p>
          
          {/* Search Interface */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-card-hover max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Where are you going?" 
                  className="pl-10 h-12"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="date" 
                  className="pl-10 h-12"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="date" 
                  className="pl-10 h-12"
                />
              </div>
            </div>
            <Button size="lg" className="w-full h-12 text-lg">
              <Search className="h-5 w-5 mr-2" />
              Search Now
            </Button>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Use Current Location
            </Button>
            <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Popular Destinations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;