import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/negodux-logo.png";

const Header = () => {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Negodux Logo" className="h-10 w-10 object-contain" />
          <h1 className="text-2xl font-bold">Negodux</h1>
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
  );
};

export default Header;
