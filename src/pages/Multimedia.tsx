import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Headphones, Image } from "lucide-react";

const MultimediaPage = () => {
  const stories = [
    {
      title: "The Urban Development Crisis",
      type: "video",
      description: "A deep dive into urban development challenges in major cities",
      date: "2024-02-15",
      duration: "15:30",
    },
    {
      title: "Voices from the Valley",
      type: "audio",
      description: "Podcast series exploring Silicon Valley's impact on society",
      date: "2024-02-10",
      duration: "25:45",
    },
    {
      title: "Climate Change: Visual Story",
      type: "image",
      description: "Photo essay documenting climate change effects",
      date: "2024-02-05",
      duration: "12 images",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default MultimediaPage;