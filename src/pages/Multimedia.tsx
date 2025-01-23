import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Headphones, Image } from "lucide-react";

const MultimediaPage = () => {
  const stories = [
    {
      title: "Displaced, Forgotten, Abandoned: Kairana’s Riot Victims | Article 14",
      type: "video",
      description: "We visited Nahid Colony located on the outskirts of Kairana which consists mostly of riot-affected families who fled the horrors of the Muzaffarnagar riots which took place in 2013.",
      date: "Mar 12, 2022",
      duration: "04:25",
      link:"https://www.youtube.com/watch?v=3h2s4A-eS3g",
    },

    {
      title: "The Food Chain",
      type: "audio",
      description: "Is the food you’re eating what you think it is?         -The Food Chain: A visit to a spice testing lab reveals how fraudsters tamper with food to make money",
      date: "Fri 19 May 2023",
      duration: "04:02",
      link:"https://www.bbc.co.uk/programmes/w3ct4v6p",
    },
   
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-6 w-6" />;
      case "audio":
        return <Headphones className="h-6 w-6" />;
      case "image":
        return <Image className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold mb-8">Multimedia Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {stories.map((story, index) => (
          <a href={story.link} key={index} target="_blank" rel="noopener noreferrer">
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-serif">{story.title}</CardTitle>
                {getIcon(story.type)}
              </div>
              <CardDescription>{story.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-secondary mb-2">{story.description}</p>
              <p className="text-sm text-muted-foreground">{story.duration}</p>
            </CardContent>
          </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MultimediaPage;