const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Negodux. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
