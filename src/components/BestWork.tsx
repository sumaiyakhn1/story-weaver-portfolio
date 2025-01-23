const works = [
  {
    title: "Guns and Power",
    category: "Investigation",
    image: "/assets/bw_img.png",
    link: "/Photo.pdf", // Only the file URL here
  },
  {
    title: "Fading designs of Bhadohi",
    category: "Documentary",
    image: "/assets/doc_img1.png",
    link:"https://www.youtube.com/watch?v=4hRF4CFS8ww",
  },
  {
    title: "How India moved closer to Israel under the Narendra Modi government.", 
    category: "Feature",
    image: "/assets/bw_img2.png",
  },
];

const BestWork = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl mb-12 text-primary text-center">Best Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
             <a
             href={work.link}
             key={index}
             download={work.title} // This sets the filename for the download
             target="_blank"
             rel="noopener noreferrer"
           >
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white/70 text-sm mb-2">{work.category}</p>
                  <h3 className="text-white font-serif text-xl">{work.title}</h3>
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestWork;