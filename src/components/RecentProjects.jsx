import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import picture1 from "../images/project1.png";
import picture2 from "../images/project2.png";
import picture3 from "../images/project3.png";

const CARD_WIDTH = 415;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;
const SPEED = 0.5; // px per frame

const projects = [
  { id: 1, tag: "ECO FUEL", title: "Bikes & Cars", img: picture1 },
  { id: 2, tag: "EV CARS", title: "Service & Repair", img: picture2 },
  { id: 3, tag: "ELECTRIC", title: "Build Station", img: picture3 },
  { id: 4, tag: "CORPORATE", title: "Charging Service", img: picture1 },
  { id: 5, tag: "EV STATION", title: "Benefits EV-Car", img: picture2 },
];

export default function RecentProjects() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef(null);

  const totalWidth = STEP * projects.length;

  // Auto scroll using transform
  useEffect(() => {
    const autoScroll = () => {
      setOffset((prev) => {
        let next = prev + SPEED;
        if (next >= totalWidth) next -= totalWidth; // seamless reset
        return next;
      });
      rafRef.current = requestAnimationFrame(autoScroll);
    };

    rafRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Manual scroll buttons
  const scrollByStep = (direction) => {
    setOffset((prev) => {
      let next = direction === "left" ? prev - STEP : prev + STEP;
      if (next >= totalWidth) next -= totalWidth;
      if (next < 0) next += totalWidth;
      return next;
    });
  };

  // duplicate list for seamless effect
  const infiniteProjects = [...projects, ...projects];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="flex items-center gap-2 text-green-600 text-[13px] font-bold tracking-[0.15em] uppercase mb-3">
              <svg
                width="14"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-green-600"
              >
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
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
          ref={containerRef}
          className="relative w-full overflow-hidden"
        >
          <div
            ref={wrapperRef}
            className="flex gap-6"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "transform 0s linear",
            }}
          >
            {infiniteProjects.map((proj, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[415px] h-[500px] rounded-[40px] overflow-hidden group"
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <div className="bg-white rounded-[25px] p-6 shadow-xl translate-y-[120%] group-hover:translate-y-0 transition duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
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
        </div>
      </div>
    </section>
  );
}
