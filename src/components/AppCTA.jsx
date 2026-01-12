import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import appImg from "../images/appImg.png";

export default function AppCTA() {
  return (
    <section className="mx-4 md:mx-10 my-20">
      <div className="bg-[#0a0a0a] rounded-[60px] p-10 md:p-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div className="text-white space-y-8 z-10">
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1]">
              Find charging station on the our app
            </h2>
            <p className="text-gray-400 text-lg">
              Monitor charging station locations, availability, and speed in real-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
                <FaApple size={28} /> 
                <div className="text-left">
                  <div className="text-[10px] opacity-60">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </button>
              {/* Google Play Button here */}
            </div>
          </div>

          <div className="relative h-[600px] flex justify-center items-center">
            {/* Left Phone - Floating */}
            <motion.img 
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={appImg} className="absolute left-0 w-64 z-20 drop-shadow-2xl" 
            />
            {/* Right Phone - Opposite Floating */}
            <motion.img 
              animate={{ y: [20, -10, 20] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src={appImg} className="absolute right-0 w-72 rotate-6 z-10 opacity-80" 
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}