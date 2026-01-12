import { useEffect, useState } from "react";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";


const slides = [
  {
    image: slide1,
    title: "Linking Electric Plans with Dreams",
    desc: "With the help of this guide, you can install an EV home charger and make well-informed selections.",
  },
  {
    image: slide2,
    title: "Powering the Future",
    desc: "Smart electric vehicle charging solutions for modern homes.",
  },
  {
    image: slide3,
    title: "Clean Energy Solutions",
    desc: "Build a sustainable tomorrow with renewable energy.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0); // force re-animation

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [index]);

  const prevSlide = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
    setKey((k) => k + 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
    setKey((k) => k + 1);
  };

  return (
    <section className="pt-20">
      <div className="relative w-full h-[85vh] overflow-hidden rounded-xl mx-auto max-w-7xl">

        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Content */}
        <div
          key={key}
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4"
        >
          <span className="badge-anim bg-white text-green-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Quality Electricity
          </span>

          <h1 className="title-anim text-3xl md:text-5xl font-bold max-w-3xl">
            {slides[index].title}
          </h1>

          <p className="desc-anim mt-4 max-w-xl text-sm md:text-base">
            {slides[index].desc}
          </p>

          <button className="btn-anim mt-6 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900">
            Talk to an expert
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full transition"
        >
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* KEYFRAME ANIMATIONS */}
      <style>
        {`
          @keyframes slideUpFade {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .badge-anim {
            animation: slideUpFade 0.6s ease-out forwards;
          }

          .title-anim {
            animation: slideUpFade 0.8s ease-out forwards;
          }

          .desc-anim {
            animation: slideUpFade 1s ease-out forwards;
          }

          .btn-anim {
            animation: slideUpFade 1.2s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}
