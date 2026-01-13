import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
// Replace with your actual image paths
import appImgLeft from "../images/img1.png"; 
import appImgRight from "../images/img2.png";

export default function AppCTA() {
  return (
    <section className="px-4 md:px-10 py-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-[60px] p-10 md:p-24 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side: Content */}
          <div className="text-white space-y-8 z-10">
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Find charging station on the our app
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ntium volum deleniti atque corrupti quos.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* App Store Button */}
              <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition group">
                <FaApple size={32} className="text-white" /> 
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60 font-medium">Download on the</div>
                  <div className="font-bold text-lg leading-tight">App Store</div>
                </div>
              </button>

              {/* Google Play Button */}
              <button className="flex items-center gap-3 bg-[#76b82a] px-8 py-4 rounded-2xl hover:bg-[#86d130] transition shadow-lg shadow-green-900/20">
                <FaGooglePlay size={28} className="text-white" /> 
                <div className="text-left text-white">
                  <div className="text-[10px] uppercase opacity-90 font-medium">Download on the</div>
                  <div className="font-bold text-lg leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side: Animated Mockups */}
          <div className="relative h-[500px] md:h-[650px] flex items-center justify-center">
            {/* Background Phone (Left-aligned in the column) */}
            <motion.div 
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 w-[240px] md:w-[320px] z-10"
            >
              <img 
                src={appImgLeft} 
                className="w-full drop-shadow-2xl" 
                alt="App Statistics" 
              />
            </motion.div>

            {/* Foreground Phone (Right-aligned and rotated) */}
            <motion.div 
              animate={{ y: [30, 5, 30] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-20px] md:right-[-40px] top-20 w-[260px] md:w-[350px] z-20"
            >
              <img 
                src={appImgRight} 
                className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] rotate-[8deg]" 
                alt="App Map View" 
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}