import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { User, Mail, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mentorData = [
    {
        id: 1,
        name: "Budi Santoso",
        title: "Supply Chain Expert",
        expertise: "Supply Chain",
        experience: "15+ years in logistics and distribution",
        email: "budi.santoso@example.com",
        image: "/business-mentor-6.png",
        yearsOfExperience: 15,
    },
    {
        id: 2,
        name: "Dewi Lestari",
        title: "Marketing Strategist",
        expertise: "Marketing",
        experience: "12+ years in digital marketing and branding",
        email: "dewi.lestari@example.com",
        image: "/business-mentor-1.png",
        yearsOfExperience: 12,
    },
    {
        id: 3,
        name: "Ahmad Wijaya",
        title: "Finance Consultant",
        expertise: "Finance",
        experience: "20+ years in financial planning and investment",
        email: "ahmad.wijaya@example.com",
        image: "/business-mentor-5.png",
        yearsOfExperience: 20,
    },
    {
        id: 4,
        name: "Siti Nurhaliza",
        title: "Export Specialist",
        expertise: "International Trade",
        experience: "10+ years in export-import regulations",
        email: "siti.nurhaliza@example.com",
        image: "/business-mentor-2.png",
        yearsOfExperience: 10,
    },
    {
        id: 5,
        name: "Rudi Hartono",
        title: "Operations Manager",
        expertise: "Operations",
        experience: "18+ years in production optimization",
        email: "rudi.hartono@example.com",
        image: "/business-mentor-4.png",
        yearsOfExperience: 18,
    },
    {
        id: 6,
        name: "Linda Kusuma",
        title: "Branding Expert",
        expertise: "Branding",
        experience: "14+ years in brand development and design",
        email: "linda.kusuma@example.com",
        image: "/business-mentor-3.png",
        yearsOfExperience: 14,
    },
];

const MentorList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [filterExpertise, setFilterExpertise] = useState("all");

    const expertiseOptions = [
        "all",
        ...Array.from(new Set(mentorData.map((m) => m.expertise))),
    ];

    const filteredAndSortedData = useMemo(() => {
        let result = [...mentorData];

        // Filter by search query
        if (searchQuery) {
            result = result.filter((mentor) =>
                mentor.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by expertise
        if (filterExpertise !== "all") {
            result = result.filter(
                (mentor) => mentor.expertise === filterExpertise
            );
        }

        // Sort by experience
        if (sortBy === "experience-high") {
            result.sort((a, b) => b.yearsOfExperience - a.yearsOfExperience);
        } else if (sortBy === "experience-low") {
            result.sort((a, b) => a.yearsOfExperience - b.yearsOfExperience);
        }

        return result;
    }, [searchQuery, sortBy, filterExpertise]);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <div className="container mx-auto px-4 py-8 flex-1">
                <div className="flex items-center gap-2 mb-6">
                    <User className="h-6 w-6" />
                    <h2 className="text-3xl font-bold">Professional Mentors</h2>
                </div>

                {/* Search and Filters */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by mentor name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger>
                            <SelectValue placeholder="Sort by experience" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="experience-high">
                                Experience: Most to Least
                            </SelectItem>
                            <SelectItem value="experience-low">
                                Experience: Least to Most
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Select
                        value={filterExpertise}
                        onValueChange={setFilterExpertise}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by expertise" />
                        </SelectTrigger>
                        <SelectContent>
                            {expertiseOptions.map((expertise) => (
                                <SelectItem key={expertise} value={expertise}>
                                    {expertise === "all"
                                        ? "All Expertise"
                                        : expertise}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAndSortedData.map((mentor) => (
                        <Card
                            key={mentor.id}
                            className="hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="aspect-video w-full overflow-hidden bg-muted">
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl">
                                    {mentor.name}
                                </CardTitle>
                                <CardDescription>
                                    {mentor.title}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <Badge>{mentor.expertise}</Badge>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            {mentor.experience}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Mail className="h-4 w-4" />
                                        <span className="text-muted-foreground truncate">
                                            {mentor.email}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Link
                                    to={`/mentors/${mentor.id}`}
                                    className="flex-1">
                                    <Button
                                        variant="default"
                                        className="w-full">
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

            <Footer />
        </div>
    );
};

export default MentorList;
