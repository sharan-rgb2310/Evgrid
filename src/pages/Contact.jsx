import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// images
import heroImg from "../images/hero-contact.jpg";
import chImg from "../images/contact-img1.jpg";
import ukImg from "../images/contact-img2.jpg";
import frImg from "../images/contact-img3.jpg";
import boyImg from "../images/contact-img4.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="relative text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Contact Us
          </h1>
          <p className="text-sm md:text-base opacity-90">
            Evgrid &gt; Contact Us
          </p>
        </motion.div>
      </section>

      {/* ================= EMAIL LINKS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            label: "Have questions?",
            email: "help@pbminfotech.com",
          },
          {
            label: "Join our team?",
            email: "careers@pbminfotech.com",
          },
          {
            label: "Business inquiries?",
            email: "hello@pbminfotech.com",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="space-y-2"
          >
            <p className="text-green-500 font-medium">{item.label}</p>
            <button
              onClick={() => alert("Dummy navigation")}
              className="text-black underline hover:text-green-500 transition"
            >
              {item.email}
            </button>
          </motion.div>
        ))}
      </section>

      {/* ================= LOCATION CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {[
          {
            img: chImg,
            title: "CH",
            address: "701 Sondanella, 18th floor, Günsberg, Switzerland",
          },
          {
            img: ukImg,
            title: "UK",
            address: "21 Verneuil street, Office 136, Orchard View, London",
          },
          {
            img: frImg,
            title: "FR",
            address: "301 Broadway block, 24th floor, Orchard, Paris, France",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group rounded-2xl overflow-hidden bg-white shadow-md"
          >
            <div className="overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6 space-y-3">
              <h2 className="text-5xl font-bold text-green-500">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {card.address}
              </p>
              <p className="text-sm">
                <span className="text-green-500">Email:</span>{" "}
                admin@pbminfotech.com
              </p>
              <p className="text-sm">
                <span className="text-green-500">Phone:</span> +0 123
                456 7891
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ================= HELP SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* image */}
        <motion.img
          src={boyImg}
          alt="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto"
        />

        {/* form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-green-500 font-medium mb-2">
            ⚡ Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How can help you?
          </h2>
          <p className="text-gray-500 mb-8">
            Typi non habent claritatem insitam; est usus legentis
            in iis qui facit eorum claritatem.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full border rounded-full px-5 py-3 outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-full px-5 py-3 outline-none focus:border-green-500"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full border rounded-full px-5 py-3 outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full border rounded-full px-5 py-3 outline-none focus:border-green-500"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border rounded-2xl px-5 py-3 outline-none focus:border-green-500"
            />

            <button
              type="button"
              className="bg-green-500 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-black transition"
            >
              Submit Now <ArrowUpRight size={18} />
            </button>
          </form>
        </motion.div>
      </section>

      {/* ================= MAP (already created by you) ================= */}
      {/* <Map /> */}

      <Footer />
    </>
  );
};

export default Contact;
