import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { RiDoubleQuotesR } from "react-icons/ri";

const reviews = [
  {
    name: "Parsons William",
    role: "CO FOUNDER",
    rating: 5,
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent",
  },
  {
    name: "Ariana Green",
    role: "SATISFIED CLIENT",
    rating: 5,
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent",
  },
  {
    name: "Justin Aria",
    role: "CUSTOMER",
    rating: 5,
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent",
  },
  {
    name: "Hazel Jenkins",
    role: "CEO & FOUNDER",
    rating: 5,
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent",
  },
  {
    name: "Dylan Wang",
    role: "MANAGER",
    rating: 4,
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent",
  },
  {
    name: "Emma Brown",
    role: "CLIENT",
    rating: 5,
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent",
  },
];

// clones for infinite loop
const slides = [
  reviews[reviews.length - 1],
  ...reviews,
  reviews[0],
];

export default function Review() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const [index, setIndex] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  const isDesktop = window.innerWidth >= 1024;
  const cardsPerView = isDesktop ? 3 : 1;
  const slideWidth = 100 / cardsPerView;

  const goTo = (i) => {
    setIsAnimating(true);
    setIndex(i);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay
  useEffect(() => {
    if (!autoPlay) return;

    intervalRef.current = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [index, autoPlay]);

  // infinite reset WITHOUT animation
  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(1);
      }, 1200);
    }

    if (index === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(slides.length - 2);
      }, 1200);
    }
  }, [index]);

  // re-enable animation after jump
  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }
  }, [isAnimating]);

  const manualNav = (dir) => {
    setAutoPlay(false);
    dir === "next" ? next() : prev();
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-green-500 font-medium mb-2">
              <Zap size={16} />
              <span>Feedback</span>
            </div>
            <h2 className="text-4xl font-bold">
              Hear from clients.
            </h2>
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => manualNav("prev")}
              className="w-12 h-12 rounded-full border-2 border-green-500 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => manualNav("next")}
              className="w-12 h-12 rounded-full border-2 border-green-500 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex"
            style={{
              transform: `translateX(-${index * slideWidth}%)`,
              transition: isAnimating
                ? "transform 1.2s ease-in-out"
                : "none",
            }}
          >
            {slides.map((item, i) => (
              <div
                key={i}
                className="w-full lg:w-1/3 shrink-0 px-4"
              >
                <div className="bg-white rounded-3xl p-10 shadow-sm relative">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                    <RiDoubleQuotesR />
                  </div>

                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>
                  <p className="text-green-500 text-sm tracking-widest mt-1">
                    {item.role}
                  </p>

                  <div className="flex gap-1 mt-5">
                    {[...Array(5)].map((_, star) => (
                      <span
                        key={star}
                        className={`text-xl ${
                          star < item.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-gray-700 italic leading-relaxed">
                    “{item.text}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
