import { Button } from "@/components/ui/button";
import { Building2, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">UMKM Connect</h1>
          <Link to="/auth">
            <Button variant="outline">Login / Register</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Connect UMKM Businesses with Expert Mentors</h2>
          <p className="text-xl text-muted-foreground">
            Discover opportunities to help local businesses grow while earning equity stakes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link to="/umkm">
            <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow cursor-pointer bg-card">
              <Building2 className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">UMKM Businesses</h3>
              <p className="text-muted-foreground mb-4">
                Browse businesses seeking mentorship and support. Help them grow and earn equity stakes.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                View Businesses <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link to="/mentors">
            <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow cursor-pointer bg-card">
              <User className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Professional Mentors</h3>
              <p className="text-muted-foreground mb-4">
                Connect with experienced mentors specializing in various business domains.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                View Mentors <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
