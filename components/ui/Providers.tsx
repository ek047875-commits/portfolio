"use client";
import { MotionConfig } from "framer-motion";

// Respecte la préférence « réduire les animations » de l'utilisateur.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
