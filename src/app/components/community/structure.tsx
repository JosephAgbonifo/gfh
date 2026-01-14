import { Network } from "lucide-react";

const structure = [
  {
    name: "Special Interest Groups (SIGs)",
    sub: "Address emerging topics, such as:",
    more: [
      "Fintech Regulations and Policy",
      "Fintech for agriculture",
      "fintech and Finantial",
    ],
    color: "#0000ff",
  },
  {
    name: "Special Interest Groups (SIGs)",
    sub: "Address emerging topics, such as:",
    more: [
      "Fintech Regulations and Policy",
      "Fintech for agriculture",
      "fintech and Finantial",
    ],
    color: "#00ff00",
  },
  {
    name: "Special Interest Groups (SIGs)",
    sub: "Address emerging topics, such as:",
    more: [
      "Fintech Regulations and Policy",
      "Fintech for agriculture",
      "fintech and Finantial",
    ],
    color: "#ff0000",
  },
];

export default function Structure() {
  return (
    <div className="my-10">
      <p className="text-success text-center uppercase text-lg">
        COMMUNITY OF PRACTICE STRUCTURE
      </p>
      <p className="text-brand-primary w-1/2 text-center m-auto text-xl md:text-3xl py-10">
        Discover how our community of practice structure drives collaboration
        and innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:w-[70%] m-auto">
        {structure.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div
              className={`flex w-15 m-4 h-15 rounded-full items-center justify-center`}
              style={{ backgroundColor: item.color }}
            >
              <Network size={30} />
            </div>
            <p className="font-semibold text-lg">{item.name}</p>
            <p className="font-semibold">{item.sub}</p>

            {item.more.map((item, index) => (
              <p className="" key={index}>
                - {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
