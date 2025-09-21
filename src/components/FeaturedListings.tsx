import { Star, MapPin, Wifi, Car, Coffee, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      type: "hotel",
      name: "Grand Central Hotel",
      rating: 4.8,
      reviews: 324,
      price: "$149",
      distance: "0.3 miles",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
      amenities: ["Free WiFi", "Parking", "Restaurant"],
      available: true,
      location: "Downtown District"
    },
    {
      id: 2,
      type: "parking",
      name: "Premium Parking Plaza",
      rating: 4.5,
      reviews: 156,
      price: "$12/day",
      distance: "0.1 miles",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      amenities: ["24/7 Security", "EV Charging", "Covered"],
      available: true,
      location: "City Center"
    },
    {
      id: 3,
      type: "hotel",
      name: "Boutique Urban Stay",
      rating: 4.6,
      reviews: 89,
      price: "$89",
      distance: "0.5 miles",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop",
      amenities: ["Free WiFi", "Gym", "Spa"],
      available: true,
      location: "Arts Quarter"
    },
    {
      id: 4,
      type: "service",
      name: "Italian Garden Restaurant",
      rating: 4.9,
      reviews: 567,
      price: "$$-$$$",
      distance: "0.2 miles",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
      amenities: ["Outdoor Seating", "Wine Bar", "Reservation"],
      available: true,
      location: "Historic District"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "hotel": return "bg-primary";
      case "parking": return "bg-secondary";
      case "service": return "bg-accent";
      default: return "bg-muted";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "hotel": return "🏨";
      case "parking": return "🚗";
      case "service": return "🍽️";
      default: return "📍";
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Recommendations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections based on ratings, availability, and user preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="group shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border-0">
              <div className="relative">
                <img 
                  src={listing.image} 
                  alt={listing.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 left-3 ${getTypeColor(listing.type)} text-white`}>
                  {getTypeIcon(listing.type)} {listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}
                </Badge>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{listing.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight">{listing.name}</CardTitle>
                <CardDescription className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{listing.location}</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{listing.distance} away</span>
                    <span className="font-bold text-primary">{listing.price}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{listing.rating}</span>
                    <span>({listing.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {listing.amenities.slice(0, 2).map((amenity, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {listing.amenities.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{listing.amenities.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <Button size="sm" className="w-full">
                    {listing.type === "parking" ? "Reserve Spot" : listing.type === "hotel" ? "Book Now" : "View Details"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;