const works = [
  {
    title: "The Hidden Cost",
    category: "Investigation",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Digital Revolution",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    title: "Future of News",
    category: "Feature",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
];

const BestWork = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl mb-12 text-primary text-center">Best Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestWork;