import { Check, TrendingUp } from "lucide-react";
import Link from "next/link";

const membership = [
  {
    name: "Business growth",
    icon: <TrendingUp />,
    benefit: [
      "Exposure to investors, partners, and customers",
      "Access funding opportunities, grants, and accelerators",
      "Business mentorship, advisory services, and strategic guidance",
    ],
  },
  {
    name: "Business growth",
    icon: <TrendingUp />,
    benefit: [
      "Exposure to investors, partners, and customers",
      "Access funding opportunities, grants, and accelerators",
      "Business mentorship, advisory services, and strategic guidance",
    ],
  },
  {
    name: "Business growth",
    icon: <TrendingUp />,
    benefit: [
      "Exposure to investors, partners, and customers",
      "Access funding opportunities, grants, and accelerators",
      "Business mentorship, advisory services, and strategic guidance",
    ],
  },
  {
    name: "Business growth",
    icon: <TrendingUp />,
    benefit: [
      "Exposure to investors, partners, and customers",
      "Access funding opportunities, grants, and accelerators",
      "Business mentorship, advisory services, and strategic guidance",
    ],
  },
  {
    name: "Business growth",
    icon: <TrendingUp />,
    benefit: [
      "Exposure to investors, partners, and customers",
      "Access funding opportunities, grants, and accelerators",
      "Business mentorship, advisory services, and strategic guidance",
    ],
  },
  {
    name: "Business growth",
    icon: <TrendingUp />,
    benefit: [
      "Exposure to investors, partners, and customers",
      "Access funding opportunities, grants, and accelerators",
      "Business mentorship, advisory services, and strategic guidance",
    ],
  },
];
export default function Oport() {
  return (
    <div className="w-[75%] m-auto py-20">
      <h2 className="text-xl md:text-2xl text-success text-center uppercase">
        benefits
      </h2>
      <h3 className="text-xl md:text-3xl text-center mb-3">
        Discover What GFH Membership Offers You
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {membership.map((item, index) => (
          <div key={index} className="relative overflow-hidden">
            <p className="text-success my-3">{item.icon}</p>
            <p className="text-brand-primary text-xl md:text-2xl font-semi-bold my-2">
              {item.name}
            </p>
            <div className="text-xs leading-6">
              <p>
                <Check className="inline size-5 p-1" />
                {item.benefit[0]}
              </p>
              <p>
                <Check className="inline size-5 p-1" />
                {item.benefit[1]}
              </p>
              <p>
                <Check className="inline size-5 p-1" />
                {item.benefit[2]}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-200 py-10">
        <div className="md:w-[60%] py-20 text-center  m-auto">
          <h2 className="text-brand-secondary text-4xl font-semibold  mb-10">
            Nos Plans d'Adhésion
          </h2>
          <p className="pr-20 text-justify  mb-10">
            Accédez à un réseau dynamique de professionnels de la fintech, à des
            analyses sectorielles et à des ressources premium conçues pour vous
            aider à évoluer en toute confiance.
          </p>
          <Link
            href="/membership"
            className="border border-brand-primary text-brand-secondary py-1 px-4 mt-2 inline-block rounded-sm"
          >
            Voir tous les plans
          </Link>
        </div>
      </div>
    </div>
  );
}
