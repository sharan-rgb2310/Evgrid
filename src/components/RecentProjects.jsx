import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import picture1 from "../images/project1.png";
import picture2 from "../images/project2.png";
import picture3 from "../images/project3.png";

/* ----------------------------------
   Config
----------------------------------- */
const CARD_WIDTH = 415;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;
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

// duplicated list for infinite illusion
const infiniteProjects = [...projects, ...projects];

/* ----------------------------------
   Component
----------------------------------- */
export default function RecentProjects() {
  const scrollRef = useRef(null);

  /* ----------------------------------
     Scroll helpers
  ----------------------------------- */
  const scrollByStep = (direction = "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const totalWidth = STEP * projects.length;
    const offset = direction === "left" ? -STEP : STEP;

    container.scrollBy({
      left: offset,
      behavior: "smooth",
    });

    // seamless left reset
    if (direction === "left" && container.scrollLeft <= 0) {
      container.scrollLeft += totalWidth;
    }
  };

  /* ----------------------------------
     Auto scroll (infinite)
  ----------------------------------- */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const totalWidth = STEP * projects.length;

    const interval = setInterval(() => {
      container.scrollBy({
        left: STEP,
        behavior: "smooth",
      });

      // invisible reset when reaching midpoint
      if (container.scrollLeft >= totalWidth) {
        setTimeout(() => {
          container.scrollLeft -= totalWidth;
        }, 500);
      }
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
              Recent Projects
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
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {infiniteProjects.map((project, index) => (
            <div
              key={index}
              className="relative shrink-0 w-[415px] h-[500px] rounded-[40px] overflow-hidden group snap-start"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <div className="bg-white rounded-[25px] p-6 shadow-xl translate-y-[120%] group-hover:translate-y-0 transition duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <span className="text-[11px] font-bold text-green-600 tracking-widest uppercase">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hide scrollbar (webkit) */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
