import Cost from "@/app/components/membership/cost";
import Oport from "@/app/components/membership/oport";
import { convertSegmentPathToStaticExportFilename } from "next/dist/shared/lib/segment-cache/segment-value-encoding";
import Link from "next/link";

const membership = [
  { name: "corporate", type: "strategic", img: "/hero/hero1.jpg" },
  { name: "corporate", type: "premium", img: "/hero/hero2.jpg" },
  { name: "corporate", type: "basic", img: "/hero/hero3.jpg" },
  { name: "startup", type: null, img: "/hero/hero1.jpg" },
  { name: "professional", type: null, img: "/hero/hero2.jpg" },
  { name: "associate", type: null, img: "/hero/hero3.jpg" },
  { name: "academia", type: null, img: "/hero/hero1.jpg" },
  { name: "corporate", type: null, img: "/hero/hero2.jpg" },
];

export default function adhesion() {
  return (
    <div>
      {" "}
      <div className="md:flex md:w-[75%] m-auto gap-10 py-10">
        <div className="md:w-[60%] py-20 text-left flex-1 m-auto">
          <h2 className="text-brand-secondary text-4xl font-semibold">
            Membership Plans: Find The Perfect Fit For Your Fintech Journey
          </h2>
          <p className="pr-20 text-justify">
            Our Membership Plans provide tailored opportunities to engage with
            the fintech ecosystem, offering a range of benefits designed to
            support your growth and success. Choose the plan that aligns with
            your goals and become part of a community shaping the future of
            financial technology.
          </p>
          <Link
            href="/membership"
            className="border border-brand-primary text-brand-secondary py-1 px-4 mt-2 inline-block rounded-sm"
          >
            Voir tous les plans
          </Link>
        </div>
        <div className="border rounded flex flex-1 items-center justify-center">
          Image goes here
        </div>
      </div>
      <div className="text-white bg-linear-to-r from-brand-secondary to-brand-primary">
        <p className="p-10 md:px-20 text-xl">Overview of Membership Tiers:</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {membership.map((item, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            {/* black overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* text */}
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <p className="font-semibold uppercase">{item.name}</p>

              {item.type && (
                <p className="text-sm opacity-80 capitalize">{item.type}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <Oport />
      <Cost />
    </div>
  );
}
