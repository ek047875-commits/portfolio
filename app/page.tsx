"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowRight, Check, Code2, Globe, Laptop, Mail, Menu, MessageCircle, Moon, Smartphone, Sun, X } from "lucide-react";

const phone = "2250789575039";
const email = "konanemmanuel102@gmail.com";
const message = encodeURIComponent("Bonjour EMMANUEL DEV ! Je souhaite obtenir des informations et un devis pour un projet digital.");
const whatsapp = `https://wa.me/${phone}?text=${message}`;

const services = [
  { icon: Globe, number: "01", title: "Sites web", description: "Sites vitrines, portfolios, blogs et boutiques e-commerce adaptés à votre activité." },
  { icon: Smartphone, number: "02", title: "Applications mobiles", description: "Des applications Android et iOS pensées pour vos clients et vos besoins." },
  { icon: Code2, number: "03", title: "Applications web", description: "Tableaux de bord, plateformes de gestion et outils métier sur mesure." },
  { icon: Laptop, number: "04", title: "Design & maintenance", description: "Interfaces claires, amélioration continue, corrections et accompagnement." },
];

const projects = [
  { tag: "SITE WEB · EN LIGNE", name: "Ménage KGD", description: "Réalisation complète en solo d’un site web pour une entreprise d’entretien ménager. Le site présente son activité et sa présence en ligne.", mark: "01", url: "https://menagekgd.ca", status: "En ligne et fonctionnel" },
  { tag: "APPLICATION MOBILE · EN COURS", name: "Application mobile Ménage KGD", description: "Création en cours d’une application mobile pour l’entreprise Ménage KGD, afin de compléter son expérience digitale avec un service accessible depuis un smartphone.", mark: "02", url: null, status: "Développement en cours" },
  { tag: "SITE WEB · EN LIGNE", name: "Devop's4i — Collectif tech ivoirien", description: "Formé par des passionnés, Devop's4i développe des solutions logicielles innovantes pensées pour les réalités, les talents et les opportunités de la Côte d'Ivoire.", mark: "03", url: "https://emmanuel-194.github.io/devops4final/DEVOPS4I.html", status: "Site web en ligne" },
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = dark ? "theme-dark" : "theme-light";
  return (
    <main className={theme}>
      <div className="site-shell">
        <header className="topbar">
          <a className="brand" href="#accueil" aria-label="EMMANUEL DEV, accueil"><span className="brand-icon"><Code2 size={23} strokeWidth={2.6}/></span><span>EMMANUEL <b>DEV</b><small>VOS IDÉES, NOTRE CODE</small></span></a>
          <nav className={menuOpen ? "nav nav-open" : "nav"}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#realisations" onClick={() => setMenuOpen(false)}>Réalisations</a><a href="#apropos" onClick={() => setMenuOpen(false)}>À propos</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="top-actions"><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Passer en mode jour" : "Passer en mode nuit"}>{dark ? <Sun size={17}/> : <Moon size={17}/>}<span>{dark ? "Mode jour" : "Mode nuit"}</span></button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">{menuOpen ? <X/> : <Menu/>}</button></div>
        </header>

        <section className="hero" id="accueil">
          <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot"/> DÉVELOPPEMENT DIGITAL · CÔTE D’IVOIRE</div><h1>Vos idées.<br/>Notre <span>code.</span></h1><p className="hero-text">Nous créons des sites web et des applications utiles, modernes et accessibles pour donner vie à vos projets.</p><div className="hero-buttons"><a className="button button-primary" href="#contact">Parlons de votre projet <ArrowRight size={17}/></a><a className="button button-quiet" href="#realisations">Voir nos réalisations <ArrowDownRight size={17}/></a></div><div className="hero-note"><span className="note-line"/> Des solutions digitales à prix abordables</div></div>
          <div className="hero-visual" aria-label="Aperçu d'un site web sur ordinateur et mobile"><div className="visual-grid"/><div className="floating-label label-top">DESIGN · CODE · IMPACT</div><div className="browser-window"><div className="browser-bar"><div className="browser-dots"><i/><i/><i/></div><span>emmanueldev.site</span><span className="browser-lock">●</span></div><div className="browser-content"><div className="mock-nav"><b><Code2 size={15}/> E/DEV</b><span>Accueil　 Services　 Contact</span></div><div className="mock-hero"><div><small>VOTRE PRÉSENCE EN LIGNE</small><h3>Construisons<br/>quelque chose<br/><em>de remarquable.</em></h3><div className="mock-cta">Découvrir <ArrowRight size={12}/></div></div><div className="mock-shape"><div className="shape-ring ring-one"/><div className="shape-ring ring-two"/><div className="shape-square"/></div></div><div className="mock-footer"><span>WEB DESIGN</span><span>APPLICATIONS</span><span>VOTRE VISION</span></div></div></div><div className="phone-window"><div className="phone-notch"/><div className="phone-screen"><div className="phone-brand"><Code2 size={14}/> E/DEV <span>☰</span></div><small>CRÉATION DIGITALE</small><h4>Le digital,<br/><em>à votre image.</em></h4><p>Des solutions adaptées à vos ambitions.</p><div className="phone-card"><Globe size={16}/><span>Sites web</span><ArrowRight size={13}/></div><div className="phone-card"><Smartphone size={16}/><span>Apps mobiles</span><ArrowRight size={13}/></div><div className="phone-card"><Code2 size={16}/><span>Apps web</span><ArrowRight size={13}/></div></div></div><div className="floating-label label-bottom"><span/> CONÇU AVEC SOIN</div></div>
        </section>

        <section className="services section" id="services"><div className="section-heading"><div><div className="eyebrow">CE QUE NOUS FAISONS</div><h2>Du concret.<br/><span>Du sur mesure.</span></h2></div><p>De la première idée à la mise en ligne, nous transformons vos besoins en expériences digitales simples et efficaces.</p></div><div className="service-grid">{services.map(({icon: Icon, number, title, description}) => <article className="service-card" key={number}><div className="service-card-top"><span className="service-icon"><Icon size={22}/></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={`Demander un devis pour ${title}`}><ArrowRight size={18}/></a></article>)}</div></section>

        <section className="work section" id="realisations"><div className="section-heading"><div><div className="eyebrow">SÉLECTION DE PROJETS</div><h2>Des idées devenues<br/><span>des réalisations concrètes.</span></h2></div><p>Découvrez quelques projets réalisés ou en préparation. Chaque fiche précise le statut du projet et permet de consulter les réalisations déjà en ligne.</p></div><div className="project-grid">{projects.map(project => <article className="project-card" key={project.mark}><div className={`project-preview preview-${project.mark}`}>{project.mark === "01" || project.mark === "03" ? <img className="project-screenshot" src={project.mark === "01" ? "/projects/menage-kgd-homepage.png" : "/projects/devops4i-homepage.png"} alt={project.mark === "01" ? "Aperçu du site web Ménage KGD" : "Aperçu du site web Devop’s4i"} /> : project.mark === "02" ? <div className="mobile-app-shot"><img src="/projects/menage-kgd-mobile.jpeg" alt="Capture de l’application mobile Ménage KGD installée sur Android" /></div> : <div className="preview-window"><div className="preview-top"><span/><span/><span/></div><div className="preview-layout"><div className="preview-lines"><i/><i/><i/><b/></div><div className="preview-art"><div/></div></div></div>}<span className="project-mark">{project.mark}</span></div><div className="project-info"><span>{project.tag}</span><h3>{project.name}</h3><p>{project.description}</p><span className={`project-status ${project.mark === "02" ? "project-status-progress" : ""}`}>{project.mark === "02" ? <Smartphone size={13}/> : <Check size={13}/>} {project.status}</span>{project.url ? <a className="project-visit" href={project.url} target="_blank" rel="noreferrer">Visiter le site <ArrowRight size={15}/></a> : <span className={`project-placeholder ${project.mark === "02" ? "project-progress-label" : ""}`}>{project.mark === "02" ? "Projet en cours de création" : "Fiche à compléter"}</span>}</div></article>)}</div></section>

        <section className="about-band" id="apropos"><div className="about-symbol"><Code2 size={32}/></div><div><div className="eyebrow">EMMANUEL DEV</div><h2>La bonne solution,<br/><span>au bon prix.</span></h2><p>Chaque projet est différent. Nous échangeons avec vous pour comprendre votre besoin et proposer une solution adaptée à votre budget.</p></div><a className="button button-outline" href={whatsapp} target="_blank" rel="noreferrer">Échanger sur WhatsApp <ArrowRight size={17}/></a></section>

        <section className="contact section" id="contact"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-dot"/> ON PASSE À L’ACTION ?</div><h2>Parlons de<br/><span>votre projet.</span></h2><p>Décrivez-nous votre idée. Nous vous répondrons pour discuter des prochaines étapes et du budget.</p></div><div className="contact-actions"><a className="contact-link whatsapp-link" href={whatsapp} target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle size={22}/></span><span><b>Écrivez-nous sur WhatsApp</b><small>Message prérempli · +225 07 89 57 50 39</small></span><ArrowRight size={19}/></a><a className="contact-link" href={`mailto:${email}?subject=Demande%20de%20devis%20-%20EMMANUEL%20DEV&body=Bonjour%20EMMANUEL%20DEV%2C%0A%0AJe%20souhaite%20discuter%20de%20mon%20projet%20digital.%0A`}><span className="contact-icon"><Mail size={22}/></span><span><b>Contact par e-mail</b><small>{email}</small></span><ArrowRight size={19}/></a><p className="email-note">Un message sera préparé dans votre application de messagerie.</p></div></section>

        <footer className="footer"><a className="brand footer-brand" href="#accueil"><span className="brand-icon"><Code2 size={20}/></span><span>EMMANUEL <b>DEV</b><small>VOS IDÉES, NOTRE CODE</small></span></a><span>© {new Date().getFullYear()} EMMANUEL DEV. Tous droits réservés.</span><a href="#accueil">Retour en haut ↑</a></footer>
      </div>
    </main>
  );
}
