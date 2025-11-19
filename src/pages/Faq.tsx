import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What is UMKM Connect?",
    answer: "UMKM Connect is a platform that bridges Small and Medium Enterprises (UMKM) with professional business mentors. We help businesses find the expertise they need to grow while offering mentors equity-based opportunities."
  },
  {
    question: "How does the equity reward system work?",
    answer: "When you mentor a UMKM business and help them achieve their goals, you receive an equity stake in their company. The percentage varies by business and is clearly displayed on each listing, typically ranging from 10% to 25%."
  },
  {
    question: "Who can become a mentor?",
    answer: "Any professional with expertise in business areas such as supply chain, marketing, finance, operations, branding, or international trade can register as a mentor. We value experienced professionals who can provide strategic guidance to growing businesses."
  },
  {
    question: "How do I apply to help a UMKM business?",
    answer: "Simply browse the UMKM listings, find a business that matches your expertise, and click 'View Details' to learn more. From there, you can submit your application explaining how you can help them achieve their specific goals."
  },
  {
    question: "What types of businesses are on the platform?",
    answer: "We feature a diverse range of UMKM businesses including food & beverage, fashion, manufacturing, beauty products, and more. Each business has unique needs ranging from digital transformation to export guidance."
  },
  {
    question: "How do I contact a mentor?",
    answer: "Visit the Mentors page, browse through our list of professional mentors, and click 'Contact Mentor' on any profile. You can reach out directly via their provided email to discuss potential collaboration."
  },
  {
    question: "Is there a fee to use the platform?",
    answer: "Registration and browsing are completely free. We believe in fostering connections between businesses and mentors without barriers. The equity arrangements are negotiated directly between parties."
  },
  {
    question: "What kind of support do UMKM businesses need?",
    answer: "Our UMKM businesses seek various types of support including supply chain optimization, e-commerce development, branding and packaging design, export documentation, quality management, and retail strategy development."
  }
];

const Faq = () => {
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

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-2 mb-8">
          <HelpCircle className="h-8 w-8" />
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        </div>
        
        <p className="text-muted-foreground mb-8 text-lg">
          Find answers to common questions about UMKM Connect and how our platform works.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for? Feel free to reach out to our support team.
          </p>
          <Button>Contact Support</Button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
