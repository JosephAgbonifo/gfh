"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { slugify } from "@/lib/utils";

type NavItem = {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
};

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: "À propos",
      items: [
        { label: "Qui nous sommes", href: "/a_propos/#qui_nous_sommes" },
        { label: "Direction", href: "/a_propos/#direction" },
        { label: "Notre équipe", href: "/a_propos/#notre_equipe" },
        { label: "Postes vacants", href: "/a_propos/#postes_vacants" },
      ],
    },
    {
      label: "Adhésion",
      items: [
        { label: "Formules d'adhésion", href: "/adhesion/#formules" },
        { label: "Devenir membre", href: "/adhesion/#devenir_membre" },
        { label: "Devenir bénévole", href: "/adhesion/#devenir_benevole" },
        { label: "Parrainer un ami", href: "/adhesion/#parrainer" },
        { label: "Nos membres", href: "/membres" },
        { label: "Foire aux questions", href: "/adhesion/#faq" },
      ],
    },
    {
      label: "Communautés",
      items: [
        {
          label: "Innovation et Technologie",
          href: "/communautés/#innovation",
        },
        {
          label: "Réglementation et Politiques",
          href: "/communautés/#reglementation",
        },
        {
          label: "Inclusion Économique",
          href: "/communautés/#inclusion",
        },
        {
          label: "Cybersécurité et Gestion des Risques",
          href: "/communautés/#cybersecurite",
        },
      ],
    },
    {
      label: "Événements",
      items: [
        { label: "Participer à un événement", href: "/evenements/#participer" },
        { label: "Partenariats", href: "/evenements/#partenariats" },
        { label: "Calendrier", href: "/evenements/#calendrier" },
      ],
    },
    {
      label: "Ressources",
      items: [
        { label: "Blog", href: "/ressources/#blog" },
        { label: "Podcast", href: "/ressources/#podcast" },
        { label: "Kit Média", href: "/ressources/#kit_media" },
      ],
    },
    { label: "Nous contacter", href: "/contact" },
  ];

  const desktopNavItem = (item: NavItem) => (
    <div
      key={item.label}
      className="relative h-full flex items-center"
      onMouseEnter={() => setOpenMenu(item.label)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-700 pb-2">
        <Link href={item.href ?? slugify(item.label)}>{item.label}</Link>
        {item.items && <ChevronDown className="h-4 w-4" />}
      </button>

      {item.items && openMenu === item.label && (
        <div className="absolute left-0 top-full w-52 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
          <ul className="py-2">
            {item.items.map((sub) => (
              <li key={sub.label}>
                <Link
                  href={sub.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FinTech Association"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 h-full">
            {navItems.map(desktopNavItem)}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/membership/join"
              className="hidden md:inline-block rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
            >
              Become a Member
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen((p) => !p)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t bg-white"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.items ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between font-medium"
                        onClick={() =>
                          setActiveAccordion(
                            activeAccordion === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronRight
                          className={`transition ${
                            activeAccordion === item.label ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeAccordion === item.label && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-4 mt-2 space-y-2 overflow-hidden"
                          >
                            {item.items.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-sm text-gray-600"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className="block font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                href="/membership/join"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg bg-blue-800 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Become a Member
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
