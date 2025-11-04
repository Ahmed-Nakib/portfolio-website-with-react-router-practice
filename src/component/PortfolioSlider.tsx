import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero.png",
    title: "Minimal Design",
    category: "POPULAR",
    description: "Detailed description of Project One.",
  },
  {
    id: 2,
    image: "/hero2.png",
    title: "Paint Wall",
    category: "POPULAR",
    description: "Detailed description of Project Two.",
  },
  {
    id: 3,
    image: "/hero3.png",
    title: "Female Light",
    category: "POPULAR",
    description: "Detailed description of Project Three.",
  },
  {
    id: 4,
    image: "/hero.png",
    title: "Lego Tower",
    category: "LATEST",
    description: "Detailed description of Project Four.",
  },
  {
    id: 5,
    image: "/hero2.png",
    title: "Multiply Fowl",
    category: "LATEST",
    description: "Detailed description of Project Five.",
  },
  {
    id: 6,
    image: "/hero3.png",
    title: "Together Sign",
    category: "FOLLOWING",
    description: "Detailed description of Project Six.",
  },
];

const PortfolioSlider = () => {
  const [current, setCurrent] = useState<number>(0);

    useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <Motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === current && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-2xl">
                <h3 className="uppercase text-sm tracking-widest mb-2 text-indigo-300">
                  {slide.category}
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-6">
                  {slide.description}
                </p>
                <button className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition">
                  Go
                </button>
              </div>
            </div>
          )}
        </Motion.div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white shadow-md transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white shadow-md transition"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-indigo-600" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSlider;
