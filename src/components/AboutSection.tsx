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
            Mohammad Asif Khan is a Multimedia Journalist based in New Delhi.<br></br>
            I hold a degree in Convergent Journalism from AJK-MCRC, Jamia Millia Islamia, New Delhi. 
            Currently, I work at Force Magazine, focusing on defense news and national security, with a keen interest in South Asia's security issues and cross-border stories.<br></br>

Beyond Force Magazine, I freelance with Indian and international outlets like TRT World, Mondoweiss, Middle East Monitor, BBC World Service, and others. Using video, audio, and written formats, I aim to tell impactful stories that matter.
            </p>
            
            <a href="/assets/cv.pdf" download="CV- Mohammad Asif Khan.pdf">
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