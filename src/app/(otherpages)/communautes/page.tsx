import Join from "@/app/components/community/Join";
import Structure from "@/app/components/community/structure";
import { Globe, Group, Pencil, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Community() {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="md:w-[50%] py-20 text-center bg-gray-200  m-auto">
          <h2 className="text-4xl font-semibold uppercase text-brand-primary mb-5">
            Join the <span className="text-success">FinntechNGR</span> Community
            of Practice
          </h2>
          <p className="pr-20 text-justify  mb-5">
            Our members are committed to transforming Nigeria’s financial
            landscape. This growing network includes financial institutions,
            technology companies, service providers, and regulators working
            together to promote a thriving fintech ecosystem.
          </p>
          <Link
            href="/membership"
            className="border mb-20 border-brand-primary text-brand-secondary py-1 px-4 mt-2 inline-block rounded-sm"
          >
            Viewplans
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center -mt-13 mb-10">
        <Image
          alt="community"
          src="/hero/hero2.jpg"
          width={1000}
          height={1000}
          className="w-1/3 h-70"
        />
        <div className="bg-brand-secondary w-4/5 p-10 rounded-lg text-white grid grid-cols-3">
          <div className="flex items-center justify-center gap-2">
            <Globe size={50} />
            <p>
              <p className="text-5xl font-semibold">5+</p>
              <p>Communutues</p>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users size={50} />
            <p>
              <p className="text-5xl font-semibold">500+</p>
              <p>Communutues Members</p>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Pencil size={50} />
            <p>
              <p className="text-5xl font-semibold">100+</p>
              <p>Completed Projects</p>
            </p>
          </div>
        </div>
      </div>
      <Structure />
      <Join />
    </div>
  );
}
