"use client";
import { useState } from "react";

type TeamMember = {
  image: string;
  name: string;
  role: string;
  info: string;
};

const team: TeamMember[] = [
  {
    image: "/images/1.jpg",
    name: "Jane Doe",
    role: "Designer",
    info: "Jane is a UI wizard who eats Figma for breakfast.",
  },
  {
    image: "/images/2.jpg",
    name: "John Smith",
    role: "Frontend Dev",
    info: "Writes React like poetry. Debugs like a detective.",
  },
  {
    image: "/images/3.jpg",
    name: "Mary Johnson",
    role: "Backend Dev",
    info: "APIs fear her. Databases respect her.",
  },
  {
    image: "/images/4.jpg",
    name: "Alex Brown",
    role: "DevOps",
    info: "Deploys on Friday and sleeps peacefully.",
  },
  {
    image: "/images/5.jpg",
    name: "Chris Lee",
    role: "Product Manager",
    info: "Turns chaos into roadmaps.",
  },
  {
    image: "/images/6.jpg",
    name: "Sarah Kim",
    role: "QA Engineer",
    info: "Breaks things so users don’t.",
  },
  {
    image: "/images/7.jpg",
    name: "Daniel White",
    role: "Mobile Dev",
    info: "Swift and Kotlin are his weapons.",
  },
  {
    image: "/images/8.jpg",
    name: "Nina Patel",
    role: "Data Analyst",
    info: "Finds patterns where others see noise.",
  },
  {
    image: "/images/9.jpg",
    name: "Mike Wilson",
    role: "Security",
    info: "Trust issues, but for good reasons.",
  },
  {
    image: "/images/10.jpg",
    name: "Emma Stone",
    role: "Community Manager",
    info: "Keeps users happy and trolls quiet.",
  },
];

export default function TeamGrid({ profile }: { profile: "true" | "false" }) {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:w-[75%] m-auto p-10 md:py-20">
        {team.map((member, index) => (
          <div>
            {" "}
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm opacity-80">{member.role}</p>
              </div>
            </div>
            {profile === "true" ? (
              <button
                onClick={() => setSelected(member)}
                className="mt-2 text-sm text-text-primary border border-brand-primary rounded-md flex items-center justify-center w-full h-10"
              >
                View profile
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-xl"
            >
              ×
            </button>

            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />

            <h2 className="text-xl font-bold">{selected.name}</h2>
            <p className="text-sm text-gray-500 mb-3">{selected.role}</p>
            <p className="text-gray-700">{selected.info}</p>
          </div>
        </div>
      )}
    </>
  );
}
