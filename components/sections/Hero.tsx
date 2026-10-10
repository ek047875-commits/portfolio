"use client";
import { motion } from "framer-motion";
import { Anchor } from "lucide-react";
import Button from "@/components/ui/Button";
import { nav, trackingSteps } from "@/data/content";

export default function Hero() {
  return (
    <section className="px-6 pb-24 pt-6 md:px-12 md:pb-36">
      <header className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-extrabold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-signal">
            <Anchor size={18} aria-hidden />
          </span>
          Escale
        </a>
        <nav aria-label="Navigation principale" className="hidden gap-8 text-sm md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-ink/70 transition-colors duration-300 hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <Button href="#contact" variant="dark">Demander une démo</Button>
      </header>

      <div className="mx-auto mt-16 grid max-w-7xl items-center gap-14 md:mt-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight md:text-7xl">
            Le conteneur arrive. Les papiers l&apos;attendent déjà.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
            Escale suit chaque import de l&apos;embarquement à la livraison, prépare la déclaration en
            douane avant l&apos;arrivée du navire et chiffre vos frais en FCFA.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#contact">Demander une démo</Button>
            <Button href="#infrastructures" variant="ghost">Voir comment ça marche</Button>
          </div>
          <p className="mt-10 text-sm text-ink/60">
            140 importateurs suivent leurs conteneurs avec Escale, entre Abidjan, San-Pédro et Bouaké.
          </p>
        </div>

        <div className="dark-zone rounded-[2rem] border border-white/10 bg-ink p-7 text-quai shadow-2xl shadow-ink/20 md:p-9">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-5">
            <p className="font-display text-lg font-bold">Conteneur 40&apos; HC</p>
            <p className="text-sm text-quai/60">MSKU 482915-3</p>
          </div>
          <ol className="relative mt-7 space-y-7">
            <span aria-hidden className="absolute bottom-3 left-[11px] top-3 w-px bg-white/15" />
            <motion.span
              aria-hidden
              className="absolute left-[11px] top-3 h-[calc(100%-1.5rem)] w-px origin-top bg-signal"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0.5 }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
            />
            {trackingSteps.map((s, i) => (
              <motion.li
                key={s.title}
                className="relative flex gap-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.3 }}
              >
                <span className="relative mt-0.5 grid h-6 w-6 shrink-0 place-items-center">
                  {s.state === "current" && (
                    <span className="absolute h-6 w-6 animate-ping rounded-full bg-signal/40 motion-reduce:hidden" />
                  )}
                  <span
                    className={`relative h-3 w-3 rounded-full ${
                      s.state === "pending" ? "border border-white/30 bg-ink" : "bg-signal"
                    }`}
                  />
                </span>
                <div>
                  <p className={`font-semibold ${s.state === "pending" ? "text-quai/60" : ""}`}>{s.title}</p>
                  <p className="text-sm text-quai/60">{s.detail}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
