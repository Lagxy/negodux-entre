import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Award, Briefcase, GraduationCap, Target } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const mentorData = [
  {
    id: 1,
    name: "Budi Santoso",
    title: "Supply Chain Expert",
    expertise: "Supply Chain",
    experience: "15+ years in logistics and distribution",
    email: "budi.santoso@example.com",
    image: "/placeholder.svg",
    bio: "Seasoned supply chain professional with extensive experience in optimizing logistics operations for Indonesian SMEs. Specialized in distribution network design and inventory management systems.",
    education: "MBA in Operations Management, Universitas Indonesia",
    specializations: [
      "Logistics Optimization",
      "Distribution Network Design",
      "Inventory Management",
      "Vendor Relationship Management",
      "Cost Reduction Strategies"
    ],
    achievements: [
      "Reduced distribution costs by 30% for 20+ SME clients",
      "Implemented supply chain systems for 50+ businesses",
      "Published research on Indonesian SME logistics challenges",
      "Consultant for Ministry of Cooperatives and SMEs"
    ],
    portfolio: [
      {
        company: "Kopi Bahagia",
        result: "Reduced delivery time by 40% and costs by 25%"
      },
      {
        company: "Snack Indonesia",
        result: "Established nationwide distribution to 100+ retailers"
      },
      {
        company: "Minuman Segar",
        result: "Implemented inventory system reducing waste by 35%"
      }
    ]
  },
  {
    id: 2,
    name: "Dewi Lestari",
    title: "Marketing Strategist",
    expertise: "Marketing",
    experience: "12+ years in digital marketing and branding",
    email: "dewi.lestari@example.com",
    image: "/placeholder.svg",
    bio: "Digital marketing expert passionate about helping traditional Indonesian businesses transition to the digital age. Proven track record in e-commerce growth and social media strategy.",
    education: "Master in Marketing Communication, LSPR Jakarta",
    specializations: [
      "Digital Marketing Strategy",
      "Social Media Management",
      "E-commerce Development",
      "Brand Positioning",
      "Content Marketing"
    ],
    achievements: [
      "Grew online sales by 200%+ for 15 SME clients",
      "Built social media presence for 30+ traditional businesses",
      "Speaker at Indonesia Digital Marketing Summit",
      "Certified Google Digital Marketing Expert"
    ],
    portfolio: [
      {
        company: "Batik Heritage",
        result: "Achieved 500% increase in online sales within 6 months"
      },
      {
        company: "Kerajinan Nusantara",
        result: "Built Instagram following from 0 to 50K in 1 year"
      },
      {
        company: "Fashion Tradisional",
        result: "Launched successful e-commerce platform with $100K revenue"
      }
    ]
  },
  {
    id: 3,
    name: "Ahmad Wijaya",
    title: "Finance Consultant",
    expertise: "Finance",
    experience: "20+ years in financial planning and investment",
    email: "ahmad.wijaya@example.com",
    image: "/placeholder.svg",
    bio: "Experienced financial consultant specializing in SME financial restructuring and growth financing. Expert in helping businesses achieve financial sustainability and attract investors.",
    education: "Bachelor of Economics, Universitas Gadjah Mada; CFA Charter",
    specializations: [
      "Financial Planning & Analysis",
      "Investment Strategy",
      "Business Valuation",
      "Cash Flow Management",
      "Fundraising & Investor Relations"
    ],
    achievements: [
      "Helped 40+ SMEs secure over 50 billion IDR in funding",
      "Restructured finances for 100+ struggling businesses",
      "Advisory board member for 3 successful SME ventures",
      "Published author on SME financial management"
    ],
    portfolio: [
      {
        company: "Manufaktur Jaya",
        result: "Secured 5 billion IDR investment and achieved profitability"
      },
      {
        company: "Retail Modern",
        result: "Restructured finances, improving profit margin by 45%"
      },
      {
        company: "Tech Startup",
        result: "Guided through Series A funding round of 10 billion IDR"
      }
    ]
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    title: "Export Specialist",
    expertise: "International Trade",
    experience: "10+ years in export-import regulations",
    email: "siti.nurhaliza@example.com",
    image: "/placeholder.svg",
    bio: "International trade expert with deep knowledge of export regulations and documentation. Specialized in helping Indonesian SMEs enter global markets with proper compliance.",
    education: "Master in International Business, Universitas Indonesia",
    specializations: [
      "Export Documentation",
      "International Trade Compliance",
      "Market Entry Strategy",
      "Customs & Logistics",
      "International Payment Systems"
    ],
    achievements: [
      "Facilitated 200+ successful international shipments",
      "Helped 25+ SMEs achieve first international export",
      "Consultant for Indonesia Export Authority",
      "Expert in ASEAN trade agreements"
    ],
    portfolio: [
      {
        company: "Furniture Ekspor",
        result: "Successfully entered 5 international markets in 1 year"
      },
      {
        company: "Kerajinan Global",
        result: "Streamlined export process, reducing lead time by 50%"
      },
      {
        company: "Fashion International",
        result: "Secured major contracts with retailers in 3 countries"
      }
    ]
  },
  {
    id: 5,
    name: "Rudi Hartono",
    title: "Operations Manager",
    expertise: "Operations",
    experience: "18+ years in production optimization",
    email: "rudi.hartono@example.com",
    image: "/placeholder.svg",
    bio: "Operations excellence expert focused on improving production efficiency and quality management for manufacturing SMEs. Lean manufacturing and Six Sigma certified.",
    education: "Industrial Engineering, Institut Teknologi Bandung; Six Sigma Black Belt",
    specializations: [
      "Production Optimization",
      "Quality Control Systems",
      "Lean Manufacturing",
      "Process Improvement",
      "Team Training & Development"
    ],
    achievements: [
      "Improved production efficiency by 40%+ for 30 manufacturers",
      "Implemented quality systems reducing defects by 60%",
      "Trained 500+ workers in lean manufacturing",
      "Indonesia Manufacturing Excellence Award Winner"
    ],
    portfolio: [
      {
        company: "Produksi Efisien",
        result: "Reduced production costs by 35% while improving quality"
      },
      {
        company: "Manufaktur Berkualitas",
        result: "Achieved ISO 9001 certification and increased output by 50%"
      },
      {
        company: "Pabrik Modern",
        result: "Implemented lean system, doubling production capacity"
      }
    ]
  },
  {
    id: 6,
    name: "Linda Kusuma",
    title: "Branding Expert",
    expertise: "Branding",
    experience: "14+ years in brand development and design",
    email: "linda.kusuma@example.com",
    image: "/placeholder.svg",
    bio: "Creative branding specialist helping traditional Indonesian businesses modernize their brand identity while preserving cultural authenticity. Expert in packaging design and brand strategy.",
    education: "Bachelor of Design, Institut Seni Indonesia; Master in Brand Management",
    specializations: [
      "Brand Identity Development",
      "Packaging Design",
      "Visual Communication",
      "Brand Positioning",
      "Market Differentiation"
    ],
    achievements: [
      "Rebranded 45+ traditional businesses successfully",
      "Award-winning packaging designs for Indonesian products",
      "Featured in Design Indonesia Magazine",
      "Mentor at Creative Industries Incubator"
    ],
    portfolio: [
      {
        company: "Produk Tradisional",
        result: "Complete rebrand resulting in 150% sales increase"
      },
      {
        company: "Makanan Heritage",
        result: "Modern packaging design winning 3 design awards"
      },
      {
        company: "Kosmetik Alami",
        result: "Brand refresh securing shelf space in major retailers"
      }
    ]
  }
];

