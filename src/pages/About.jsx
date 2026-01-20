import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Gem, Zap, PhoneCall } from "lucide-react";
import AppCTA from "../components/AppCTA";

/* ================= IMAGES ================= */
import heroImg from "../images/hero-contact.jpg";
import backgroundImg from "../images/background.jpg";
import tab1 from "../images/tab-1.jpg";
import tab2 from "../images/tab-2.jpg";
import tab3 from "../images/tab-3.jpg";

import team1 from "../images/team-01.jpg";
import team2 from "../images/team-02.jpg";

import c1 from "../images/client-1.png";
import c2 from "../images/client-2.png";
import c3 from "../images/client-3.png";
import c4 from "../images/client-4.png";
import c5 from "../images/client-5.png";
import c6 from "../images/client-6.png";
import c7 from "../images/client-7.png";

/* ================= COUNTER ================= */
const Counter = ({ value, suffix = "", title, hash }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const timer = setInterval(() => {
            start += Math.ceil(value / 40);
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 40);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-6xl font-bold mb-4">
        {hash && <span className="text-green-500">#</span>}
        {count}
        <span className="text-green-500">{suffix}</span>
      </h3>
      <p className="text-gray-500 max-w-xs mx-auto">{title}</p>
    </div>
  );
};

/* ================= MAIN ================= */
const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabConfig = {
    mission: {
      image: tab1,
      icon: Target,
      points: [
        "Developing and testing for sustainable energy",
        "Building reliable EV charging infrastructure",
        "Supporting clean energy transition worldwide",
      ],
    },
    vision: {
      image: tab2,
      icon: Eye,
      points: [
        "Future-proof your development with EV solutions",
        "Empowering smart and green mobility",
        "Creating a connected EV ecosystem",
      ],
    },
    value: {
      image: tab3,
      icon: Gem,
      points: [
        "Different EV vehicle categories and manufacturers",
        "Customer-focused innovative solutions",
        "Commitment to sustainability and quality",
      ],
    },
  };

  const brands = [c1, c2, c3, c4, c5, c6, c7];

  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh]">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="About"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-semibold mb-4">About Us</h1>
          <p className="opacity-90">Evgrid › About Us</p>
        </div>
      </section>

      {/* ================= ABOUT / CHARGING SOLUTION ================= */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE SIDE */}
          <div className="relative">
            <img
              src={backgroundImg}
              className="w-full h-[600px]  rounded-[32px]"
              alt="Charging"
            />

            {/* FLOATING OVERFLOW CARD (EXACT UI) */}
            <motion.div
              key={activeTab}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute -bottom-12 right-0 w-[270px] h-[180px] rounded-2xl  shadow-2xl bg-white mb-22"
            >
              {/* IMAGE */}
              <img
                src={tabConfig[activeTab].image}
                className="w-full  h-full object-fit ml-30 "
                alt="Tab"
              />

              {/* ICON INSIDE SAME CARD */}
              <div className="absolute -top-0 -left-0 w-[120px] h-[180px] bg-green-500 rounded-xl flex items-center justify-center shadow-xl   ">
                {React.createElement(tabConfig[activeTab].icon, {
                  size: 40,
                  color: "white",
                })}
              </div>
            </motion.div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-green-600 font-semibold mb-4 block ">
              Smart EV Charging Stations
            </span>

            <h2 className="text-[42px] font-extrabold leading-tight mb-6">
              Charging solutions for all <br /> businesses & EV drivers.
            </h2>

            <p className="text-gray-600 mb-10 max-w-xl">
              We’ve been helping cities, utilities, automakers, EVSE suppliers and
              commercial businesses take advantage of clean energy benefits.
            </p>

            {/* TABS */}
            <div className="flex gap-12 border-b mb-8 ml-20">
              {Object.keys(tabConfig).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-medium capitalize transition ${
                    activeTab === tab
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-500 hover:text-green-600"
                  }`}
                >
                  Our {tab}
                </button>
              ))}
            </div>

            {/* LIST */}
            <ul className="space-y-5 mb-10 ml-20">
              {tabConfig[activeTab].points.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <Zap className="text-green-500 mt-1" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-green-500 hover:bg-green-600 text-white px-9 py-4 rounded-full font-semibold ml-20">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* ================= COUNTERS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <Counter value={1} title="Top leader in worldwide SaaS industry" hash />
          <Counter value={400} suffix="+" title="Cities serviced worldwide" />
          <Counter value={12} suffix="+" title="Years of experience" />
          <Counter value={90} suffix="%" title="Average rating score" />
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-semibold mb-4 block">
              Our Charging Solution
            </span>

            <h2 className="text-[44px] font-extrabold mb-6">
              Award-winning EV solutions
            </h2>

            <p className="text-gray-600 mb-10">
              Smart EV charging solutions for residential, commercial and public
              infrastructure.
            </p>

            <div className="flex items-center gap-4 mt-10">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                <PhoneCall className="text-green-400" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  Do you have any questions?
                </p>
                <p className="text-xl font-bold">1-800-222-000</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 justify-center">
            {[["FOUNDER", "Jane Brown", team1], ["MANAGER", "Becky Linch", team2]].map(
              ([role, name, img], i) => (
                <div key={i} className="relative">
                  <img
                    src={img}
                    alt={name}
                    className="w-[280px] h-[380px] rounded-[32px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-green-400 text-xs tracking-widest">
                      {role}
                    </p>
                    <p className="text-white text-lg font-semibold">{name}</p>
                  </div>
                </div>
              )
            )}
          </div>
          
        </div>
      </section>
         {/* ================= EV BRANDS ================= */}
          <section className="py-28 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="relative mb-20 flex items-center justify-center">
            <h2 className="absolute text-[140px] font-extrabold tracking-widest text-green-100 opacity-60 whitespace-nowrap pointer-events-none select-none">
              electric cars
            </h2>
            <h3 className="relative z-10 text-4xl font-semibold text-green-500">
              ⚡ Compatible EV Brands
            </h3>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -((brands.length - 4) * 280), right: 0 }}
            >
              {brands.map((img, i) => (
                <div
                  key={i}
                  className="min-w-[23%] h-[150px] flex items-center justify-center rounded-3xl shadow-md bg-white grayscale hover:grayscale-0 transition"
                >
                  <img
                    src={img}
                    className="max-h-[85px] pointer-events-none"
                    alt="EV Brand"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <AppCTA />
    </div>
  );
};


export default About;