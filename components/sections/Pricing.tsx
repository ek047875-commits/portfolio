"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { plans } from "@/data/content";

const periods: { label: string; annual: boolean }[] = [
  { label: "Mensuel", annual: false },
  { label: "Annuel · −20 %", annual: true },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="tarifs" className="px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Des tarifs en FCFA, sans frais cachés au dédouanement
          </h2>
          <div role="group" aria-label="Fréquence de facturation" className="flex w-fit rounded-full bg-surface p-1 text-sm font-semibold">
            {periods.map((p) => (
              <button
                key={p.label}
                type="button"
                aria-pressed={annual === p.annual}
                onClick={() => setAnnual(p.annual)}
                className={`rounded-full px-5 py-2 transition-colors duration-300 ${
                  annual === p.annual ? "bg-ink text-quai" : "text-ink/60 hover:text-ink"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {plans.map((p) => {
            const price = annual ? p.yearly : p.monthly;
            return (
              <article
                key={p.name}
                className={`flex flex-col rounded-[2rem] border p-8 md:p-10 ${
                  p.featured ? "dark-zone border-white/10 bg-ink text-quai lg:-translate-y-4" : "border-ink/[0.08] bg-surface"
                }`}
              >
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? "text-quai/70" : "text-ink/60"}`}>{p.blurb}</p>
                <div className="mt-8 h-14">
                  {price ? (
                    <motion.p
                      key={String(annual)}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <span className="font-display text-5xl font-extrabold">{price}</span>
                      <span className={`ml-2 text-sm ${p.featured ? "text-quai/70" : "text-ink/60"}`}>FCFA / mois</span>
                    </motion.p>
                  ) : (
                    <p className="font-display text-4xl font-extrabold">Sur devis</p>
                  )}
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check aria-hidden size={18} className={`mt-0.5 shrink-0 ${p.featured ? "text-signal" : "text-mer"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="#contact" variant={p.featured ? "primary" : "ghost"} className="mt-10">
                  {p.cta}
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
