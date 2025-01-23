import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from '/assets/c_img1.jpeg';
import Image2 from '/assets/c_img2.jpeg';
import Image3 from '/assets/c_img3.jpeg';


const slides = [
  {
    image: Image2,
    title: "Breaking News Investigation",
    description: "Award-winning coverage of local corruption scandal",
  },
  {
    image: Image3,
    title: "Documentary Series",
    description: "Inside the tech revolution changing our world",
  },
  {
    image: Image1,
    title: "Digital Innovation",
    description: "Leading the future of digital journalism",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[60vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
};

export default Carousel;