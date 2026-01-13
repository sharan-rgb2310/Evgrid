import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import picture1 from "../images/project1.png";
import picture2 from "../images/project2.png";
import picture3 from "../images/project3.png";
import picture4 from "../images/project1.png";
import picture5 from "../images/project2.png";

/* ----------------------------------
   Constants
----------------------------------- */
const CARD_WIDTH = 415;
const CARD_GAP = 24;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;
const AUTO_SCROLL_DELAY = 3000;

/* ----------------------------------
   Data
----------------------------------- */
const projects = [
  { id: 1, tag: "ECO FUEL", title: "Bikes & Cars", img: picture1 },
  { id: 2, tag: "EV CARS", title: "Service & Repair", img: picture2 },
  { id: 3, tag: "ELECTRIC", title: "Build Station", img: picture3 },
  { id: 4, tag: "CORPORATE", title: "Charging Service", img: picture1 },
  { id: 5, tag: "EV STATION", title: "Benefits EV-Car", img: picture2 },
];

// duplicate data for infinite effect
const infiniteProjects = [...projects, ...projects];

/* ----------------------------------
   Component
----------------------------------- */
export default function RecentProjects() {
  const scrollRef = useRef(null);
  const scrollPosition = useRef(0);

  /* ----------------------------------
     Scroll handler
  ----------------------------------- */
  const scrollByStep = (direction = "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = SCROLL_STEP * projects.length;

    scrollPosition.current +=
      direction === "left" ? -SCROLL_STEP : SCROLL_STEP;

    // seamless reset (off-screen)
    if (scrollPosition.current < 0) {
      scrollPosition.current = maxScroll - SCROLL_STEP;
      container.scrollLeft = scrollPosition.current;
      return;
    }

    if (scrollPosition.current >= maxScroll) {
      scrollPosition.current = 0;
      container.scrollLeft = 0;
      return;
    }

    container.scrollTo({
      left: scrollPosition.current,
      behavior: "smooth",
    });
  };

  /* ----------------------------------
     Auto scroll
  ----------------------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      scrollByStep("right");
    }, AUTO_SCROLL_DELAY);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="text-green-600 text-[13px] font-bold tracking-[0.15em] uppercase block mb-3">
              Charging Solution
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a]">
              Recent projects
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="hidden md:block max-w-md text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => scrollByStep("left")}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollByStep("right")}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {infiniteProjects.map((proj, index) => (
            <div
              key={index}
              className="relative shrink-0 w-[415px] h-[500px] rounded-[40px] overflow-hidden group snap-start"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <div className="bg-white rounded-[25px] p-6 shadow-xl transform translate-y-[120%] group-hover:translate-y-0 transition duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <span className="text-[11px] font-bold text-green-600 tracking-widest uppercase">
                    {proj.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
                    {proj.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hide scrollbar (webkit) */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

      </div>
    </section>
  );
}
