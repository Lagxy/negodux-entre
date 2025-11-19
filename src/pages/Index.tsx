import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, User, Mail } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for UMKM businesses
const umkmData = [
  {
    id: 1,
    name: "Kopi Lestari",
    description: "Traditional coffee shop looking to expand distribution network",
    needs: "Supply chain optimization and distribution strategy",
    reward: "15%",
    category: "F&B"
  },
  {
    id: 2,
    name: "Batik Nusantara",
    description: "Handmade batik producer seeking digital transformation",
    needs: "E-commerce platform and digital marketing",
    reward: "20%",
    category: "Fashion"
  },
  {
    id: 3,
    name: "Furniture Jati",
    description: "Wooden furniture manufacturer needs export guidance",
    needs: "Export documentation and international marketing",
    reward: "12%",
    category: "Manufacturing"
  },
  {
    id: 4,
    name: "Keripik Pedas",
    description: "Spicy chips producer seeking packaging redesign",
    needs: "Branding and packaging design",
    reward: "18%",
    category: "F&B"
  },
  {
    id: 5,
    name: "Sabun Organik",
    description: "Organic soap maker looking for retail partnerships",
    needs: "Retail strategy and partnership development",
    reward: "25%",
    category: "Beauty"
  },
  {
    id: 6,
    name: "Tas Kulit",
    description: "Leather bag craftsman needs quality control system",
    needs: "Quality management and production efficiency",
    reward: "16%",
    category: "Fashion"
  }
];

// Mock data for mentors
const mentorData = [
  {
    id: 1,
    name: "Budi Santoso",
    title: "Supply Chain Expert",
    expertise: "Supply Chain",
    experience: "15+ years in logistics and distribution",
    email: "budi.santoso@example.com"
  },
  {
    id: 2,
    name: "Dewi Lestari",
    title: "Marketing Strategist",
    expertise: "Marketing",
    experience: "12+ years in digital marketing and branding",
    email: "dewi.lestari@example.com"
  },
  {
    id: 3,
    name: "Ahmad Wijaya",
    title: "Finance Consultant",
    expertise: "Finance",
    experience: "20+ years in financial planning and investment",
    email: "ahmad.wijaya@example.com"
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    title: "Export Specialist",
    expertise: "International Trade",
    experience: "10+ years in export-import regulations",
    email: "siti.nurhaliza@example.com"
  },
  {
    id: 5,
    name: "Rudi Hartono",
    title: "Operations Manager",
    expertise: "Operations",
    experience: "18+ years in production optimization",
    email: "rudi.hartono@example.com"
  },
  {
    id: 6,
    name: "Linda Kusuma",
    title: "Branding Expert",
    expertise: "Branding",
    experience: "14+ years in brand development and design",
    email: "linda.kusuma@example.com"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">UMKM Connect</h1>
          <Link to="/auth">
            <Button variant="outline">Login / Register</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* UMKM Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="h-6 w-6" />
            <h2 className="text-3xl font-bold">UMKM Businesses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {umkmData.map((business) => (
              <Card key={business.id} className="hover:shadow-lg transition-shadow">
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
        </section>

        {/* Mentors Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <User className="h-6 w-6" />
            <h2 className="text-3xl font-bold">Professional Mentors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentorData.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{mentor.name}</CardTitle>
                  <CardDescription>{mentor.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <Badge>{mentor.expertise}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{mentor.experience}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span className="text-muted-foreground truncate">{mentor.email}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Contact Mentor
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
