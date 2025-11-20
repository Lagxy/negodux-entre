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
import { Building2, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const umkmData = [
    {
        id: 1,
        name: "Kopi Lestari",
        description:
            "Traditional coffee shop looking to expand distribution network",
        needs: "Supply chain optimization and distribution strategy",
        reward: "15%",
        category: "F&B",
        image: "/umkm-6.png",
    },
    {
        id: 2,
        name: "Batik Nusantara",
        description: "Handmade batik producer seeking digital transformation",
        needs: "E-commerce platform and digital marketing",
        reward: "20%",
        category: "Fashion",
        image: "/umkm-5.png",
    },
    {
        id: 3,
        name: "Furniture Jati",
        description: "Wooden furniture manufacturer needs export guidance",
        needs: "Export documentation and international marketing",
        reward: "12%",
        category: "Manufacturing",
        image: "/umkm-4.png",
    },
    {
        id: 4,
        name: "Keripik Pedas",
        description: "Spicy chips producer seeking packaging redesign",
        needs: "Branding and packaging design",
        reward: "18%",
        category: "F&B",
        image: "/umkm-3.png",
    },
    {
        id: 5,
        name: "Sabun Organik",
        description: "Organic soap maker looking for retail partnerships",
        needs: "Retail strategy and partnership development",
        reward: "25%",
        category: "Beauty",
        image: "/umkm-2.png",
    },
    {
        id: 6,
        name: "Tas Kulit",
        description: "Leather bag craftsman needs quality control system",
        needs: "Quality management and production efficiency",
        reward: "16%",
        category: "Fashion",
        image: "/umkm-1.png",
    },
];

const UmkmList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [filterCategory, setFilterCategory] = useState("all");

    const categories = [
        "all",
        ...Array.from(new Set(umkmData.map((b) => b.category))),
    ];

    const filteredAndSortedData = useMemo(() => {
        let result = [...umkmData];

        // Filter by search query
        if (searchQuery) {
            result = result.filter((business) =>
                business.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by category
        if (filterCategory !== "all") {
            result = result.filter(
                (business) => business.category === filterCategory
            );
        }

        // Sort by stake
        if (sortBy === "stake-high") {
            result.sort((a, b) => parseFloat(b.reward) - parseFloat(a.reward));
        } else if (sortBy === "stake-low") {
            result.sort((a, b) => parseFloat(a.reward) - parseFloat(b.reward));
        }

        return result;
    }, [searchQuery, sortBy, filterCategory]);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <div className="container mx-auto px-4 py-8 flex-1">
                <div className="flex items-center gap-2 mb-6">
                    <Building2 className="h-6 w-6" />
                    <h2 className="text-3xl font-bold">UMKM Businesses</h2>
                </div>

                {/* Search and Filters */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by business name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger>
                            <SelectValue placeholder="Sort by stake" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="stake-high">
                                Stake: Highest to Lowest
                            </SelectItem>
                            <SelectItem value="stake-low">
                                Stake: Lowest to Highest
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Select
                        value={filterCategory}
                        onValueChange={setFilterCategory}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category === "all"
                                        ? "All Categories"
                                        : category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAndSortedData.map((business) => (
                        <Card
                            key={business.id}
                            className="hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="aspect-video w-full overflow-hidden bg-muted">
                                <img
                                    src={business.image}
                                    alt={business.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-xl">
                                        {business.name}
                                    </CardTitle>
                                    <Badge variant="secondary">
                                        {business.category}
                                    </Badge>
                                </div>
                                <CardDescription>
                                    {business.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div>
                                        <p className="text-sm font-semibold text-muted-foreground">
                                            Needs:
                                        </p>
                                        <p className="text-sm">
                                            {business.needs}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-muted-foreground">
                                            Reward:
                                        </p>
                                        <p className="text-2xl font-bold text-primary">
                                            {business.reward}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            equity stake
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link
                                    to={`/umkm/${business.id}`}
                                    className="w-full">
                                    <Button className="w-full">
                                        View Details
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default UmkmList;
