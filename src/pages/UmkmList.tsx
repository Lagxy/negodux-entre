import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const umkmData = [
  {
    id: 1,
    name: "Kopi Lestari",
    description: "Traditional coffee shop looking to expand distribution network",
    needs: "Supply chain optimization and distribution strategy",
    reward: "15%",
    category: "F&B",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Batik Nusantara",
    description: "Handmade batik producer seeking digital transformation",
    needs: "E-commerce platform and digital marketing",
    reward: "20%",
    category: "Fashion",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Furniture Jati",
    description: "Wooden furniture manufacturer needs export guidance",
    needs: "Export documentation and international marketing",
    reward: "12%",
    category: "Manufacturing",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Keripik Pedas",
    description: "Spicy chips producer seeking packaging redesign",
    needs: "Branding and packaging design",
    reward: "18%",
    category: "F&B",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Sabun Organik",
    description: "Organic soap maker looking for retail partnerships",
    needs: "Retail strategy and partnership development",
    reward: "25%",
    category: "Beauty",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Tas Kulit",
    description: "Leather bag craftsman needs quality control system",
    needs: "Quality management and production efficiency",
    reward: "16%",
    category: "Fashion",
    image: "/placeholder.svg"
  }
];

const UmkmList = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold">UMKM Connect</h1>
          </Link>
          <div className="flex gap-4">
            <Link to="/umkm">
              <Button variant="ghost">UMKM</Button>
            </Link>
            <Link to="/mentors">
              <Button variant="ghost">Mentors</Button>
            </Link>
            <Link to="/faq">
              <Button variant="ghost">FAQ</Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline">Login / Register</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Building2 className="h-6 w-6" />
          <h2 className="text-3xl font-bold">UMKM Businesses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {umkmData.map((business) => (
            <Card key={business.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={business.image} 
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{business.name}</CardTitle>
                  <Badge variant="secondary">{business.category}</Badge>
                </div>
                <CardDescription>{business.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Needs:</p>
                    <p className="text-sm">{business.needs}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Reward:</p>
                    <p className="text-2xl font-bold text-primary">{business.reward}</p>
                    <p className="text-xs text-muted-foreground">equity stake</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UmkmList;
