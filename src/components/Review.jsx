import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { RiDoubleQuotesR } from "react-icons/ri";

const reviews = [
  { name: "Parsons William", role: "CO FOUNDER", rating: 5, text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent." },
  { name: "Ariana Green", role: "SATISFIED CLIENT", rating: 5, text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent." },
  { name: "Justin Aria", role: "CUSTOMER", rating: 5, text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent." },
  { name: "Hazel Jenkins", role: "CEO & FOUNDER", rating: 5, text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent." },
  { name: "Dylan Wang", role: "MANAGER", rating: 4, text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent." },
  { name: "Emma Brown", role: "CLIENT", rating: 5, text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent." },
];

export default function Review() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  const [isDesktop, setIsDesktop] = useState(false);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Update isDesktop on resize
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const cardsPerView = isDesktop ? 3 : 1;
  const totalSlides = reviews.length;
  const slideWidth = 100 / cardsPerView;
  
  const slides = !isDesktop
    ? [reviews[totalSlides - 1], ...reviews, reviews[0]]
    : [...reviews, reviews[0], reviews[1], reviews[2]];

  /* ---------- INFINITE AUTOPLAY ---------- */
  useEffect(() => {
    if (!isAnimating || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        
        if (nextIndex >= totalSlides) {
          setIsAnimating(false);
          setTimeout(() => {
            setIndex(0);
            requestAnimationFrame(() => setIsAnimating(true));
          }, 50);
          return 0;
        }
        return nextIndex;
      });
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isAnimating, totalSlides]);

  /* ---------- NAVIGATION ---------- */
  const next = () => {
    setIsPaused(true);
    setIndex((p) => {
      const nextIdx = p + 1;
      return nextIdx >= totalSlides ? 0 : nextIdx;
    });
  };

  const prev = () => {
    setIsPaused(true);
    setIndex((p) => {
      const prevIdx = p - 1;
      return prevIdx < 0 ? totalSlides - 1 : prevIdx;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => setIsAnimating(true));
    }
  }, [isAnimating]);

  /* ---------- DRAG ---------- */
  const onStart = (x) => {
    if (isDesktop) return;
    setIsPaused(true);
    isDragging.current = true;
    startX.current = x;
  };

  const onMove = (x) => {
    if (!isDragging.current) return;
    currentX.current = x;
  };

  const onEnd = () => {
    if (!isDragging.current) return;
    const diff = startX.current - currentX.current;

    if (diff > 50) next();
    if (diff < -50) prev();

    isDragging.current = false;
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-green-500 mb-2">
              <Zap size={16} /> Feedback
            </div>
            <h2 className="text-5xl font-bold">Hear from clients.</h2>
          </div>

          {/* Desktop buttons - REMOVED autoplay indicator */}
          <div className="hidden md:flex gap-4 items-center">
            <button 
              onClick={prev} 
              className="w-14 h-14 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next} 
              className="w-14 h-14 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex"
            onTouchStart={(e) => onStart(e.touches[0].clientX)}
            onTouchMove={(e) => onMove(e.touches[0].clientX)}
            onTouchEnd={onEnd}
            onMouseDown={(e) => onStart(e.clientX)}
            onMouseMove={(e) => onMove(e.clientX)}
            onMouseUp={onEnd}
            onMouseLeave={onEnd}
            style={{
              transform: `translateX(-${index * slideWidth}%)`,
              transition: isAnimating ? "transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
              cursor: !isDesktop ? "grab" : "default",
            }}
          >
            {slides.map((item, i) => (
              <div key={i} className="w-full lg:w-1/3 shrink-0 px-4">
                <div className="bg-white p-10 rounded-3xl relative shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <RiDoubleQuotesR size={24} />
                  </div>

                  <h3 className="font-semibold text-xl mb-1 leading-tight">{item.name}</h3>
                  <p className="text-green-500 text-sm font-medium mb-4 uppercase tracking-wide">{item.role}</p>

                  <div className="flex mb-6">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className={s < item.rating ? "text-yellow-400 text-xl" : "text-gray-300 text-xl"}>
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="italic text-black text-lg leading-relaxed font-light">"{item.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
