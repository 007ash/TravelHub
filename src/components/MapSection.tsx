import { MapPin, Filter, List, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MapSection = () => {
  return (
    <section id="map" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore on Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualize all available options in your area with our interactive map view.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Map Controls */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="shadow-card">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Filters</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Price Range</label>
                    <div className="flex space-x-2 mt-1">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">$</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">$$</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">$$$</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Rating</label>
                    <div className="flex space-x-2 mt-1">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">4+</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">4.5+</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Distance</label>
                    <div className="flex space-x-2 mt-1">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">0.5mi</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">1mi</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <List className="h-4 w-4 mr-2" />
                    List View
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map Placeholder */}
          <div className="lg:col-span-3">
            <Card className="shadow-card h-[500px] overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  {/* Map placeholder with pins */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5"></div>
                    
                    {/* Sample map pins */}
                    <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-primary text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap">
                        Grand Central Hotel
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-secondary text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap">
                        Premium Parking
                      </div>
                    </div>
                    
                    <div className="absolute top-3/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-accent text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap">
                        Italian Garden
                      </div>
                    </div>
                    
                    {/* Center point indicator */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-foreground rounded-full border-4 border-white shadow-lg"></div>
                      <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap font-medium">
                        Your Location
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-card text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold text-lg mb-2">Interactive Map View</h3>
                        <p className="text-muted-foreground mb-4">Map integration coming soon</p>
                        <Button size="sm">
                          Enable Location
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;