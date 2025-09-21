import { Hotel, Car, MapPin, Star, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceCategories = () => {
  const categories = [
    {
      icon: Hotel,
      title: "Hotels & Accommodations",
      description: "Find perfect stays from luxury hotels to cozy B&Bs",
      features: ["Real-time availability", "Best price guarantee", "Instant booking"],
      count: "2,500+ properties",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Car,
      title: "Smart Parking",
      description: "Reserve parking spots with live availability updates",
      features: ["Live space tracking", "Pre-book parking", "Navigation included"],
      count: "1,200+ locations",
      color: "from-secondary to-accent"
    },
    {
      icon: MapPin,
      title: "Local Services",
      description: "Discover restaurants, attractions, and essential services",
      features: ["Verified reviews", "Local recommendations", "Easy booking"],
      count: "5,000+ services",
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your travel experience with our comprehensive platform offering hotels, parking, and local services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group shadow-card hover:shadow-card-hover transition-all duration-300 border-0 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{category.count}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;