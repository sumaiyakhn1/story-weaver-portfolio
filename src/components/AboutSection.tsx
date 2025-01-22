import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="John Doe"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl mb-6 text-primary">About Me</h2>
            <p className="text-secondary text-lg mb-6">
              Award-winning journalist with over a decade of experience in investigative reporting. 
              Specializing in long-form narratives and multimedia storytelling that brings complex 
              issues to life.
            </p>
            <Button className="bg-accent hover:bg-accent/90">Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;