import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const mentorData = [
  {
    id: 1,
    name: "Budi Santoso",
    title: "Supply Chain Expert",
    expertise: "Supply Chain",
    experience: "15+ years in logistics and distribution",
    email: "budi.santoso@example.com",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Dewi Lestari",
    title: "Marketing Strategist",
    expertise: "Marketing",
    experience: "12+ years in digital marketing and branding",
    email: "dewi.lestari@example.com",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Ahmad Wijaya",
    title: "Finance Consultant",
    expertise: "Finance",
    experience: "20+ years in financial planning and investment",
    email: "ahmad.wijaya@example.com",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    title: "Export Specialist",
    expertise: "International Trade",
    experience: "10+ years in export-import regulations",
    email: "siti.nurhaliza@example.com",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Rudi Hartono",
    title: "Operations Manager",
    expertise: "Operations",
    experience: "18+ years in production optimization",
    email: "rudi.hartono@example.com",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Linda Kusuma",
    title: "Branding Expert",
    expertise: "Branding",
    experience: "14+ years in brand development and design",
    email: "linda.kusuma@example.com",
    image: "/placeholder.svg"
  }
];

const MentorList = () => {
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
          <User className="h-6 w-6" />
          <h2 className="text-3xl font-bold">Professional Mentors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorData.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
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
              <CardFooter className="flex gap-2">
                <Link to={`/mentors/${mentor.id}`} className="flex-1">
                  <Button variant="default" className="w-full">
                    View Details
                  </Button>
                </Link>
                <Button variant="outline" className="flex-1">
                  Contact Mentor
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorList;
