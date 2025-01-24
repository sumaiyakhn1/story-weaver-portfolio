import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

const NewsPage = () => {
  const articles = {
    News_features: [
      {
        title: "Reality bites Bhadohi’s carpets.",
        description: "The ancient legacy of carpet weaving in Uttar Pradesh faces an uncertain future.",
        date: "Pari",
        category: "News_features",
        link:"https://ruralindiaonline.org/en/articles/reality-bites-bhadohis-carpets/",
      },
      {
        title: "“Inside India’s Clubhouse of Islamophobia” | Maktoob Media",
        description: "Clubhouse started as an app for social interaction through live audio, but now it’s a breeding ground for communal hatred and Islamophobia in India.",
        date: "East Monitor",
        category: "News_features",
        link: "https://maktoobmedia.com/opinion/inside-indias-clubhouse-of-islamophobia/"
      },
      {
        title: "Panipat’s historic Kabuli Bagh Masjid lies in ruins",
        description: "The premises of the Mughal-era mosque Kabuli Bagh Masjid in Haryana’s Panipat have been closed for prayers since 1992 when Babri Masjid was demolished by Hindutva groups.",
        date: "Maktoob Media",
        category: "News_features",
        link: "https://maktoobmedia.com/india/panipats-historic-kabuli-bagh-masjid-lies-in-ruins/"
      },
      {
        title: "How Delhi's homeless survive the cold",
        description: "Shaista Bano (37) works at a construction site for a daily wage. Then with her 5 year old child she spends her nights begging and sleeping on the pavement close to the Jamia Millia Islamia University.",
        date: "The Citizen",
        category: "News_features",
        link: "https://www.thecitizen.in/index.php/en/NewsDetail/index/14/21499/Raw-Winter:-Photo-story"
      },

      
    ],
    Defence: [

      {
        title: "A Mixed Bag",
        description: "India’s indigenous UAV development programme has encountered more misses than hits.",
        date: "Force Magazine",
        category: "Defence",
        link:"https://forceindia.net/feature-report/a-mixed-bag/",
      },
     
      {
        title: "Around the World on Wings",
        description: "India to set-up defence wings across the world, says army chief, Gen. Manoj Pande.",
        date: "Force Magazine",
        category: "Defence",
        link:"https://forceindia.net/feature-report/around-the-world-on-wings/",
      },
      {
        title: "Always a Soldier",
        description: "Needs for a more encompassing policy to rehabilitate disabled personnel.",
        date: "Force Magazine",
        category: "Defence",
        link:"https://forceindia.net/feature-report/always-a-soldier/",
      },
      {
        title: "Surveillance Technologies",
        description: "AI in homeland security raises ethical and privacy concerns.",
        date: "Force Magazine",
        category: "Defence",
        link:"https://forceindia.net/feature-report/surveillance-tech/",
      },
      
      {
        title: "Double Whammy in NE",
        description: "Overstretched Assam Rifles, Myanmar coup combine to disturb Northeast’s security & social balance.",
        date: "Force Magazine",
        category: "Defence",
        link:"https://forceindia.net/feature-report/double-whammy-in-ne/",
      },
      {
        title: "Fiddlers in the Capital",
        description: "Deep wounds between Kukis and Meiteis will take at least two generations to heal.",
        date: "Force Magazine",
        category: "Defence",
        link:"https://forceindia.net/cover-story/fiddlers-in-the-capital/",
      },
    ],
    Palestine_reportage: [
      {
        title: "India is the epicentre of hate and misinformation against Palestinians",
        description: "Disinformation and jingoism against Palestinians is becoming widespread on Indian media and social media.",
        date: "MEMO",
        category: "Palestine_reportage",
        link:"https://www.middleeastmonitor.com/20231110-india-is-the-epicentre-of-hate-and-misinformation-against-palestinians/",
      },
     
      {
        title: "Palestine solidarity protests face repression in Modi’s India.",
        description: "Since October 7, there have been protests across India in support of the Palestinians and Israel, with much different responses from authorities.",
        date: "Mondoweiss",
        category: "Palestine_reportage",
        link:"https://mondoweiss.net/2024/01/palestine-solidarity-protests-face-repression-in-modis-india/",
      },
      {
        title: "Palestinians in Gaza are taking to Instagram to show their plight to the world",
        description: "SFirsthand accounts from Palestinians are among the most reliable sources for understanding the genocide in Gaza, drawing significant engagement and inspiring acts of solidarity and support from around the world.",
        date: "AL-Mayadeen",
        category: "Palestine_reportage",
        link:"https://english.almayadeen.net/articles/features/palestinians-in-gaza-are-taking-to-instagram-to-show-their-p",
      },

      {
        title: "Israel plans to replace Palestinian workers with people from India.",
        description: "Amidst Israel's ongoing genocide on Gaza, the Israel Builders Association has urged Prime Minister Benjamin Netanyahu’s far-right coalition government to expedite the process of bringing workers from India to fill the jobs vacated by displaced Palestinians.",
        date: "MEMO",
        category: "Palestine_reportage",
        link:"https://www.middleeastmonitor.com/20231115-israel-plans-to-replace-palestinian-workers-with-people-from-india/",
      },
     
      {
        title: "How India moved closer to Israel under the Narendra Modi government.",
        description: "For decades, New Delhi supported the Palestinian cause. Then it started to shift towards Israel with the rise of Hindu nationalist BJP.",
        date: "TRT WORLD",
        category: "Palestine_reportage",
        link:"https://www.trtworld.com/magazine/how-india-moved-closer-to-israel-under-the-narendra-modi-government-18079835",
      },
      
 
    
     
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold mb-8">News & Op-Eds</h1>
      <Tabs defaultValue="News_features" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="News_features">News_features</TabsTrigger>
          <TabsTrigger value="Defence">Defence</TabsTrigger>
          <TabsTrigger value="Palestine_reportage">PalestineStory</TabsTrigger>
        </TabsList>
        {Object.entries(articles).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((article, index) => (
                <a href={article.link} key={index} target="_blank" rel="noopener noreferrer">
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
                </a>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NewsPage;