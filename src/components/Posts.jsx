import React from "react";
import { FaBolt } from "react-icons/fa";

// Images
import art1 from "../images/art-1.jpg";
import art2 from "../images/art-2.jpg";
import art3 from "../images/art-3.jpg";
import art4 from "../images/art-4.jpg";
import art5 from "../images/art-5.jpg";
import art6 from "../images/art-6.jpg";

const posts = [
  { id: 1, title: "How to Avoid EV Charger High Temperatures", date: "July 7, 2024", author: "evgridpbm", image: art1 },
  { id: 2, title: "Top EV Charging Station Companies in 2024", date: "July 7, 2024", author: "evgridpbm", image: art2 },
  { id: 3, title: "Electric Vehicle Charging: Solutions & Strategies", date: "July 7, 2024", author: "evgridpbm", image: art3 },
  { id: 4, title: "Energy Resources and Smart Energy Management", date: "July 7, 2024", author: "evgridpbm", image: art4 },
  { id: 5, title: "How Impacts EV Cybersecurity Build Your Branded", date: "July 7, 2024", author: "evgridpbm", image: art5 },
  { id: 6, title: "Vehicle Motor Controllers: A Beginner's Guide", date: "July 7, 2024", author: "evgridpbm", image: art6 },
];

const Posts = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <div className="flex justify-center items-center gap-2 mb-3">
          <FaBolt className="text-green-500 text-sm" />
          <span className="text-green-600 text-sm font-medium tracking-wide">
            Smart EV Charging Stations
          </span>
        </div>

        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Latest Posts & Articles
        </h2>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          {posts.map((post) => (
            <article
              key={post.id}
              className="min-w-[280px] max-w-[280px] flex-shrink-0 group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transform scale-110 group-hover:scale-100 transition-transform duration-500 ease-out will-change-transform"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2 text-green-500">•</span>
                  <span>
                    by{" "}
                    <span className="font-medium text-gray-700">{post.author}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
