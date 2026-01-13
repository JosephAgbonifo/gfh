import { Linkedin, Instagram, X } from "lucide-react";
import CTA from "./cta";

const Footer = () => {
  return (
    <div>
      <CTA />
      <footer className="border-t border-blue-700 pt-16 pb-6">
        <div className="w-[75vw] mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Logo + Description */}
          <div className="md:col-span-2 space-y-4">
            <img src="/logo.png" alt="GFH" className="h-10" />
            <p className="text-sm text-gray-700 leading-relaxed max-w-md">
              Favoriser l'innovation et la collaboration grâce à des programmes
              et événements clés pour les professionnels de la fintech dans le
              monde entier.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer">Accueil</li>
              <li className="hover:text-blue-600 cursor-pointer">Événements</li>
              <li className="hover:text-blue-600 cursor-pointer">Adhésion</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Assistance</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer">Carrières</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Contactez-nous
              </li>
              <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Partenaires */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-4">Partenaires</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="hover:text-blue-600 cursor-pointer">
                  Nos partenaires
                </li>
                <li className="hover:text-blue-600 cursor-pointer">Membres</li>
              </ul>
            </div>
          </div>

          {/* Contact + Réseaux sociaux */}
          <div>
            <div className="space-y-2 text-sm text-gray-700">
              <p>info@gabonfintech.org</p>
              <p>+234 907 000 0193</p>
              <p>+234 903 000 3013</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a className="p-2 rounded-full bg-blue-700 text-white hover:scale-105 transition">
                <Linkedin size={16} />
              </a>
              <a className="p-2 rounded-full bg-blue-700 text-white hover:scale-105 transition">
                <Instagram size={16} />
              </a>
              <a className="p-2 rounded-full bg-blue-700 text-white hover:scale-105 transition">
                <X size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 text-center text-sm text-gray-600 border-t border-brand-primary pt-10 w-[75vw] m-auto">
          © 2025 Gabon Fintech Hub
        </div>
      </footer>
    </div>
  );
};

export default Footer;
