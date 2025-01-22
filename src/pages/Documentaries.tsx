import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Calendar } from "lucide-react";

const DocumentariesPage = () => {
  const documentaries = [
    {
      title: "The Digital Revolution",
      description: "Exploring how technology is reshaping our society",
      date: "2024",
      duration: "45 minutes",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      title: "Urban Stories",
      description: "A look at the changing face of modern cities",
      date: "2023",
      duration: "60 minutes",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      title: "The Future of Work",
      description: "Investigating the transformation of the workplace",
      date: "2023",
      duration: "50 minutes",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold mb-8">Documentaries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentaries.map((doc, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={doc.thumbnail} 
              alt={doc.title} 
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-serif">{doc.title}</CardTitle>
                <Play className="h-6 w-6 text-primary cursor-pointer hover:text-accent" />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <CardDescription>{doc.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-secondary mb-2">{doc.description}</p>
              <p className="text-sm text-muted-foreground">{doc.duration}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocumentariesPage;