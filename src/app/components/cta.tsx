"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { deterministicRandom } from "@/lib/deterministic-random";

const CTA_PARTICLE_COUNT = 30;

type Particle = {
  width: number;
  height: number;
  top: number;
  left: number;
  duration: number;
};

const createParticle = (index: number): Particle => {
  const baseSeed = index * 11;
  return {
    width: 8 + deterministicRandom(baseSeed + 1) * 22,
    height: 8 + deterministicRandom(baseSeed + 2) * 22,
    top: deterministicRandom(baseSeed + 3) * 100,
    left: deterministicRandom(baseSeed + 4) * 100,
    duration: 6 + deterministicRandom(baseSeed + 5) * 5,
  };
};

export default function CTA() {
  const particles = useMemo(
    () =>
      Array.from({ length: CTA_PARTICLE_COUNT }, (_, index) =>
        createParticle(index)
      ),
    []
  );

  return (
    <section className="relative w-full py-20 md:py-20 overflow-hidden bg-linear-to-r from-brand-secondary to-[midnightblue] text-white">
      {/* Cyber Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* BIGGER, SOFTER, MORE INVITING PARTICLES */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.5), rgba(236,72,153,0.3))",
            filter: "blur(1px)",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0.15, 0.4, 0.15],
            y: [-30, 30, -30],
            x: [0, 20, -20, 0],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Neon glow behind CTA card */}
      <motion.div
        className="absolute inset-0 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,189,248,0.25), rgba(147,51,234,0.2))",
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* CTA Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto px-6"
      >
        <div className=" text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            <span className="text-success">Rejoignez le mouvement :</span>{" "}
            Inscrivez-vous dès aujourd'hui et faites partie de l'évolution de la
            fintech au Gabon.
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-900/40 backdrop-blur-xl border border-white px-4 py-2 rounded-md hover:bg-blue-800/50 transition">
              Devenir membre
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
