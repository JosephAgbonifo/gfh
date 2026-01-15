"use client";

import Image from "next/image";
import { useState } from "react";

/* =======================
   TYPES
======================= */

type Category =
  | "all"
  | "blogs"
  | "news"
  | "podcast"
  | "media-kit"
  | "press-release";

interface ContentItem {
  id: string;
  category: Category;
  title: string;
  date: string;
  image: string;
  href: string;
}

/* =======================
   DATA CONSTANT
======================= */

const CONTENT: ContentItem[] = [
  {
    id: "fintech-tsunami-2026",
    category: "news",
    title: "The Fintech Tsunami: Last Quarter Surprises That Will Shape 2026",
    date: "December 18, 2025",
    image: "/hero/hero1.jpg",
    href: "/news/fintech-tsunami-2026",
  },
  {
    id: "experience-is-everything",
    category: "blogs",
    title:
      "Experience Is Everything: How Innovation, Design, And Tech Are Shaping Customer Journeys",
    date: "August 21, 2025",
    image: "/hero/hero2.jpg",
    href: "/blogs/experience-is-everything",
  },
  {
    id: "closing-the-credit-gap",
    category: "blogs",
    title:
      "Closing The Credit Gap: Key Strategies To Expand Women’s Access To Finance In Nigeria",
    date: "August 21, 2025",
    image: "/hero/hero3.jpg",
    href: "/blogs/closing-the-credit-gap",
  },
];

/* =======================
   CATEGORIES
======================= */

const CATEGORIES: { label: string; value: Category }[] = [
  { label: "All Categories", value: "all" },
  { label: "Blogs", value: "blogs" },
  { label: "Podcast", value: "podcast" },
  { label: "Media kit", value: "media-kit" },
  { label: "Press Release", value: "press-release" },
];

/* =======================
   COMPONENT
======================= */

export default function ContentSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredContent =
    activeCategory === "all"
      ? CONTENT
      : CONTENT.filter((item) => item.category === activeCategory);

  return (
    <div>
      <section
        className={`min-h-[40vh] sm:min-h-[40vh] bg-brand-secondary/70 bg-[url("/hero/hero3.jpg")] bg-blend-multiply flex items-center sm:p-16 text-white relative overflow-hidden`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional subtle animated overlay for premium feel */}
        <div className="absolute inset-0 bg-black/20 animate-pulse"></div>

        <div className="relative text-left md:w-[80%] mx-auto md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold pb-6 drop-shadow-lg w-3/5">
            Resource
          </h2>
          <p className=" md-m-0 w-4/5 sm:text-sm md:text-sm leading-7 text-justify">
            Stay connected with important announcements, upcoming events, and
            expert insights that impact the financial technology landscape.
            Whether it's regulatory changes, innovative solutions, or industry
            milestones, this is your hub for staying up to date with all things
            fintech.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* CATEGORY TABS */}
        <div className="flex gap-6 border rounded-lg p-3 w-fit mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
              ${
                activeCategory === cat.value
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-500 hover:text-blue-600"
              }
            `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <article
              key={item.id}
              className="border rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-blue-600 mb-3">
                  <span className="uppercase font-medium">{item.category}</span>
                  <span className="text-gray-400">{item.date}</span>
                </div>

                <h3 className="font-semibold text-lg leading-snug mb-6">
                  {item.title}
                </h3>

                <a
                  href={item.href}
                  className="inline-block border border-blue-600 text-blue-600 px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
