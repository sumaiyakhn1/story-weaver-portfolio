import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import BestWork from "@/components/BestWork";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Carousel />
      <AboutSection />
      <BestWork />
    </div>
  );
};

export default Index;