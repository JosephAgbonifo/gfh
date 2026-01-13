"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "/hero/hero1.jpg",
    heading: "Connecting Fintech Visionaries",
    highlight: "Fintech",
    subheading:
      "FintechNGR serves as a platform where innovators and stakeholders unite to drive growth in Nigeria’s digital finance space.",
  },
  {
    image: "/hero/hero2.jpg",
    heading: "Building a Future-Ready Financial Landscape",
    highlight: "Future-Ready",
    subheading:
      "We empower startups, institutions, and policymakers to shape Africa’s financial future.",
  },
  {
    image: "/hero/hero3.jpg",
    heading: "Strengthening Nigeria’s FinTech Ecosystem",
    highlight: "FinTech",
    subheading:
      "Creating collaboration, innovation, and sustainable impact across the ecosystem.",
  },
];


export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[index];

  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={slide.image}
        alt=""
        fill
        priority
        className="object-cover transition-opacity duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
      <div className="flex items-center justify-center absolute left-0 text-white z-10" onClick={() => {
  setIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
}}
>
        <ChevronLeft />
      </div>
        <div className="max-w-4xl text-white">
          <h1 className="mb-6 text-3xl font-heading font-semibold leading-tight md:text-6xl">
            {renderHighlightedText(slide.heading, slide.highlight)}
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
            {slide.subheading}
          </p>

          <a
            href="/membership/join"
            className="inline-flex items-center justify-center rounded-lg border border-white/70 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Become a Member
          </a>
        </div>
         <div className="flex items-center justify-center absolute right-0 text-white z-10" onClick={() => {setIndex((prev) => (prev + 1) % HERO_SLIDES.length)}} >
        <ChevronRight />
      </div>
      </div>
    </section>
  );
}

function renderHighlightedText(text: string, highlight: string) {
  return text.split(" ").map((word, i) =>
    word.includes(highlight) ? (
      <span key={i} className="text-success">
        {word}{" "}
      </span>
    ) : (
      <span key={i}>{word} </span>
    )
  );
}

