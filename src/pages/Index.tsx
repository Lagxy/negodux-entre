import { Button } from "@/components/ui/button";
import { Building2, User, ArrowRight, Target, Handshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Empowering Indonesian SMEs Through Expert Mentorship
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            UMKM Connect bridges the gap between growing businesses and experienced professionals. 
            Help local enterprises thrive while earning equity stakes in promising ventures.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/umkm">
              <Button size="lg">Explore UMKM</Button>
            </Link>
            <Link to="/mentors">
              <Button size="lg" variant="outline">Find Mentors</Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Targeted Matching</h3>
            <p className="text-muted-foreground">
              Connect with businesses that need your specific expertise, from supply chain to digital marketing.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Handshake className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Equity-Based Rewards</h3>
            <p className="text-muted-foreground">
              Earn meaningful equity stakes (10-25%) in businesses you help grow and scale.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <TrendingUp className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
            <p className="text-muted-foreground">
              Work with diverse UMKM sectors including F&B, fashion, manufacturing, and beauty products.
            </p>
          </div>
        </section>

        {/* CTA Sections */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link to="/umkm">
              <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow cursor-pointer bg-card h-full">
                <Building2 className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">For Mentors</h3>
                <p className="text-muted-foreground mb-4">
                  Browse businesses seeking mentorship and support. Apply your expertise to help them overcome challenges and achieve their growth goals.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  View UMKM Businesses <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link to="/mentors">
              <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow cursor-pointer bg-card h-full">
                <User className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">For UMKM Businesses</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with experienced mentors who specialize in various business domains. Get the strategic guidance you need to scale your business.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Find Professional Mentors <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