const MentorDetail = () => {
  const { id } = useParams();
  const mentor = mentorData.find(m => m.id === parseInt(id || ""));

  if (!mentor) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Mentor Not Found</h1>
          <Link to="/mentors">
            <Button>Back to Mentor List</Button>
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
        <Link to="/mentors">
          <Button variant="ghost" className="mb-6">← Back to Mentor List</Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="space-y-4">
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">{mentor.name}</CardTitle>
                    <p className="text-xl text-muted-foreground mb-3">{mentor.title}</p>
                    <div className="flex gap-2 mb-3">
                      <Badge>{mentor.expertise}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{mentor.experience}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <User className="h-5 w-5" />
                    About
                  </h3>
                  <p className="text-muted-foreground">{mentor.bio}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education
                  </h3>
                  <p className="text-muted-foreground">{mentor.education}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specializations.map((spec, index) => (
                      <Badge key={index} variant="secondary">{spec}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {mentor.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Portfolio & Success Stories
                  </h3>
                  <div className="space-y-4">
                    {mentor.portfolio.map((item, index) => (
                      <div key={index} className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1">{item.company}</h4>
                        <p className="text-sm text-muted-foreground">{item.result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground break-all">{mentor.email}</span>
                </div>
                <Button className="w-full" size="lg">
                  Contact Mentor
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Connect with {mentor.name.split(' ')[0]} to discuss how they can help grow your business
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;
