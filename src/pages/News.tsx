import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

const NewsPage = () => {
  const articles = {
    politics: [
      {
        title: "The Changing Political Landscape",
        description: "Analysis of recent political shifts and their implications",
        date: "March 15, 2024",
        category: "Politics",
      },
      {
        title: "Democracy in the Digital Age",
        description: "How social media impacts modern democracy",
        date: "March 10, 2024",
        category: "Politics",
      },
    ],
    technology: [
      {
        title: "AI's Impact on Journalism",
        description: "Exploring how AI is transforming news reporting",
        date: "March 12, 2024",
        category: "Technology",
      },
      {
        title: "The Future of Digital Privacy",
        description: "Investigating data protection in the modern era",
        date: "March 8, 2024",
        category: "Technology",
      },
    ],
    environment: [
      {
        title: "Climate Change Solutions",
        description: "Innovative approaches to environmental challenges",
        date: "March 14, 2024",
        category: "Environment",
      },
      {
        title: "Sustainable Cities",
        description: "Urban planning for a greener future",
        date: "March 7, 2024",
        category: "Environment",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold mb-8">News & Op-Eds</h1>
      <Tabs defaultValue="politics" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="politics">Politics</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
          <TabsTrigger value="environment">Environment</TabsTrigger>
        </TabsList>
        {Object.entries(articles).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">{article.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <CardDescription>{article.date}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary">{article.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NewsPage;