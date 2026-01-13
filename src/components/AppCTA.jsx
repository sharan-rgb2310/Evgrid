import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import appImgLeft from "../images/img1.png";
import appImgRight from "../images/img2.png";

export default function AppCTA() {
  return (
    <section className="px-4 md:px-12 py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto bg-[#0b0b0b] rounded-[48px]">

        {/* ================= DESKTOP FLOATING IMAGES ================= */}
        {/* LEFT */}
        <motion.div
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute -left-32 top-1/2 -translate-y-1/2 z-10 mx-40"
        >
          <img
            src={appImgLeft}
            className="w-[240px] rounded-2xl rotate-[-6deg]
                       drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)]"
            alt="Left app"
          />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          animate={{ y: [20, 0, 20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 z-10 mx-40"
        >
          <img
            src={appImgRight}
            className="w-[260px] rounded-2xl rotate-6
                       drop-shadow-[0_36px_48px_rgba(0,0,0,0.7)]"
            alt="Right app"
          />
        </motion.div>

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="lg:hidden flex flex-col items-center text-center px-6 py-20 space-y-14">

          {/* TOP IMAGE */}
          <motion.img
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={appImgLeft}
            className="w-[160px] rounded-xl rotate-[-4deg]
                       drop-shadow-[0_20px_28px_rgba(0,0,0,0.6)]"
            alt="Mobile top app"
          />

          {/* CENTER CONTENT */}
          <div className="text-white max-w-md space-y-6">
            <h2 className="text-3xl font-bold leading-tight">
              Find charging station on our app
            </h2>

            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ntium volum deleniti atque corrupti quos.
            </p>

            <div className="flex flex-col gap-4 items-center pt-2">
              <button className="flex items-center gap-3 px-6 py-3 rounded-xl
                                 bg-white/10 border border-white/20
                                 hover:bg-white/20 transition">
                <FaApple size={22} />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60">
                    Download on the
                  </div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>

              <button className="flex items-center gap-3 px-6 py-3 rounded-xl
                                 bg-[#76b82a] hover:bg-[#86d130]
                                 transition shadow-lg shadow-green-900/30">
                <FaGooglePlay size={20} />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-80">
                    Download on the
                  </div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* BOTTOM IMAGE */}
          <motion.img
            animate={{ y: [16, 0, 16] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={appImgRight}
            className="w-[170px] rounded-xl rotate-[4deg]
                       drop-shadow-[0_24px_34px_rgba(0,0,0,0.65)]"
            alt="Mobile bottom app"
          />
        </div>

        {/* ================= DESKTOP CENTER CONTENT ================= */}
        <div className="hidden lg:block relative z-20 px-24 py-20 text-center text-white max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold leading-tight">
            Find charging station on our app
          </h2>

          <p className="mt-6 text-gray-400 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ntium volum deleniti atque corrupti quos.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <button className="flex items-center gap-3 px-7 py-4 rounded-2xl
                               bg-white/10 border border-white/20 hover:bg-white/20">
              <FaApple size={24} />
              <div className="text-left">
                <div className="text-[11px] uppercase opacity-60">
                  Download on the
                </div>
                <div className="font-semibold text-lg">App Store</div>
              </div>
            </button>

            <button className="flex items-center gap-3 px-7 py-4 rounded-2xl
                               bg-[#76b82a] hover:bg-[#86d130]
                               shadow-xl shadow-green-900/30">
              <FaGooglePlay size={22} />
              <div className="text-left">
                <div className="text-[11px] uppercase opacity-80">
                  Download on the
                </div>
                <div className="font-semibold text-lg">Google Play</div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
