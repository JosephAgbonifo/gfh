import { Calendar, Lightbulb, Link2, Target, UserCheck } from "lucide-react";
import { ReactElement } from "react";

const gridContent = [
  {
    icon: <Lightbulb />,
    title: "Notre vision",
    text: "Faire du Gabon un hub régional d’innovation FinTech en Afrique Centrale, où les acteurs de la technologie financière disposent des ressources, de la visibilité et du soutien nécessaires pour prospérer.",
  },
  {
    icon: <Target />,
    title: "Notre mission",
    text: "Regrouper, structurer et accompagner les acteurs FinTech du Gabon en leur offrant un cadre de collaboration, de visibilité, d’accès aux financements, de représentation institutionnelle et de formation adaptée aux enjeux technologiques et réglementaires.",
  },
];

export function Mission() {
  return (
    <div className="min-h-[70vh] py-10 md:py-0 flex items-center justify-center bg-gray-100">
      <div className="grid grid-col-1 md:grid-cols-2 gap-10 w-[75%] m-auto">
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
  );
}

export function GridCard({
  title,
  text,
  icon,
}: {
  title: String;
  text: string;
  icon?: ReactElement;
}) {
  return (
    <div className="bg-gray-200 rounded p-5 md:py-10">
      <div className="text-center md:text-left text-success mb-3">{icon}</div>
      <div className="text-center md:text-left font-semibold text-xl md:text-4xl text-brand-primary mb-2">
        {title}
      </div>
      <div className="text-center md:text-justify text-gray-500 text-sm leading-7">
        {text}
      </div>
    </div>
  );
}
