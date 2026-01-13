import { motion } from "framer-motion";
import aboutImg from "../images/aboutImg.png"; // replace with your image

// CircularProgress: responsive, scalable, accessible
const CircularProgress = ({ percentage = 0, label = "" }) => {
  const radius = 45; // radius relative to viewBox
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(229,231,235,1)"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#4ade80"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{
              strokeDashoffset: circumference - (percentage / 100) * circumference,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-3 sm:inset-4 rounded-full bg-green-500 flex items-center justify-center shadow-md">
          <span className="text-white font-semibold text-base sm:text-lg">
            {Math.round(percentage)}%
          </span>
        </div>
      </div>

      <div className="text-center sm:text-left max-w-xs">
        <p className="text-sm sm:text-base font-semibold text-gray-800">{label}</p>
      </div>
    </div>
  );
};


export default function EnergyProgress() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Left: image with subtle entrance */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={aboutImg}
            alt="Electric car charging"
            className="w-full h-auto rounded-2xl object-cover shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Right: content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              More than 1500 charging stations & growing big!!
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour.
            </p>
          </motion.div>

          {/* Progress items: vertical on mobile, horizontal on larger */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
            <CircularProgress percentage={87} label="Client Satisfaction" />
            <CircularProgress percentage={74} label="Work Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
