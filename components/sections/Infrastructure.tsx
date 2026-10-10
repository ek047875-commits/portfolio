"use client";
import { motion } from "framer-motion";
import { Boxes, FileCheck2, Plug, Warehouse } from "lucide-react";

const card =
  "rounded-2xl border border-ink/[0.06] p-8 transition-shadow duration-300 ease-out hover:shadow-lg hover:shadow-ink/5";

const warehouses = [
  ["Vridi, Abidjan", "12 000 m²"],
  ["San-Pédro", "6 500 m²"],
  ["Bouaké", "4 000 m²"],
];

export default function Infrastructure() {
  return (
    <section id="infrastructures" className="bg-surface px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Des quais aux entrepôts, votre import tient dans un seul outil
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          Escale relie les ports, la douane et vos stocks pour que chaque dossier avance sans relance.
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-6">
          {/* Suivi : tuile principale */}
          <div className="dark-zone flex flex-col justify-between rounded-[2rem] bg-ink p-8 text-quai md:col-span-4 md:row-span-2 md:p-10">
            <div>
              <h3 className="font-display text-3xl font-bold">
                Suivi du conteneur, du port de départ à votre porte
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-quai/70">
                Position du navire, retards d&apos;escale et date d&apos;accostage réévaluée chaque jour.
                Vous prévenez vos clients avant qu&apos;ils ne vous appellent.
              </p>
            </div>
            <svg viewBox="0 0 520 180" className="mt-10 w-full" role="img" aria-label="Route maritime de Guangzhou à Abidjan">
              <path d="M30 130 C 140 20, 260 170, 360 70 S 470 40 490 50" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="2" strokeDasharray="4 6" />
              <motion.path
                d="M30 130 C 140 20, 260 170, 360 70 S 470 40 490 50"
                fill="none"
                stroke="#F2B705"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
              <circle cx="30" cy="130" r="6" fill="#F2B705" />
              <circle cx="490" cy="50" r="6" fill="#F2B705" />
              <text x="30" y="156" fill="#E6ECEA" fontSize="14">Guangzhou</text>
              <text x="430" y="32" fill="#E6ECEA" fontSize="14">Abidjan</text>
            </svg>
          </div>

          {/* Dédouanement */}
          <div className={`${card} bg-signal md:col-span-2`}>
            <FileCheck2 aria-hidden size={28} />
            <h3 className="mt-6 font-display text-2xl font-bold">Dédouanement anticipé</h3>
            <p className="mt-3 leading-relaxed text-ink/80">
              La déclaration est prête six jours avant l&apos;accostage. Votre transitaire n&apos;a plus qu&apos;à la valider.
            </p>
          </div>

          {/* Entrepôts */}
          <div className={`${card} bg-quai md:col-span-2`}>
            <Warehouse aria-hidden size={28} className="text-mer" />
            <h3 className="mt-6 font-display text-2xl font-bold">Entrepôts partenaires</h3>
            <ul className="mt-4 divide-y divide-ink/10 text-sm">
              {warehouses.map(([n, s]) => (
                <li key={n} className="flex justify-between py-2.5">
                  <span>{n}</span>
                  <span className="text-ink/60">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Groupage */}
          <div className={`${card} bg-quai md:col-span-3`}>
            <Boxes aria-hidden size={28} className="text-mer" />
            <h3 className="mt-6 font-display text-2xl font-bold">Groupage pour les petits volumes</h3>
            <p className="mt-3 max-w-md leading-relaxed text-ink/70">
              Partagez un conteneur avec d&apos;autres importateurs et ne payez que le volume réellement occupé.
            </p>
          </div>

          {/* API */}
          <div className={`${card} bg-quai md:col-span-3`}>
            <Plug aria-hidden size={28} className="text-mer" />
            <h3 className="mt-6 font-display text-2xl font-bold">Connecté à votre gestion</h3>
            <p className="mt-3 max-w-md leading-relaxed text-ink/70">
              Envoyez coûts de revient, statuts et documents vers votre ERP ou votre logiciel comptable, sans ressaisie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
