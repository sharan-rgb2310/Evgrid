import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import heroImg from "../images/imge12.jpg";

import service1 from "../images/service-1.png";
import service2 from "../images/service-2.png";
import service3 from "../images/service-3.png";
import service4 from "../images/service-4.png";
import service5 from "../images/service-5.png";
import service6 from "../images/service-6.png";
import service7 from "../images/service-7.png";
import service8 from "../images/service-8.png";
import service9 from "../images/service-9.png";


const services = [
  {
    category: "CHARGING",
    title: "Home Charging",
    desc: "Home is the most popular location to charge an EV, with more than 64% of current owners charging here.",
    image: service1,
    path: "/service/home-charging",
  },
  {
    category: "CORPORATE",
    title: "Residential Premises",
    desc: "Connect your residential charging station to 100% renewable energy with solar panel integration.",
    image: service2,
    path: "/service/residential-premises",
  },
  {
    category: "ECO FUEL",
    title: "Retail & Hospitality",
    desc: "Retailers and hotels are expanding their EV infrastructure to meet growing customer demands.",
    image: service3,
    path: "/service/retail-hospitality",
  },
  {
    category: "ELECTRIC",
    title: "Commercial Area",
    desc: "The future of Electric Commercial Vehicles is a clean alternative to fossil fuel mobility.",
    image: service4,
    path: "/service/commercial-area",
  },
  {
    category: "EV CARS",
    title: "Public Stations",
    desc: "Public charging stations make EVs more convenient for long-distance travel across regions.",
    image: service5,
    path: "/service/public-stations",
  },
  {
    category: "EV STATION",
    title: "E-Commerce",
    desc: "Delivery fleets are transitioning to electric to reduce carbon footprints in urban logistics.",
    image: service6,
    path: "/service/e-commerce",
  },
  {
    category: "SOLAR ENERGY",
    title: "EV Component",
    desc: "Electric vehicles consist of an electric motor powered by a high-efficiency battery pack.",
    image: service7,
    path: "/service/ev-component",
  },
  {
    category: "CORPORATE",
    title: "Potential Buyers",
    desc: "As automakers attempt to find the most profitable strategy for providing extra range.",
    image: service8,
    path: "/service/potential-buyers",
  },
  {
    category: "ELECTRIC",
    title: "Component Battery",
    desc: "Some minerals make up intricate parts within the cell to ensure the efficient flow of energy.",
    image: service9,
    path: "/service/component-battery",
  },
];


export default function Services() {
  return (
    <section className="bg-[#f4f7f6] pt-24 pb-24 font-sans">
      {/* Hero Section */}
      <div className="relative h-87.5 md:h-112.5 overflow-hidden mb-20">
        <img src={heroImg} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 tracking-tight">Services</h1>
          <div className="flex items-center gap-2 text-white/90 text-[16px] font-medium">
            <span className="opacity-70">Evgrid</span>
            <span className="text-sm opacity-40"> &gt; </span>
            <span className="text-[#50c878]">Services</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -12 }} 
              className="relative"
            >
              <NavLink
                to={service.path}
                className="group block bg-white rounded-[45px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] h-full relative overflow-visible transition-all duration-500"
              >
                {/* 1. Category Tag (Fixed Color) */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#50c878]" />
                  <span className="text-[13px] font-extrabold tracking-[0.15em] text-[#50c878] uppercase">
                    {service.category}
                  </span>
                </div>

                {/* 2. Title & Description (Color change removed as requested) */}
                <h3 className="text-[24px] font-bold text-[#0f172a] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[16.5px] leading-relaxed mb-12">
                  {service.desc}
                </p>

                {/* 3. Bottom PNG Icon (Left) */}
                <div className="w-20 h-20 opacity-90 group-hover:opacity-100 transition-opacity">
                  <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                </div>

                {/* 4. The Scooped Notch & Take-Off Arrow Animation */}
                <div className="absolute bottom-0 right-0">
                  <div className="relative bg-[#f4f7f6] w-28.75 h-28.75 rounded-tl-[60px] flex items-center justify-center translate-x-0.5 translate-y-0.5">
                    
                    {/* Corner smoothing fillers for the scoop effect */}
                    <div className="absolute -top-7.5 right-0 w-7.5 h-7.5 bg-white rounded-br-[30px] shadow-[8px_8px_0_8px_#f4f7f6]" />
                    <div className="absolute bottom-0 -left-7.5 w-7.5 h-7.5 bg-white rounded-br-[30px] shadow-[8px_8px_0_8px_#f4f7f6]" />

                    {/* Button with Take-Off Animation */}
                    <div className="w-17 h-17 bg-[#50c878] rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-[#0f172a]">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Outgoing Dark Arrow */}
                        <ArrowUpRight 
                          className="text-[#0f172a] absolute transition-all duration-300 group-hover:translate-x-12 group-hover:-translate-y-12" 
                          size={30} 
                          strokeWidth={2.5} 
                        />
                        {/* Incoming Green Arrow */}
                        <ArrowUpRight 
                          className="text-[#50c878] absolute -translate-x-12 translate-y-12 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0" 
                          size={30} 
                          strokeWidth={2.5} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}