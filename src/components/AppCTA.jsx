import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import appImgLeft from "../images/img1.png";
import appImgRight from "../images/img2.png";

export default function AppCTA() {
  return (
    <section className="px-4 md:px-10 py-20 bg-white font-sans overflow-hidden">
      <div className="relative max-w-6xl mx-auto bg-[#0a0a0a] rounded-[48px] px-6 md:px-20 py-16 overflow-visible">

        {/* LEFT IMAGE */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 md:-left-28 top-1/2 -translate-y-1/2 z-10"
        >
          <div className="p-3 md:p-4 mx-40">
            <img
              src={appImgLeft}
              alt="App screen left"
              className="w-[140px] md:w-[220px] h-auto max-h-[460px]
                         rounded-xl rotate-[5deg]"
            />
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          animate={{ y: [16, 0, 16] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 md:-right-28 top-1/2 -translate-y-1/2 z-10"
        >
          <div className="p-3 md:p-4 mx-30">
            <img
              src={appImgRight}
              alt="App screen right"
              className="w-[160px] md:w-[240px] h-auto max-h-[480px]
                         rounded-xl rotate-[5deg]
                         drop-shadow-[0_24px_24px_rgba(0,0,0,0.6)]"
            />
          </div>
        </motion.div>

        {/* CENTER CONTENT */}
        <div className="relative z-20 text-center max-w-xl mx-auto text-white space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Find charging station on our app
          </h2>

          <p className="text-gray-400 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ntium volum deleniti atque corrupti quos.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition">
              <FaApple size={24} />
              <div className="text-left">
                <div className="text-[10px] uppercase opacity-60">
                  Download on the
                </div>
                <div className="font-bold text-base">App Store</div>
              </div>
            </button>

            <button className="flex items-center gap-3 bg-[#76b82a] px-6 py-3 rounded-xl hover:bg-[#86d130] transition shadow-lg shadow-green-900/20">
              <FaGooglePlay size={22} />
              <div className="text-left">
                <div className="text-[10px] uppercase opacity-90">
                  Download on the
                </div>
                <div className="font-bold text-base">Google Play</div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
