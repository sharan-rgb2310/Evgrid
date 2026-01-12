import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PlugZap, BookOpen } from "lucide-react";
import chargingImg from "../images/slide1.png";

/* ---------- Animated Heading ---------- */
const AnimatedText = ({ text, className, animate }) => {
  const letters = text.split("");

  return (
    <motion.h2
      className={className}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.02 } },
        hidden: {},
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default function ChargingSolutions() {
  const sectionRef = useRef(null);
  const counterRef = useRef(null);

  const sectionInView = useInView(sectionRef, {
    once: true,
    margin: "-120px",
  });

  const counterInView = useInView(counterRef, { once: true });
  const [count, setCount] = useState(0);

  /* ---------- Counter ---------- */
  useEffect(() => {
    if (!counterInView) return;

    let start = 0;
    const end = 235;
    const duration = 1200;
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [counterInView]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={chargingImg}
            alt="EV Charging"
            className="rounded-3xl w-full object-cover h-85"
          />

          <div
            ref={counterRef}
            className="absolute -bottom-8 right-8 bg-green-500 text-white rounded-2xl px-8 py-6 shadow-xl"
          >
            <p className="text-4xl font-bold">* {count}+</p>
            <p className="text-sm mt-1">Happy Customers</p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-green-500 font-semibold mb-3"
          >
            About EV Charger Company
          </motion.p>
<AnimatedText
          text={`Charging solutions for all \nbusinesses & EV drivers`}
  className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6"
  animate={sectionInView}/>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-10"
          >
            EV Charging mobile app to provide EV owner the convenience of locating
            charging stations on aerial map, getting updates on charging. We have
            solutions for Residential, Housing and Individual.
          </motion.p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white">
                <PlugZap size={26} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Charging Rooms</h4>
                <p className="text-gray-500 text-sm">
                  EV charging station license-free for an individual
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="flex gap-4"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white">
                <BookOpen size={26} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Training Programs</h4>
                <p className="text-gray-500 text-sm">
                  Electric vehicle connector where there is attached cable
                </p>
              </div>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition"
          >
            Know More →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
