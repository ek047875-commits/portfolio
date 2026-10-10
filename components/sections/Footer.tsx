import { Anchor } from "lucide-react";
import { footerColumns } from "@/data/content";

export default function Footer() {
  return (
    <footer id="contact" className="dark-zone bg-ink px-6 pb-10 pt-24 text-quai md:px-12">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <a href="#" className="flex items-center gap-2 font-display text-xl font-extrabold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-signal text-ink">
              <Anchor size={18} aria-hidden />
            </span>
            Escale
          </a>
          <p className="mt-6 max-w-sm leading-relaxed text-quai/70">
            Recevez chaque mois les changements de réglementation et les délais portuaires qui touchent vos imports.
          </p>
          <form className="mt-6 flex max-w-sm gap-2" action="#">
            <label htmlFor="email" className="sr-only">Adresse e-mail</label>
            <input
              id="email"
              type="email"
              required
              placeholder="vous@entreprise.ci"
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm backdrop-blur-md transition-colors duration-300 placeholder:text-quai/40 focus:border-signal"
            />
            <button
              type="submit"
              className="rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-[#ffc81a]"
            >
              S&apos;abonner
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {footerColumns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <p className="font-display font-bold">{c.title}</p>
              <ul className="mt-5 space-y-3 text-sm text-quai/70">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors duration-300 hover:text-signal">{l}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-8 text-sm text-quai/50 md:flex-row">
        <p>© 2026 Escale. Plateau, Abidjan, Côte d&apos;Ivoire.</p>
        <p>Mentions légales · Confidentialité</p>
      </div>
    </footer>
  );
}
