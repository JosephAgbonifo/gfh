import { MembershipCard } from "@/app/page";
import Link from "next/link";

const membership = [
  {
    name: "corporate",
    price: "200,000",
    img: "/textures/sqr.png",
    gradient: "from-yellow-600 to-yellow-700",
    type: "strategic",
  },
  {
    name: "corporate",
    price: "200,000",
    img: "/textures/sqr.png",
    gradient: "from-amber-600 to-amber-800",
    type: "premium",
  },
  {
    name: "corporate",
    price: "200,000",
    img: "/textures/sqr.png",
    gradient: "from-slate-500/80 to-slate-700",
    type: "basic",
  },
  {
    name: "startup",
    price: "200,000",
    img: "/textures/sqr.png",
    gradient: "from-yellow-600 to-yellow-700",
    type: null,
  },
  {
    name: "professional",
    price: "200,000",
    img: "/textures/sqr.png",
    gradient: "from-amber-600 to-amber-800",
    type: null,
  },
  {
    name: "associate",
    price: "200,000",
    img: "/textures/sqr.png",
    gradient: "from-slate-500/80 to-slate-700",
    type: null,
  },
  {
    name: "academia",
    price: "200,000",
    img: "/textures/sqr.png",
    gradient: "from-yellow-600 to-yellow-700",
    type: null,
  },
  {
    name: "corporate",
    price: "200,000",
    img: "/textures/sqr.png",
    gradient: "from-amber-600 to-amber-800",
    type: null,
  },
];

export default function Cost() {
  return (
    <div>
      <div className="grid grid-cols-2 md:w-[75%] p-10 m-auto md:grid-cols-3 gap-2">
        <p className="col-span-3 font-semibold text-xl md:text-3xl mb-10 text-brand-primary">
          Membership Cost
        </p>
        {membership.map((item, index) => (
          <MembershipCard
            key="index"
            title={item.name}
            info={item.type || "MEMBERSHIP"}
            price={item.price}
            img={item.img}
            dir="right"
            gradient={item.gradient}
          />
        ))}
      </div>
      <div
        className="py-10 bg-brand-secondary/70 text-white bg-blend-multiply"
        style={{ backgroundImage: "url('/hero/hero2.jpg')" }}
      >
        <div className="md:w-[60%] py-20 text-center  m-auto">
          <h2 className="text-4xl font-semibold uppercase text-success mb-10">
            Members
          </h2>
          <p className="pr-20 text-justify  mb-10">
            Our Members Are a Diverse Group of Innovators, Industry Leaders, and
            Stakeholders Our Members are Committed to Transforming Nigeria’s
            Financial Landscape. This Growing Network Includes Financial
            Institutions. Technology Companies, Service Providers, and
            Regulators Working Together to Promote a Thriving Fintech Ecosystem.
          </p>
          <Link
            href="/membership"
            className="border border-brand-primary text-brand-secondary py-1 px-4 mt-2 inline-block rounded-sm"
          >
            Become a member
          </Link>
        </div>
      </div>
    </div>
  );
}
