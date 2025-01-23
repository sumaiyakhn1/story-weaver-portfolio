import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Calendar } from "lucide-react";

const DocumentariesPage = () => {
  const documentaries = [
    {
      title: "Fading designs of Bhadohi",
      description: "The ancient legacy of carpet weaving in Uttar Pradesh faces an uncertain future, as this video shows.",
      date: " Dec 9, 2022",
      duration: "10 minutes",
      thumbnail: "/assets/doc_img1.png",
      link:"https://www.youtube.com/watch?v=4hRF4CFS8ww",
    },
    {
      title: "Displaced, Forgotten, Abandoned: Kairana’s Riot Victims | Article 14",
      description: "We visited Nahid Colony located on the outskirts of Kairana which consists mostly of riot-affected families who fled the horrors of the Muzaffarnagar riots which took place in 2013.",
      date: "Mar 12, 2022",
      duration: "4 minutes",
      thumbnail: "/assets/doc_img2.png",
      link:"https://www.youtube.com/watch?v=3h2s4A-eS3g",
    },
    {
      title: "Urdu's Future in India",
      description: "Urdu news readership has witnessed a steady decline after Partition. ",
      date: "Sep 5, 2022",
      duration: "5 minutes",
      thumbnail: "/assets/doc_img3.png",
      link:"https://www.youtube.com/watch?v=ELKkqXpY6ow&t=35s",
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
                <a 
            href={doc.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
                <Play className="h-6 w-6 text-primary cursor-pointer hover:text-accent" />
                </a>
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