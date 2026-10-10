export const nav = [
  { label: "Infrastructures", href: "#infrastructures" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

export type StepState = "done" | "current" | "pending";

export const trackingSteps: { title: string; detail: string; state: StepState }[] = [
  { title: "Embarqué à Guangzhou", detail: "12 octobre · navire MSC Aurora", state: "done" },
  { title: "Déclaration préparée", detail: "Facture, colisage et connaissement vérifiés", state: "done" },
  { title: "En mer", detail: "Arrivée prévue à Abidjan le 14 novembre", state: "current" },
  { title: "Dédouanement", detail: "Droits et taxes estimés : 2 480 000 FCFA", state: "pending" },
  { title: "Livraison", detail: "Entrepôt de Yopougon, créneau à confirmer", state: "pending" },
];

export type Plan = {
  name: string;
  blurb: string;
  monthly: string | null;
  yearly: string | null;
  features: string[];
  cta: string;
  featured: boolean;
};

export const plans: Plan[] = [
  {
    name: "Essentiel",
    blurb: "Pour les importateurs qui structurent leurs premiers flux.",
    monthly: "49 000",
    yearly: "39 200",
    features: ["Jusqu'à 10 dossiers par mois", "Suivi conteneur en temps réel", "Estimation des droits et taxes", "Support par e-mail"],
    cta: "Commencer l'essai",
    featured: false,
  },
  {
    name: "Croissance",
    blurb: "Pour les équipes qui importent chaque semaine.",
    monthly: "149 000",
    yearly: "119 200",
    features: ["Jusqu'à 60 dossiers par mois", "Pré-déclaration en douane", "Groupage LCL et entrepôts inclus", "Accès API et export comptable", "Conseiller dédié, réponse sous 2 h"],
    cta: "Demander une démo",
    featured: true,
  },
  {
    name: "Corridor",
    blurb: "Pour les groupes avec plusieurs sites et plusieurs ports.",
    monthly: null,
    yearly: null,
    features: ["Dossiers illimités", "Multi-entités et multi-ports", "Intégration ERP sur mesure", "Contrat de niveau de service"],
    cta: "Parler à un expert",
    featured: false,
  },
];

export const footerColumns = [
  { title: "Produit", links: ["Suivi conteneur", "Dédouanement", "Entrepôts", "API"] },
  { title: "Entreprise", links: ["À propos", "Carrières", "Presse", "Contact"] },
  { title: "Ressources", links: ["Guide de l'import", "Calculateur de droits", "Centre d'aide", "Statut"] },
];
