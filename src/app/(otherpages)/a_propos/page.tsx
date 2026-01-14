import About from "@/app/components/about/about";
import Ecosystem from "@/app/components/about/ecosystem";
import { Mission } from "@/app/components/about/mission";
import People from "@/app/components/about/people";
import Pioneer from "@/app/components/about/pioneer";
import Slide from "@/app/components/about/slide";
import TeamGrid from "@/app/components/about/trustees";
import Link from "next/link";

export default function Apropos() {
  return (
    <div>
      <About />
      <Slide />
      <Mission />
      <People />
      <Ecosystem />
      <Pioneer />
      <section
        className={`py-20 bg-brand-secondary/70 bg-[url("/hero/hero3.jpg")] bg-blend-multiply flex items-center sm:p-16 text-white relative overflow-hidden`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional subtle animated overlay for premium feel */}
        <div className="absolute inset-0 bg-black/20 animate-pulse"></div>

        <div className="relative text-center md:w-[80%] mx-auto md:text-left">
          <h2 className="text-3xl leading-16 sm:text-4xl md:text-5xl font-bold pb-6 drop-shadow-lg">
            Our Board of <br /> Trustees
          </h2>
        </div>
      </section>
      <TeamGrid profile="true" />
      <section
        className={`py-20 bg-brand-secondary/70 bg-[url("/hero/hero3.jpg")] bg-blend-multiply flex items-center sm:p-16 text-white relative overflow-hidden`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional subtle animated overlay for premium feel */}
        <div className="absolute inset-0 bg-black/20 animate-pulse"></div>

        <div className="relative text-center md:w-[80%] mx-auto md:text-left">
          <h2 className="text-3xl leading-16 sm:text-4xl md:text-5xl font-bold pb-6 drop-shadow-lg">
            Our Board of <br /> Trustees
          </h2>
        </div>
      </section>
      <TeamGrid profile="false" />
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
