import Image from "next/image";

interface Program {
  title: string;
  info?: string;
  date: string;
  time: string;
  status: "upcoming" | "past";
  image: string;
  recording: boolean;
}

const program: Program[] = [
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

export default function ProgrammeSection() {
  const upcoming = program.filter((p: Program) => p.status === "upcoming");
  const past = program.filter((p: Program) => p.status === "past");

  return (
    <section className="space-y-20 md:px-60 py-10 ">
      {/* TOP UPCOMING EVENTS */}
      <div>
        <h2 className="text-green-500 text-xl mb-6">Top Upcoming Events</h2>

        <div className="flex gap-8 overflow-x-auto py-5">
          {upcoming.map((event, idx) => (
            <div
              key={idx}
              className="flex min-w-[520px] rounded-2xl overflow-hidden bg-green-400 text-white"
            >
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                    {new Date(event.date).toDateString()} • {event.time}
                  </span>

                  <h3 className="text-2xl font-semibold mt-6 leading-snug">
                    {event.title}
                  </h3>
                </div>

                <button className="border border-white rounded-lg px-6 py-2 w-fit">
                  View
                </button>
              </div>

              <div className="relative w-[220px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAST EVENTS */}
      <div>
        <h2 className="text-green-500 text-xl mb-6">Past Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {past.map((event, idx) => (
            <div key={idx} className="border rounded-2xl p-5 flex gap-5">
              <Image
                src={event.image}
                alt={event.title}
                width={90}
                height={90}
                className="rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{event.title}</h3>

                <p className="text-sm text-gray-500 mt-1">{event.info}</p>

                <div className="text-xs text-gray-400 mt-3">
                  {new Date(event.date).toDateString()} • {event.time}
                </div>

                {event.recording && (
                  <span className="inline-block mt-2 text-xs text-green-600 font-medium">
                    Recording available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
