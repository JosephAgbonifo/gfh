"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "/hero/hero1.jpg",
  },
  {
    image: "/hero/hero2.jpg",
  },
  {
    image: "/hero/hero3.jpg",
  },
];

export default function Slide() {
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
      <div className="absolute inset-0 bg-brand-primary/50" />
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
