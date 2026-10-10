import type { ReactNode } from "react";

const styles = {
  primary: "bg-signal text-ink hover:bg-[#ffc81a]",
  dark: "bg-ink text-quai hover:bg-mer",
  ghost: "border border-ink/15 text-ink hover:bg-ink/5",
};

type Props = {
  href: string;
  variant?: keyof typeof styles;
  className?: string;
  children: ReactNode;
};

export default function Button({ href, variant = "primary", className = "", children }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ease-out ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
