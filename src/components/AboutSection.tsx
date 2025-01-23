import { Button } from "@/components/ui/button";


const AboutSection = () => {
  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/assets/asif.png"
              alt="Asif Khan"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl mb-6 text-primary">About Me</h2>
            <p className="text-secondary text-lg mb-6">
            I am Mohammad Asif Khan, a multimedia journalist and researcher based in New Delhi, reporting on defense, national security, and migration across South Asia.
            <br></br> My work focuses on the human impact of conflict and displacement and has been featured in regional and international outlets. Through video, audio, and written formats, I strive to tell stories that delve into critical issues shaping the region.</p>
            
            <a href="/CV- Mohammad Asif Khan.pdf" download="CV- Mohammad Asif Khan">
  <Button className="bg-accent hover:bg-accent/90">
    Download CV
  </Button>
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;