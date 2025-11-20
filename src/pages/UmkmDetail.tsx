import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, User, Mail, Phone, Target } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const umkmData = [
  {
    id: 1,
    name: "Kopi Lestari",
    description: "Traditional coffee shop looking to expand distribution network",
    needs: "Supply chain optimization and distribution strategy",
    reward: "15%",
    category: "F&B",
    image: "/placeholder.svg",
    owner: "Pak Joko Widodo",
    location: "Jakarta Selatan, DKI Jakarta",
    phone: "+62 812-3456-7890",
    email: "kopi.lestari@example.com",
    yearEstablished: "2018",
    employees: "5-10",
    stakeTerms: [
      "Help grow revenue by 10% within 2 months",
      "Establish distribution partnerships with at least 3 new retailers",
      "Implement inventory management system",
      "Provide monthly strategic guidance for 6 months"
    ]
  },
  {
    id: 2,
    name: "Batik Nusantara",
    description: "Handmade batik producer seeking digital transformation",
    needs: "E-commerce platform and digital marketing",
    reward: "20%",
    category: "Fashion",
    image: "/placeholder.svg",
    owner: "Ibu Siti Aminah",
    location: "Yogyakarta, DIY",
    phone: "+62 813-4567-8901",
    email: "batik.nusantara@example.com",
    yearEstablished: "2015",
    employees: "15-20",
    stakeTerms: [
      "Launch functional e-commerce website within 3 months",
      "Achieve 50% increase in online sales within 6 months",
      "Develop social media strategy with 5,000+ followers",
      "Train staff on digital tools and platforms"
    ]
  },
  {
    id: 3,
    name: "Furniture Jati",
    description: "Wooden furniture manufacturer needs export guidance",
    needs: "Export documentation and international marketing",
    reward: "12%",
    category: "Manufacturing",
    image: "/placeholder.svg",
    owner: "Pak Ahmad Suryadi",
    location: "Jepara, Jawa Tengah",
    phone: "+62 814-5678-9012",
    email: "furniture.jati@example.com",
    yearEstablished: "2012",
    employees: "25-30",
    stakeTerms: [
      "Successfully complete first international export within 4 months",
      "Obtain necessary export certifications and documentation",
      "Establish contact with at least 2 international buyers",
      "Implement quality control system for export standards"
    ]
  },
  {
    id: 4,
    name: "Keripik Pedas",
    description: "Spicy chips producer seeking packaging redesign",
    needs: "Branding and packaging design",
    reward: "18%",
    category: "F&B",
    image: "/placeholder.svg",
    owner: "Ibu Ratna Dewi",
    location: "Bandung, Jawa Barat",
    phone: "+62 815-6789-0123",
    email: "keripik.pedas@example.com",
    yearEstablished: "2019",
    employees: "8-12",
    stakeTerms: [
      "Complete brand identity and packaging redesign within 2 months",
      "Increase product visibility in modern retail by 30%",
      "Develop marketing materials and promotional strategy",
      "Secure shelf space in at least 5 major supermarkets"
    ]
  },
  {
    id: 5,
    name: "Sabun Organik",
    description: "Organic soap maker looking for retail partnerships",
    needs: "Retail strategy and partnership development",
    reward: "25%",
    category: "Beauty",
    image: "/placeholder.svg",
    owner: "Ibu Linda Kusuma",
    location: "Bali",
    phone: "+62 816-7890-1234",
    email: "sabun.organik@example.com",
    yearEstablished: "2020",
    employees: "5-8",
    stakeTerms: [
      "Establish retail partnerships with minimum 10 stores within 3 months",
      "Develop wholesale pricing and distribution strategy",
      "Achieve 40% revenue growth from retail channel",
      "Create retail marketing and POS materials"
    ]
  },
  {
    id: 6,
    name: "Tas Kulit",
    description: "Leather bag craftsman needs quality control system",
    needs: "Quality management and production efficiency",
    reward: "16%",
    category: "Fashion",
    image: "/placeholder.svg",
    owner: "Pak Budi Hartono",
    location: "Surabaya, Jawa Timur",
    phone: "+62 817-8901-2345",
    email: "tas.kulit@example.com",
    yearEstablished: "2016",
    employees: "12-15",
    stakeTerms: [
      "Implement quality control system with defect rate below 5%",
      "Increase production efficiency by 20% within 4 months",
      "Train team on quality standards and procedures",
      "Establish supplier quality assurance process"
    ]
  }
];

const UmkmDetail = () => {
  const { id } = useParams();
  const business = umkmData.find(b => b.id === parseInt(id || ""));

  if (!business) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Business Not Found</h1>
          <Link to="/umkm">
            <Button>Back to UMKM List</Button>
          </Link>
        </div>
      </div>
    );
  }

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
        <Link to="/umkm">
          <Button variant="ghost" className="mb-6">← Back to UMKM List</Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="aspect-video w-full overflow-hidden bg-muted rounded-t-lg">
                <img 
                  src={business.image} 
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-3xl">{business.name}</CardTitle>
                  <Badge variant="secondary">{business.category}</Badge>
                </div>
                <p className="text-muted-foreground">{business.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Business Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Owner</p>
                        <p className="font-medium">{business.owner}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-medium">{business.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="font-medium">{business.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="font-medium">{business.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div>
                        <p className="text-xs text-muted-foreground">Established</p>
                        <p className="font-medium">{business.yearEstablished}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div>
                        <p className="text-xs text-muted-foreground">Employees</p>
                        <p className="font-medium">{business.employees}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Advisory Terms & Stake Conditions
                  </h3>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-primary">{business.reward}</span>
                      <span className="text-sm text-muted-foreground">equity stake available</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      To claim the {business.reward} equity stake, mentors must successfully achieve the following milestones:
                    </p>
                    <ul className="space-y-2">
                      {business.stakeTerms.map((term, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary font-bold">✓</span>
                          <span className="text-sm">{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Mentorship Needs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Required Expertise:</p>
                  <p className="text-sm">{business.needs}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Reward Offered:</p>
                  <p className="text-3xl font-bold text-primary">{business.reward}</p>
                  <p className="text-xs text-muted-foreground">equity stake upon completion of terms</p>
                </div>
                <Button className="w-full" size="lg">
                  Apply as Mentor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmkmDetail;
