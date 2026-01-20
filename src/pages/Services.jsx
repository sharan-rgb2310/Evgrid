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
import service9 from "../images/service-1.png";


/* ----------------------------------
   Services Data with PNG Paths
----------------------------------- */

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



/* ----------------------------------
   Animations
----------------------------------- */
const containerVariants = {
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Services() {
  return (
    <section className="bg-[#fcfdfd] pt-22.5">
      {/* Hero Section */}
      <div className="relative h-80 md:h-100 overflow-hidden">
        <img
          src={heroImg}
          alt="Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-[40px] md:text-[56px] font-bold mb-2">
            Services
          </h1>
          <nav className="flex items-center gap-2 text-white text-sm font-medium">
            <span className="opacity-70">Evgrid</span>
            <span className="opacity-70">&gt;</span>
            <span className="text-green-400">Services</span>
          </nav>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <NavLink
                to={service.path}
                className="group relative h-full flex flex-col bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Category Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[12px] font-bold tracking-widest text-gray-500 uppercase">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-10">
                  {service.desc}
                </p>

                {/* Bottom Action Bar */}
                <div className="flex items-end justify-between mt-auto">
                  {/* PNG Image Path Implementation */}
                  <div className="w-20 h-20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }} // Hides broken images
                    />
                  </div>

                  {/* Circular Arrow Button (Moves to bottom right) */}
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-green-500 group-hover:border-green-500">
                    <ArrowUpRight
                      size={20}
                      className="text-gray-600 group-hover:text-white transition-colors"
                    />
                  </div>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}