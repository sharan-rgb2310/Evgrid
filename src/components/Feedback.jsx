import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const baseTestimonials = [
  {
    name: "Ariana Green",
    role: "SATISFIED CLIENT",
    text:
      "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
  },
  {
    name: "Justin Aria",
    role: "CUSTOMER",
    text:
      "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
  },
  {
    name: "Hazel Jenkins",
    role: "CEO & FOUNDER",
    text:
      "Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which eventually believable.",
  },
];

// desktop infinite data
const infiniteTestimonials = Array.from(
  { length: 30 },
  () => baseTestimonials
).flat();

export default function Feedback() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="w-full bg-[#f9faf8] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[340px_1fr] gap-5">
        {/* LEFT */}
        <div className="relative">
          <div className="absolute -top-10 -left-4 text-green-200/40 text-[120px] font-bold leading-none">
            “
          </div>

          <span className="flex items-center gap-2 text-green-500 font-medium mb-2">
            <span className="w-2 h-2 bg-green-500 rounded-sm" />
            Feedback
          </span>

          <h2 className="text-4xl font-bold leading-tight">
            Hear from <br /> clients.
          </h2>
        </div>

        {/* RIGHT */}
        {isMobile ? <MobileSlider /> : <DesktopSlider />}
      </div>

      {/* RATING */}
      <div className="max-w-7xl mx-auto px-4 mt-12 flex justify-end gap-3 items-center">
        <span className="text-green-500 text-5xl font-bold">4.82</span>
        <div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-sm text-gray-700">2488 Rating</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MOBILE SLIDER ---------------- */

function MobileSlider() {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        drag="x"
        dragConstraints={{ left: -((baseTestimonials.length - 1) * 100), right: 0 }}
        className="flex"
      >
        {baseTestimonials.map((t, i) => (
          <div key={i} className="w-full shrink-0 px-1">
            <div className="relative bg-white rounded-3xl p-6 shadow-sm">
              <div className="absolute -top-3 right-4 bg-green-500 p-2 rounded-full">
                <Quote className="w-3.5 h-3.5 text-white" />
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="italic text-gray-700 leading-relaxed mb-5 text-sm">
                “{t.text}”
              </p>

              <div className="flex gap-2 items-center">
                <span className="font-semibold text-sm">{t.name}</span>
                <span className="text-green-500 text-xs tracking-wide">
                  {t.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------------- DESKTOP SLIDER ---------------- */

function DesktopSlider() {
  const CARD_WIDTH = 360;
  const [x, setX] = useState(-CARD_WIDTH * 10);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setX((prev) => prev - CARD_WIDTH);
    }, 4000);
    return () => clearInterval(id);
  }, [autoPlay]);

  return (
    <div>
      <div className="overflow-hidden" style={{ width: 900 }}>
        <motion.div
          className="flex cursor-grab"
          animate={{ x }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {infiniteTestimonials.map((t, i) => (
            <div key={i} className="shrink-0 px-3" style={{ width: 360 }}>
              <div className="relative bg-white rounded-3xl p-6 shadow-sm">
                <div className="absolute -top-3 right-4 bg-green-500 p-2 rounded-full">
                  <Quote className="w-3.5 h-3.5 text-white" />
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="italic text-gray-700 leading-relaxed mb-5 text-sm">
                  “{t.text}”
                </p>

                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-sm">{t.name}</span>
                  <span className="text-green-500 text-xs tracking-wide">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => {
            setAutoPlay(false);
            setX((p) => p + CARD_WIDTH);
          }}
          className="w-10 h-10 rounded-full border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => {
            setAutoPlay(false);
            setX((p) => p - CARD_WIDTH);
          }}
          className="w-10 h-10 rounded-full border border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
