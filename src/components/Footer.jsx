import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6"
import { HiArrowUpRight } from "react-icons/hi2"

export default function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `url('/src/images/slide2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-white/10 pb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Want to receive news and updates?
          </h2>

          <div className="flex w-full lg:w-130 bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-6 py-4 text-black outline-none"
            />
            <button className="group flex items-center gap-2 bg-green-500 px-8 py-4 text-white font-semibold transition-all hover:bg-black rounded-full m-1">
              Subscribe
              <HiArrowUpRight className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold">
                ⚡
              </div>
              <span className="text-xl font-semibold">evgrid</span>
            </div>

            <p className="text-white/70 mb-6">
              Fuel your business growth and witness immediate results today.
            </p>

            <p className="text-sm text-white/60">Customer Care</p>
            <button className="text-green-500 font-semibold hover:underline">
              +(1) 123 456 7890
            </button>

            <p className="text-sm text-white/60 mt-4">Need live support?</p>
            <button className="text-green-500 hover:underline">
              info@liquid.com
            </button>
          </div>

          {/* Charger Solution */}
          <div>
            <h3 className="font-semibold mb-5">Charger Solution</h3>
            <ul className="space-y-3 text-white/70">
              {[
                "Instructions",
                "Changelog",
                "Password",
                "Coming soon",
                "Style Guide",
                "Licenses",
                "Error 404",
              ].map((item) => (
                <li key={item}>
                  <button className="hover:text-green-500 transition">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Page */}
          <div>
            <h3 className="font-semibold mb-5">Utility Page</h3>
            <ul className="space-y-3 text-white/70">
              {["About Us", "Our Team", "Contact Us", "Service", "Project"].map(
                (item) => (
                  <li key={item}>
                    <button className="hover:text-green-500 transition">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-5">Social Media</h3>
            <ul className="space-y-4 text-white/70">
              <li>
                <button className="flex items-center gap-3 hover:text-green-500 transition">
                  <FaFacebookF /> facebook
                </button>
              </li>
              <li>
                <button className="flex items-center gap-3 hover:text-green-500 transition">
                  <FaXTwitter /> twitter
                </button>
              </li>
              <li>
                <button className="flex items-center gap-3 hover:text-green-500 transition">
                  <FaInstagram /> instagram
                </button>
              </li>
              <li>
                <button className="flex items-center gap-3 hover:text-green-500 transition">
                  <FaYoutube /> youtube
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 text-center text-white/50 text-sm">
          Copyright © 2024 Evgrid. All Rights Reserved.
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full border border-green-500 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-black transition"
      >
        ↑
      </button>
    </footer>
  )
}
