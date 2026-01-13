import { motion } from "framer-motion";
import aboutImg from "../images/aboutImg.png"; // Replace with your car image path

const CircularProgress = ({ percentage, label }) => {
  // SVG Circle Logic
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex items-center gap-5">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* SVG Container */}
        <svg className="w-full h-full transform -rotate-90">
          {/* Background Outer Ring */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Animated Green Progress Stroke */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#4ade80" // Green-400
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{
              strokeDashoffset: circumference - (percentage / 100) * circumference,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            strokeLinecap="round"
          />
        </svg>

        {/* Solid Green Center Circle */}
        <div className="absolute inset-2 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">{percentage}%</span>
        </div>
      </div>

      {/* Label on the Right */}
      <div className="max-w-30">
        <p className="text-xl font-bold leading-tight text-gray-800">{label}</p>
      </div>
    </div>
  );
};

export default function EnergyProgress() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">
      {/* Left Side: Image with entrance animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <img
          src={aboutImg}
          alt="Electric Car"
          className="w-full h-auto rounded-3xl"
        />
      </motion.div>

      {/* Right Side: Content and Progress */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            More than 1500 charging stations & growing big!!
          </h2>
          <p className="mt-6 text-gray-500 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </motion.div>

        {/* Circular Progress Container */}
        <div className="flex flex-col sm:flex-row gap-10 pt-4">
          <CircularProgress percentage={87} label="Clients Satisfactions" />
          <CircularProgress percentage={87} label="Work Experiences" />
        </div>
      </div>
    </section>
  );
}