import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBolt,
  FaHome,
  FaBuilding,
  FaStore,
  FaCar,
  FaIndustry,
  FaChevronLeft,
  FaChevronRight,
  FaTruck,
} from "react-icons/fa";

const slides = [
  [
    {
      icon: <FaHome className="text-4xl" />,
      tag: "CHARGING",
      title: "Home Charging",
      desc: "Home is the most popular location to charge an EV, with more than 64% of charging happening at home.",
      img: "src/images/wtd-1.jpg",
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      tag: "CORPORATE",
      title: "Residential Energy",
      desc: "Connect your residential charging station to 100% renewable energy with our smart energy solutions.",
      img: "src/Images/wtd-2.jpg",
    },
  ],
  [
    {
      icon: <FaStore className="text-4xl" />,
      tag: "ECO FUEL",
      title: "Retail & Hospitality",
      desc: "Retailers and hotels are expanding their EV infrastructure to meet growing customer demand.",
      img: "src/Images/wtd-3.jpg",
    },
    {
      icon: <FaIndustry className="text-4xl" />,
      tag: "ELECTRIC",
      title: "Commercial Area",
      desc: "Future of electric commercial vehicles as a clean alternative to fossil fuel transportation.",
      img: "src/Images/wtd-4.jpg",
    },
  ],
  [
    {
      icon: <FaCar className="text-4xl" />,
      tag: "EV CARS",
      title: "Public Stations",
      desc: "Public charging stations make EVs more convenient. Although home charging dominates, public infrastructure continues to expand rapidly.",
      img: "src/Images/wtd-5.jpg",
    },
    {
      icon: <FaTruck className="text-4xl" />,
      tag: "EV STATION",
      title: "E-Commerce",
      desc: "E-commerce is one of the earliest adopters of EVs, with industry reports indicating significant growth in electric delivery fleets.",
      img: "src/Images/wtd-6.jpg",
    },
  ],
];

const features = [
  {
    icon: (
      <img
        src="src/images/iconad1.png"
        alt="High Quality Charger"
        className="h-14 w-14 object-contain"
      />
    ),
    title: "High quality charger",
    desc: "Charging stations is essential to greater adoption of Electric Vehicles",
  },
  {
    icon: (
      <img
        src="src/Images/iconad2.png"
        alt="Renewable Energy"
        className="h-14 w-14 object-contain"
      />
    ),
    title: "Renewable Energy",
    desc: "Renewable energy can be used for electricity generation and water",
  },
  {
    icon: (
      <img
        src="src/Images/iconad3.png"
        alt="Smart Connected"
        className="h-14 w-14 object-contain"
      />
    ),
    title: "Smart connected",
    desc: "EV Connect is a powerful commercial software for operating your network",
  },
  {
    icon: (
      <img
        src="src/Images/iconad4.png"
        alt="Quick installation"
        className="h-14 w-14 object-contain"
      />
    ),
    title: "Quick installation",
    desc: "Charging stations will have fast chargers for customer get the experience",
  },
  {
    icon: (
      <img
        src="src/Images/iconad5.png"
        alt="Free Support"
        className="h-14 w-14 object-contain"
      />
    ),
    title: "Free Support",
    desc: "Our commitment is to provide world-class products and offerings",
  },
  {
    icon: (
      <img
        src="src/Images/iconad6.png"
        alt="Access Control"
        className="h-14 w-14 object-contain"
      />
    ),
    title: "Access control",
    desc: "Our existing partners enjoy steady returns. We plan to continue doing",
  },
];

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="bg-white">
      {/* Top Slider Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
        {/* Header with " Charging Solution" - GREEN ICON */}
        <div className="flex items-center gap-3 text-green-600 mb-4">
          <FaBolt className="text-xl text-green-600" />
          <span className="text-sm font-semibold tracking-wide text-green-600">
             Charging Solution
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We Think Differently.
          </h1>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 hover:border-green-600 flex items-center justify-center transition-all hover:bg-gray-50"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-gray-700 text-base md:text-lg" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-all"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-base md:text-lg" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-300 mb-8 md:mb-12"></div>

        {/* Main Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: isMobile ? 40 : 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isMobile ? -40 : -80 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          >
            {slides[currentIndex].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Image Section */}
                <div className="w-full lg:w-2/5 h-64 lg:h-auto">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-center w-full lg:w-3/5">
                  <div className="text-green-600 mb-4">{card.icon}</div>

                  <span className="text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">
                    {card.tag}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Features Section - 100% Screenshot Accurate */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <FaBolt className="text-xl text-green-500" />
            </div>
            <h2 className="text-green-500 text-base md:text-lg font-medium mb-4">
              Smart EV Charging Stations
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Advanced charging solutions
            </h3>
          </div>

          {/* Features Grid - 2 rows x 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                {/* Icon - Left aligned */}
                <div className="mb-4">{feature.icon}</div>

                {/* Title - Black text, larger */}
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>

                {/* Description - Gray text */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}