"use client";
import { useEffect, useState } from "react";

interface Programme {
  title: string;
  info?: string;
  date: string;
  time: string;
  status: "upcoming" | "past";
  image: string;
  recording: boolean;
}

export default function Program() {
  const program: Programme[] = [
    {
      title: "Workshop FinTech React",
      info: "Créer des dashboards financiers modernes",
      date: "2023-10-15",
      time: "10:00 - 13:00",
      status: "past",
      image: "/program/p1.jpg",
      recording: true,
    },
    {
      title: "Séminaire Blockchain & Paiements",
      info: "Transactions sécurisées et Web3",
      date: "2023-11-20",
      time: "14:00 - 17:00",
      status: "upcoming",
      image: "/program/p2.jpg",
      recording: false,
    },
    {
      title: "UX pour Applications Bancaires",
      info: "Design centré sur la confiance utilisateur",
      date: "2023-12-05",
      time: "11:00 - 13:00",
      status: "upcoming",
      image: "/program/p3.jpg",
      recording: false,
    },
    {
      title: "Bonnes Pratiques JavaScript Financier",
      info: "Code fiable pour systèmes critiques",
      date: "2023-09-10",
      time: "09:00 - 12:00",
      status: "past",
      image: "/program/p4.jpg",
      recording: false,
    },
    {
      title: "Node.js pour APIs Bancaires",
      info: "Backends performants et sécurisés",
      date: "2023-08-25",
      time: "15:00 - 18:00",
      status: "past",
      image: "/program/p5.jpg",
      recording: true,
    },
  ];

  const upcoming = program.filter((p) => p.status === "upcoming");
  const pastWithoutRecording = program.filter(
    (p) => p.status === "past" && !p.recording
  );
  const pastWithRecording = program.filter(
    (p) => p.status === "past" && p.recording
  );

  const SlideRow = ({ items }: { items: Programme[] }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (items.length === 0) return;

      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % items.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [items.length]);

    const prog = items[index];

    return (
      <div className="relative w-full h-full overflow-hidden rounded">
        {/* Image */}
        <img
          src={prog.image}
          alt={prog.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text */}
        <div className="relative z-20 p-4 h-full flex flex-col justify-end">
          <h3 className="text-sm md:text-2xl font-semibold text-white">
            {prog.title}
          </h3>
          <p className="text-xs  md:text-xl text-white">
            {prog.date} • {prog.time}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[75%] m-auto grid grid-cols-1 md:grid-cols-2 gap-5 h-115 mt-14">
      {/* Upcoming */}
      <div className="">
        <SlideRow items={upcoming} />
      </div>

      <div className="grid grid-cols-1 gap-y-5">
        {/* Past */}
        <div className="">
          <SlideRow items={pastWithoutRecording} />
        </div>

        {/* Past with recordings */}
        <div className="">
          <SlideRow items={pastWithRecording} />
        </div>
      </div>
    </div>
  );
}
