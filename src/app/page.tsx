import { ReactElement } from "react";
import Hero from "./components/Hero";
import { Partners } from "./components/Marquee";
import { ArrowRight, Calendar, Link2, UserCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import Program from "./components/program";

const gridContent = [
  {
    title: "Événements qui inspirent",
    text: "Nous organisons des conférences, ateliers et sommets percutants pour rassembler la communauté fintech du Gabon. Nos événements mettent en avant des leaders d’opinion et créent des opportunités de collaboration.",
    icon: <Calendar size={40} className="hover:animate-bounce m-auto md:m-0" />,
  },
  {
    title: "Créer des ponts",
    text: "Nous connectons startups, investisseurs, régulateurs et acteurs du secteur, localement et à l’international, favorisant les partenariats et la visibilité des innovations fintech.",
    icon: <Link2 size={40} className="hover:animate-bounce m-auto md:m-0" />,
  },
  {
    title: "Valoriser les talents",
    text: "Nous formons la prochaine génération de professionnels de la fintech grâce à des programmes de formation, du mentorat et des expériences pratiques, en partenariat avec universités et experts.",
    icon: (
      <UserCheck size={40} className="hover:animate-bounce m-auto md:m-0" />
    ),
  },
];

const programmes = [
  { class: "upcoming", image: "", title: "", date: "", time: "", info: "" },
  { class: "upcoming", image: "", title: "", date: "", time: "", info: "" },
  { class: "upcoming", image: "", title: "", date: "", time: "", info: "" },
  { class: "past", image: "", title: "", date: "", time: "", info: "" },
];

export default function Gfh() {
  return (
    <div className="font-heading">
      <Hero />
      <Partners />
      <div className="min-h-[70vh] py-10 md:py-0 flex items-center justify-center bg-gray-100">
        <div className="grid grid-col-1 md:grid-cols-3 gap-10 w-[75%] m-auto">
          {gridContent.map((content) => (
            <GridCard
              key={content.title}
              title={content.title}
              text={content.text}
              icon={content.icon}
            />
          ))}
        </div>
      </div>
      <section
        className={`min-h-[60vh] sm:min-h-[70vh] bg-brand-secondary/70 bg-[url("/hero/hero3.jpg")] bg-blend-multiply flex items-center sm:p-16 text-white relative overflow-hidden`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional subtle animated overlay for premium feel */}
        <div className="absolute inset-0 bg-black/20 animate-pulse"></div>

        <div className="relative text-center md:w-[80%] mx-auto md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-6 drop-shadow-lg">
            À propos
          </h2>
          <p className="text-base m-auto md-m-0 w-4/5 sm:text-sm md:text-sm leading-7 text-justify">
            Gabon FinTech Hub est une association dédiée à la construction et au
            renforcement de l&apos;écosystème FinTech au Gabon. Nous rassemblons
            les entrepreneurs, startups, institutions financières,
            professionnels, chercheurs et médias qui souhaitent contribuer à
            l&apos;innovation financière, à la transformation digitale et au
            développement économique du pays.
          </p>
          <Link
            href="Apropos"
            className="py-2 px-7 rounded inline-block mt-7 border-2 text-white border-white"
          >
            Read More
          </Link>
        </div>
      </section>
      <div className="py-20 bg-gray-100">
        <h2 className="text-6xl text-center font-semibold text-brand-secondary mb-5">
          Programmes et Événements
        </h2>
        <p className="m-auto w-3/5 leading-7 text-center">
          Favoriser l'innovation et la collaboration grâce à des programmes et
          événements clés pour les professionnels de la fintech.
        </p>
        <Program />
      </div>
      <div className="flex flex-col md:flex-row gap-10 pt-10 min-h-screen w-[75%] m-auto">
        <div className="flex flex-1 items-center justify-center">
          <div>
            <h2 className="text-brand-secondary text-4xl font-semibold">
              Nos Plans d'Adhésion
            </h2>
            <p className="pr-20 text-justify">
              Accédez à un réseau dynamique de professionnels de la fintech, à
              des analyses sectorielles et à des ressources premium conçues pour
              vous aider à évoluer en toute confiance.
            </p>
            <Link
              href="/membership"
              className="border border-brand-primary text-brand-secondary py-1 px-4 mt-2 inline-block rounded-sm"
            >
              Voir tous les plans
            </Link>
          </div>
        </div>
        <div className="flex-1 h-full gap-3 grid grid-col-1 py-16">
          <MembershipCard
            title="Jeunes entreprises"
            info="Ideation & Pré-amorçage"
            price="30,000 CFAF"
            img="/textures/sqr.png"
            dir="right"
            gradient="from-slate-500/80 to-slate-700"
          />
          <MembershipCard
            title="Entreprise"
            info="Basique"
            price="200,000 CFAF"
            img="/textures/sem.png"
            dir="center"
            gradient="from-amber-600 to-amber-800"
          />
          <MembershipCard
            title="Autres plans"
            info="Sélectionner"
            price="3********"
            img="/textures/tri.png"
            dir="left"
            gradient="from-yellow-600 to-yellow-700"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function GridCard({
  title,
  text,
  icon,
}: {
  title: String;
  text: string;
  icon: ReactElement;
}) {
  return (
    <div>
      <div className="text-center md:text-left text-success mb-3">{icon}</div>
      <div className="text-center md:text-left text-xl text-brand-primary mb-2">
        {title}
      </div>
      <div className="text-center md:text-justify text-gray-500 text-sm leading-7">
        {text}
      </div>
    </div>
  );
}

export function MembershipCard({
  title,
  info,
  price,
  gradient,
  img,
  dir,
}: {
  title: String;
  info: string;
  price: string;
  gradient: string;
  img: string;
  dir: "left" | "right" | "center";
}) {
  return (
    <div
      className={`flex relative rounded-lg overflow-hidden bg-gradient-to-br ${gradient} p-4 md:p-10 text-white`}
    >
      <Image
        src={img}
        alt="texture"
        className={`absolute opacity-30 w-100 -top-20 h-auto ${
          dir === "left"
            ? "-left-20"
            : dir === "right"
            ? "-right-20"
            : "left-20"
        }`}
        height={500}
        width={500}
      />
      <div className="flex-1 flex-col">
        <p className="text-xl md:text-3xl mb-2">{title}</p>
        <p className="bg-white/30 text-xs md:text-sm rounded py-1 px-3 inline-block">
          {info}
        </p>
      </div>
      <div className="flex-1 flex flex-col items-end justify-between">
        <Link href="/membership">
          <ArrowRight />
        </Link>
        <p className="text-xl md:text-3xl font-semibold py-1 px-3">{price}</p>
      </div>
    </div>
  );
}
