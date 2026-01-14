import { MembershipCard } from "@/app/page";

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
    </div>
  );
}
