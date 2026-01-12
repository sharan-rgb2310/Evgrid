import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Assuming these are your local assets
import picture1 from "../images/project1.png";
import picture2 from "../images/project2.png";
import picture3 from "../images/project3.png";
import picture4 from "../images/project1.png";
import picture5 from "../images/project2.png";

const projects = [
  { id: 1, tag: "ECO FUEL", title: "Bikes & Cars", img: picture1 },
  { id: 2, tag: "EV CARS", title: "Service & Repair", img: picture2 },
  { id: 3, tag: "ELECTRIC", title: "Build Station", img: picture3 },
  { id: 4, tag: "CORPORATE", title: "Charging Service", img: picture1 },
  { id: 5, tag: "EV STATION", title: "Benefits EV-Car", img: picture2 },
];

export default function RecentProjects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 415 + 24; // Card width + gap
      const scrollTo = direction === "left" 
        ? scrollLeft - cardWidth 
        : scrollLeft + cardWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-330 mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="flex-1">
            <span className="text-green-600 font-bold tracking-[0.15em] uppercase text-[13px] mb-3 block">
              Charging Solution
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-tight">
              Recent projects
            </h2>
          </div>

          <div className="flex items-center gap-8 lg:gap-16">
            <p className="hidden md:block text-gray-500 max-w-105 text-[16px] leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
            
            <div className="flex gap-3">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="relative shrink-0 w-70 md:w-95 lg:w-103.75 h-100 md:h-125 rounded-[40px] overflow-hidden group snap-start"
            >
              {/* Image with Zoom Effect */}
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* White Label Box: Slides up only on hover */}
              <div className="absolute bottom-6 left-6 right-6 z-10 overflow-hidden pointer-events-none">
                <div 
                  className="bg-white rounded-[25px] p-6 md:p-8 shadow-xl 
                             transform translate-y-[110%] group-hover:translate-y-0 
                             transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                >
                  <span className="inline-block text-[11px] font-bold text-green-600 uppercase tracking-widest mb-1">
                    {proj.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                    {proj.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}