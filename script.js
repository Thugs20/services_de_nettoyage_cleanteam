/* ============================================================
   CLEANPRO SERVICES — script.js
   Fonctionnalités : Menu burger, Multi-langue, Hero slider,
   Thèmes (Clair/Sombre/Nature), Scroll animations,
   Lightbox galerie, EmailJS, Stats counter, Scroll-to-top
   Auteur : Fabrice Houeto (projet de démonstration)
   ============================================================ */

/* ──────────────────────────────────────────────
   1. HAMBURGER — toujours présent
────────────────────────────────────────────── */
const hamburger = document.getElementById("hamburger");
const navMenu   = document.getElementById("nav-menu");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = navMenu.classList.toggle("active");
  hamburger.classList.toggle("open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
});

// Fermer en cliquant en dehors
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
    document.body.classList.remove("nav-open");
  }
});

// Fermer au clic sur un lien nav
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
    document.body.classList.remove("nav-open");
  });
});

// Touche Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
    document.body.classList.remove("nav-open");
  }
});

/* ──────────────────────────────────────────────
   2. HEADER — shadow au scroll
────────────────────────────────────────────── */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
  toggleScrollTop();
  highlightNav();
}, { passive: true });

/* ──────────────────────────────────────────────
   3. SCROLL FLUIDE + NAV ACTIVE
────────────────────────────────────────────── */
document.querySelectorAll("nav a[href^='#']").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

function highlightNav() {
  const sections = document.querySelectorAll("section[id], header[id]");
  let current = "";

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute("id");
    }
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

/* ──────────────────────────────────────────────
   4. THEME SWITCHER (Clair / Sombre / Nature)
────────────────────────────────────────────── */
const html         = document.documentElement;
const themeButtons = document.querySelectorAll(".theme-btn");

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("cleanpro-theme", theme);

  themeButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });
}

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem("cleanpro-theme") || "light";
setTheme(savedTheme);

themeButtons.forEach(btn => {
  btn.addEventListener("click", () => setTheme(btn.dataset.theme));
});

/* ──────────────────────────────────────────────
   5. MULTI-LANGUE
────────────────────────────────────────────── */
const translations = {
  fr: {
    demo_text: "⚗️ Projet de démonstration – Données fictives",
    home: "Accueil", about: "À propos", services: "Services",
    why: "Pourquoi nous", projects: "Réalisations", contact: "Contact",

    hero_badge: "✦ Services Premium",
    hero_title: "Un nettoyage professionnel pour vos espaces",
    hero_text:  "Des solutions de nettoyage fiables pour les entreprises et particuliers.",
    hero_btn1:  "Demander un devis",
    hero_btn2:  "Voir nos services",
    stat1: "Clients satisfaits", stat2: "Services offerts", stat3: "Ans d'expérience",

    about_label: "Notre histoire",
    about_title: "À propos de CleanPro Services",
    about_p1: "CleanPro Services est une entreprise spécialisée dans les services professionnels de nettoyage pour les particuliers et les entreprises.",
    about_p2: "Grâce à une équipe qualifiée et à des équipements modernes, nous garantissons des espaces propres, sains et agréables.",
    about_p3: "Notre mission est d'offrir des solutions de nettoyage efficaces, fiables et respectueuses de l'environnement.",
    about_cta: "En savoir plus",
    about_badge: "Certifié Qualité",

    services_label: "Ce que nous faisons",
    services_title: "Nos Services",
    service1_title: "Nettoyage de bureaux",    service1_text: "Maintenez vos espaces de travail propres et professionnels.",
    service2_title: "Nettoyage de maisons",   service2_text: "Un environnement propre et sain pour votre famille.",
    service3_title: "Nettoyage après travaux",service3_text: "Remise en état après chantier ou rénovation.",
    service4_title: "Nettoyage industriel",   service4_text: "Solutions professionnelles pour les industries.",
    service5_title: "Nettoyage de vitres",    service5_text: "Des vitres impeccables pour une meilleure luminosité.",
    service6_title: "Nettoyage de tapis",     service6_text: "Nettoyage en profondeur de vos tapis et moquettes.",
    service7_title: "Nettoyage écologique",   service7_text: "Utilisation de produits respectueux de l'environnement pour un nettoyage efficace tout en protégeant votre santé et la planète.",
    service8_title: "Entretien des espaces verts", service8_text: "Nous proposons également un entretien régulier de vos jardins et espaces extérieurs : tonte, désherbage et nettoyage des allées.",
    service_cta: "Demander →",

    why_label: "Nos engagements",
    why_title: "Pourquoi nous choisir",
    why1_title: "Personnel qualifié",    why1_text: "Une équipe formée et expérimentée.",
    why2_title: "Produits écologiques",  why2_text: "Respect de l'environnement et de votre santé.",
    why3_title: "Équipements modernes",  why3_text: "Des outils professionnels pour un nettoyage efficace.",
    why4_title: "Service rapide",        why4_text: "Intervention rapide et flexible.",

    pricing_label: "Transparence",
    pricing_title: "Tarifs",
    pricing1_title: "Bureaux",           pricing1_text: "Tarifs personnalisés selon la surface.",
    pricing2_title: "Maisons",           pricing2_text: "Tarifs sur devis selon les besoins.",
    pricing3_title: "Nettoyage chantier",pricing3_text: "Tarifs adaptés à chaque projet.",
    pricing_popular: "Populaire",
    pricing_quote: "Sur devis",
    pricing_cta: "Demander un devis",

    coverage_title: "Zone d'intervention",
    coverage_text1: "Nous intervenons principalement à Cotonou, Porto-Novo et Abomey-Calavi.",
    coverage_text2: "Nous pouvons également nous déplacer sur toute l'étendue du territoire national.",
    coverage_text3: "Si vous êtes hors de ces zones, contactez-nous pour organiser une intervention.",

    projects_label: "Notre portfolio",
    projects_title: "Nos Réalisations",

    testimonials_label: "Ils parlent de nous",
    testimonials_title: "Avis de Nos Clients",
    testimonials_intro: "La satisfaction de nos clients est notre priorité. Découvrez les témoignages de ceux qui nous font confiance pour l'entretien et la propreté de leurs espaces.",
    client_role: "Cliente",
    pro_client_role: "Client Professionnel",
    private_client_role: "Particulier",
    testimonial1: "Service impeccable et équipe très professionnelle. Le travail est toujours réalisé avec sérieux et efficacité. Je recommande vivement leurs services.",
    testimonial2: "Notre bureau est toujours parfaitement propre grâce à leur équipe. Un service fiable, ponctuel et très professionnel.",
    testimonial3: "Très satisfait du nettoyage après chantier. L'équipe a laissé les lieux impeccables. Un service que je recommande sans hésiter.",

    contact_label: "Parlons-en",
    contact_title: "Contactez-nous",
    contact_address_label: "Adresse",
    contact_phone_label: "Téléphone",
    contact_hours_label: "Horaires",
    contact_hours: "Lun–Sam : 07h–19h",
    contact_name: "Nom complet",
    contact_email_label: "Email",
    contact_email: "Email",
    contact_phone: "Téléphone",
    contact_city: "Ville / Localité",
    contact_service: "Type de service",
    contact_service_options: ["Nettoyage maison","Nettoyage bureaux","Nettoyage chantier","Nettoyage vitres","Nettoyage industriel"],
    contact_message: "Votre message",
    contact_send: "Envoyer",

    creator_label: "✦ Développeur du site",
    creator_title: "Site conçu par Fabrice Houeto",
    creator_desc: "Développeur Web passionné, je conçois des sites modernes, rapides et adaptés aux besoins des entreprises, restaurants et entrepreneurs. Mon objectif est d'aider les professionnels à avoir une présence en ligne élégante et efficace. Besoin d'un site web professionnel pour votre entreprise ? Contactez-moi dès aujourd'hui.",
    creator_call: "Appeler",
    creator_whatsapp: "WhatsApp",
    creator_site: "Voir mon site officiel",

    footer_logo: "CleanPro Services",
    footer_slogan: "Votre propreté, notre priorité",
    footer_nav_title: "Navigation",
    footer_services_title: "Services",
    footer_menu_1: "Accueil", footer_menu_2: "Services",
    footer_menu_3: "Contact", footer_menu_4: "FAQ",
    fs1: "Bureaux", fs2: "Maisons", fs3: "Chantier", fs4: "Écologique",
    footer_newsletter_title: "Newsletter",
    footer_newsletter_text: "Abonnez-vous pour nos offres exclusives",
    footer_newsletter_placeholder: "Votre email",
    footer_newsletter_btn: "S'abonner",
    footer_copy: "© 2026 CleanPro Services – Tous droits réservés",
    footer_demo: "⚠️ Ceci est un projet de démonstration. Toutes les données sont fictives."
  },
  en: {
    demo_text: "⚗️ Demo project – Fictional data",
    home: "Home", about: "About", services: "Services",
    why: "Why us", projects: "Projects", contact: "Contact",

    hero_badge: "✦ Premium Services",
    hero_title: "Professional cleaning for your spaces",
    hero_text:  "Reliable cleaning solutions for businesses and individuals.",
    hero_btn1:  "Request a quote",
    hero_btn2:  "View our services",
    stat1: "Happy clients", stat2: "Services offered", stat3: "Years of experience",

    about_label: "Our story",
    about_title: "About CleanPro Services",
    about_p1: "CleanPro Services is a company specializing in professional cleaning services for individuals and businesses.",
    about_p2: "With a qualified team and modern equipment, we guarantee clean, healthy and pleasant spaces.",
    about_p3: "Our mission is to provide effective, reliable, and environmentally friendly cleaning solutions.",
    about_cta: "Learn more",
    about_badge: "Quality Certified",

    services_label: "What we do",
    services_title: "Our Services",
    service1_title: "Office Cleaning",       service1_text: "Keep your workspaces clean and professional.",
    service2_title: "House Cleaning",        service2_text: "A clean and healthy environment for your family.",
    service3_title: "Post-Construction",     service3_text: "Restoration after construction or renovation.",
    service4_title: "Industrial Cleaning",   service4_text: "Professional solutions for industries.",
    service5_title: "Window Cleaning",       service5_text: "Spotless windows for better brightness.",
    service6_title: "Carpet Cleaning",       service6_text: "Deep cleaning of your carpets and rugs.",
    service7_title: "Eco-Friendly Cleaning", service7_text: "Using environmentally friendly products for effective cleaning while protecting health and the planet.",
    service8_title: "Green Space Maintenance",service8_text: "We also offer regular garden and outdoor maintenance: mowing, weeding, and path cleaning.",
    service_cta: "Request →",

    why_label: "Our commitments",
    why_title: "Why choose us",
    why1_title: "Qualified staff",    why1_text: "A trained and experienced team.",
    why2_title: "Eco-friendly",       why2_text: "Respect for the environment and your health.",
    why3_title: "Modern equipment",   why3_text: "Professional tools for effective cleaning.",
    why4_title: "Fast service",       why4_text: "Quick and flexible intervention.",

    pricing_label: "Transparency",
    pricing_title: "Pricing",
    pricing1_title: "Offices",            pricing1_text: "Customized prices depending on the surface.",
    pricing2_title: "Houses",             pricing2_text: "Prices on quote depending on needs.",
    pricing3_title: "Construction clean", pricing3_text: "Prices adapted to each project.",
    pricing_popular: "Popular",
    pricing_quote: "On quote",
    pricing_cta: "Request a quote",

    coverage_title: "Service Area",
    coverage_text1: "We mainly operate in Cotonou, Porto-Novo and Abomey-Calavi.",
    coverage_text2: "We can also travel throughout the entire national territory.",
    coverage_text3: "If you are outside these areas, contact us to organize an intervention.",

    projects_label: "Our portfolio",
    projects_title: "Our Projects",

    testimonials_label: "They talk about us",
    testimonials_title: "Customer Reviews",
    testimonials_intro: "Customer satisfaction is our priority. Discover testimonials from those who trust us for the maintenance and cleanliness of their spaces.",
    client_role: "Client", pro_client_role: "Professional Client", private_client_role: "Individual",
    testimonial1: "Excellent service and very professional team. The work is always done with seriousness and efficiency. I highly recommend their services.",
    testimonial2: "Our office is always perfectly clean thanks to their team. A reliable, punctual and very professional service.",
    testimonial3: "Very satisfied with the post-construction cleaning. The team left the place spotless. A service I recommend without hesitation.",

    contact_label: "Let's talk",
    contact_title: "Contact Us",
    contact_address_label: "Address",
    contact_phone_label: "Phone",
    contact_hours_label: "Hours",
    contact_hours: "Mon–Sat: 7am–7pm",
    contact_name: "Full name",
    contact_email_label: "Email",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_city: "City / Area",
    contact_service: "Service type",
    contact_service_options: ["House cleaning","Office cleaning","Construction cleaning","Window cleaning","Industrial cleaning"],
    contact_message: "Your message",
    contact_send: "Send",

    creator_label: "✦ Site developer",
    creator_title: "Site designed by Fabrice Houeto",
    creator_desc: "Passionate Web Developer, I design modern, fast websites tailored to the needs of businesses, restaurants and entrepreneurs. My goal is to help professionals have an elegant and effective online presence. Need a professional website for your business? Contact me today.",
    creator_call: "Call", creator_whatsapp: "WhatsApp", creator_site: "Visit my official site",

    footer_logo: "CleanPro Services",
    footer_slogan: "Your cleanliness, our priority",
    footer_nav_title: "Navigation",
    footer_services_title: "Services",
    footer_menu_1: "Home", footer_menu_2: "Services",
    footer_menu_3: "Contact", footer_menu_4: "FAQ",
    fs1: "Offices", fs2: "Houses", fs3: "Construction", fs4: "Eco-friendly",
    footer_newsletter_title: "Newsletter",
    footer_newsletter_text: "Subscribe for our exclusive offers",
    footer_newsletter_placeholder: "Your email",
    footer_newsletter_btn: "Subscribe",
    footer_copy: "© 2026 CleanPro Services – All rights reserved",
    footer_demo: "⚠️ This is a demo project. All data is fictional."
  },
  es: {
    demo_text: "⚗️ Proyecto de demostración – Datos ficticios",
    home: "Inicio", about: "Acerca de", services: "Servicios",
    why: "Por qué nosotros", projects: "Realizaciones", contact: "Contacto",

    hero_badge: "✦ Servicios Premium",
    hero_title: "Limpieza profesional para sus espacios",
    hero_text:  "Soluciones de limpieza confiables para empresas y particulares.",
    hero_btn1:  "Solicitar presupuesto",
    hero_btn2:  "Ver nuestros servicios",
    stat1: "Clientes satisfechos", stat2: "Servicios ofrecidos", stat3: "Años de experiencia",

    about_label: "Nuestra historia",
    about_title: "Acerca de CleanPro Services",
    about_p1: "CleanPro Services es una empresa especializada en servicios de limpieza profesional para particulares y empresas.",
    about_p2: "Con un equipo calificado y equipos modernos, garantizamos espacios limpios, saludables y agradables.",
    about_p3: "Nuestra misión es ofrecer soluciones de limpieza efectivas, confiables y respetuosas con el medio ambiente.",
    about_cta: "Saber más",
    about_badge: "Certificado de Calidad",

    services_label: "Lo que hacemos",
    services_title: "Nuestros Servicios",
    service1_title: "Limpieza de oficinas",  service1_text: "Mantenga sus espacios de trabajo limpios y profesionales.",
    service2_title: "Limpieza de hogares",   service2_text: "Un entorno limpio y saludable para su familia.",
    service3_title: "Limpieza post-obra",    service3_text: "Puesta en orden después de obras o renovaciones.",
    service4_title: "Limpieza industrial",   service4_text: "Soluciones profesionales para industrias.",
    service5_title: "Limpieza de ventanas",  service5_text: "Ventanas impecables para mejor luminosidad.",
    service6_title: "Limpieza de alfombras", service6_text: "Limpieza profunda de alfombras y moquetas.",
    service7_title: "Limpieza ecológica",    service7_text: "Uso de productos ecológicos para una limpieza eficaz protegiendo su salud y el planeta.",
    service8_title: "Mantenimiento jardines",service8_text: "También ofrecemos mantenimiento regular de jardines: corte de césped, desyerbado y limpieza de caminos.",
    service_cta: "Solicitar →",

    why_label: "Nuestros compromisos",
    why_title: "Por qué elegirnos",
    why1_title: "Personal cualificado", why1_text: "Un equipo formado y experimentado.",
    why2_title: "Productos ecológicos", why2_text: "Respeto al medio ambiente y su salud.",
    why3_title: "Equipos modernos",     why3_text: "Herramientas profesionales para limpieza eficaz.",
    why4_title: "Servicio rápido",      why4_text: "Intervención rápida y flexible.",

    pricing_label: "Transparencia",
    pricing_title: "Precios",
    pricing1_title: "Oficinas",    pricing1_text: "Precios personalizados según la superficie.",
    pricing2_title: "Hogares",     pricing2_text: "Precios a presupuesto según necesidades.",
    pricing3_title: "Post-obra",   pricing3_text: "Precios adaptados a cada proyecto.",
    pricing_popular: "Popular",
    pricing_quote: "A presupuesto",
    pricing_cta: "Solicitar presupuesto",

    coverage_title: "Zona de intervención",
    coverage_text1: "Operamos principalmente en Cotonou, Porto-Novo y Abomey-Calavi.",
    coverage_text2: "También podemos desplazarnos por todo el territorio nacional.",
    coverage_text3: "Si está fuera de estas zonas, contáctenos para organizar una intervención.",

    projects_label: "Nuestro portafolio",
    projects_title: "Nuestras Realizaciones",

    testimonials_label: "Hablan de nosotros",
    testimonials_title: "Opiniones de Clientes",
    testimonials_intro: "La satisfacción de nuestros clientes es nuestra prioridad. Descubra los testimonios de quienes confían en nosotros.",
    client_role: "Clienta", pro_client_role: "Cliente Profesional", private_client_role: "Particular",
    testimonial1: "Servicio impecable y equipo muy profesional. El trabajo siempre se realiza con seriedad y eficiencia. Lo recomiendo ampliamente.",
    testimonial2: "Nuestra oficina siempre está perfectamente limpia gracias a su equipo. Un servicio fiable, puntual y muy profesional.",
    testimonial3: "Muy satisfecho con la limpieza post-obra. El equipo dejó el lugar impecable. Un servicio que recomiendo sin dudar.",

    contact_label: "Hablemos",
    contact_title: "Contáctenos",
    contact_address_label: "Dirección",
    contact_phone_label: "Teléfono",
    contact_hours_label: "Horarios",
    contact_hours: "Lun–Sáb: 7h–19h",
    contact_name: "Nombre completo",
    contact_email_label: "Correo",
    contact_email: "Correo electrónico",
    contact_phone: "Teléfono",
    contact_city: "Ciudad / Localidad",
    contact_service: "Tipo de servicio",
    contact_service_options: ["Limpieza hogar","Limpieza oficinas","Limpieza post-obra","Limpieza ventanas","Limpieza industrial"],
    contact_message: "Su mensaje",
    contact_send: "Enviar",

    creator_label: "✦ Desarrollador del sitio",
    creator_title: "Sitio diseñado por Fabrice Houeto",
    creator_desc: "Desarrollador Web apasionado, diseño sitios modernos y rápidos adaptados a empresas, restaurantes y emprendedores. Mi objetivo es ayudar a los profesionales a tener una presencia online elegante. ¿Necesita un sitio web profesional? Contácteme hoy.",
    creator_call: "Llamar", creator_whatsapp: "WhatsApp", creator_site: "Ver mi sitio oficial",

    footer_logo: "CleanPro Services",
    footer_slogan: "Su limpieza, nuestra prioridad",
    footer_nav_title: "Navegación",
    footer_services_title: "Servicios",
    footer_menu_1: "Inicio", footer_menu_2: "Servicios",
    footer_menu_3: "Contacto", footer_menu_4: "FAQ",
    fs1: "Oficinas", fs2: "Hogares", fs3: "Post-obra", fs4: "Ecológico",
    footer_newsletter_title: "Boletín",
    footer_newsletter_text: "Suscríbase para nuestras ofertas exclusivas",
    footer_newsletter_placeholder: "Su correo electrónico",
    footer_newsletter_btn: "Suscribirse",
    footer_copy: "© 2026 CleanPro Services – Todos los derechos reservados",
    footer_demo: "⚠️ Este es un proyecto de demostración. Todos los datos son ficticios."
  },
  yo: {
    demo_text: "⚗️ Iṣẹ́ àfihàn – Ìsọfúnni irọ́",
    home: "Ilé", about: "Nípa wa", services: "Àwọn Iṣẹ́",
    why: "Ìdí tí ó fi yẹ", projects: "Àṣeyọrí", contact: "Kànsí",
    hero_badge: "✦ Àwọn Iṣẹ́ Gíga",
    hero_title: "Ìmọ tó dára fún àyíká rẹ",
    hero_text:  "Àwọn ojútùú ìmọ tó ṣeéfọkàn fún àwọn ilé-iṣẹ́ àti àwọn ènìyàn.",
    hero_btn1:  "Béèrè ìdíyelé", hero_btn2: "Wo àwọn iṣẹ́ wa",
    stat1: "Àwọn onígbàgbọ́", stat2: "Àwọn iṣẹ́", stat3: "Ọdún ìrírí",
    about_label: "Ìtàn wa",
    about_title: "Nípa CleanPro Services",
    about_p1: "CleanPro Services jẹ́ ilé-iṣẹ́ tó ń pèsè àwọn iṣẹ́ ìmọ fún àwọn ènìyàn àti àwọn ilé-iṣẹ́.",
    about_p2: "Pẹ̀lú ẹgbẹ́ tó ní ìmọ̀ àti ohun èlò ìgbàódì, a ṣ'ẹ̀rí pé àyíká yín máa jẹ́ mímọ̀.",
    about_p3: "Àfojúsùn wa ni láti pèsè àwọn ojútùú ìmọ tó mún ṣiṣẹ́, tó ṣeéfọkàn àti tó bọ̀wọ̀ fún àyíká.",
    about_cta: "Mọ̀ síi", about_badge: "Àmúlò Àyẹ̀wò",
    services_label: "Ohun tí a ń ṣe", services_title: "Àwọn Iṣẹ́ Wa",
    service1_title: "Ìmọ ọ́fíìsì",  service1_text: "Jẹ́ kí àwọn àgbègbè iṣẹ́ rẹ mọ́.",
    service2_title: "Ìmọ ilé",       service2_text: "Àyíká mímọ̀ fún ìdílé rẹ.",
    service3_title: "Ìmọ lẹ́yìn ikọ́lé",service3_text: "Ìtúnṣe lẹ́yìn ikọ́lé àtúnṣe.",
    service4_title: "Ìmọ ìlé-iṣẹ́",  service4_text: "Àwọn ojútùú ọjọgbọ́n fún àwọn ilé-iṣẹ́.",
    service5_title: "Ìmọ fèrèsé",    service5_text: "Fèrèsé tó mọ́ fún ìmọlẹ̀ tó dára.",
    service6_title: "Ìmọ kárpẹ́ẹ̀tì", service6_text: "Ìmọ gìn-ún fún àwọn kárpẹ́ẹ̀tì.",
    service7_title: "Ìmọ àyíká",     service7_text: "Lílo àwọn ọjà àyíká fún ìmọ tó mún ṣiṣẹ́.",
    service8_title: "Àbójútó ọgbà",  service8_text: "A tún pèsè àbójútó ọ̀gàn àti àwọn àgbègbè ìta.",
    service_cta: "Béèrè →",
    why_label: "Àwọn ìgbẹ́kẹ̀lé wa", why_title: "Ìdí tí ó fi yẹ",
    why1_title: "Àwọn òṣìṣẹ́ tó ní ìmọ̀", why1_text: "Ẹgbẹ́ tó ti gbẹ́kọ̀ àti tó ní ìrírí.",
    why2_title: "Àwọn ọjà àyíká",          why2_text: "Ọ̀wọ̀ fún àyíká àti ìlera rẹ.",
    why3_title: "Ohun èlò ìgbàódì",         why3_text: "Àwọn irinṣẹ́ ọjọgbọ́n.",
    why4_title: "Iṣẹ́ yára",                 why4_text: "Ìdásí tó yára àti tó rọ̀.",
    pricing_label: "Ìdájọ́", pricing_title: "Ìdíyelé",
    pricing1_title: "Ọ́fíìsì",   pricing1_text: "Ìdíyelé tó bá ipò mu.",
    pricing2_title: "Ilé",       pricing2_text: "Ìdíyelé lórí ìbéèrè.",
    pricing3_title: "Lẹ́yìn ikọ́lé",pricing3_text: "Ìdíyelé tó bá iṣẹ́ kọ̀ọ̀kan.",
    pricing_popular: "Olókìkí", pricing_quote: "Lórí ìbéèrè", pricing_cta: "Béèrè ìdíyelé",
    coverage_title: "Àgbègbè Iṣẹ́",
    coverage_text1: "A ń ṣiṣẹ́ ní Cotonou, Porto-Novo àti Abomey-Calavi.",
    coverage_text2: "A lè tún rin ìrìn àjò jákèjádò orílẹ̀-èdè náà.",
    coverage_text3: "Bí o bá wà ní ìta àwọn àgbègbè wọ̀nyí, kànsí wa.",
    projects_label: "Àkójọpọ̀ wa", projects_title: "Àṣeyọrí Wa",
    testimonials_label: "Wọ́n sọ nínú wa",
    testimonials_title: "Àwọn Èrò Onígbàgbọ́",
    testimonials_intro: "Ìtẹ́lọ́rùn àwọn onígbàgbọ́ wa ni àfojúsùn wa.",
    client_role: "Onígbàgbọ́", pro_client_role: "Onígbàgbọ́ Ọjọgbọ́n", private_client_role: "Ẹnìkọ̀ọ̀kan",
    testimonial1: "Iṣẹ́ tó dára àti ẹgbẹ́ tó ní ọjọgbọ́n. Mo gbàníyànjú.",
    testimonial2: "Ọ́fíìsì wa máa ń mọ́ nígbà gbogbo. Iṣẹ́ tó ṣeéfọkàn.",
    testimonial3: "Mo ní ìtẹ́lọ́rùn pẹ̀lú ìmọ lẹ́yìn ikọ́lé. Mo gbàníyànjú.",
    contact_label: "Jẹ́ ká sọrọ̀",
    contact_title: "Kànsí Wa",
    contact_address_label: "Àdírẹ́sì", contact_phone_label: "Fóònù",
    contact_hours_label: "Àkókò", contact_hours: "Ẹti–Sát: 7h–19h",
    contact_name: "Orúkọ kíkún", contact_email_label: "Ímeèlì",
    contact_email: "Ímeèlì", contact_phone: "Fóònù",
    contact_city: "Ìlú / Àgbègbè",
    contact_service: "Irú iṣẹ́",
    contact_service_options: ["Ìmọ ilé","Ìmọ ọ́fíìsì","Ìmọ lẹ́yìn ikọ́lé","Ìmọ fèrèsé","Ìmọ ìlé-iṣẹ́"],
    contact_message: "Ìfiranṣẹ́ rẹ", contact_send: "Fi ránṣẹ́",
    creator_label: "✦ Olùṣẹ̀dá ààyè náà",
    creator_title: "Ààyè yìí jẹ́ ìṣẹ̀dá Fabrice Houeto",
    creator_desc: "Olùgbéjáde Ayélujára tó fẹ́ràn iṣẹ́ rẹ̀, mo ń ṣẹ̀dá àwọn ààyè ìgbàódì, yára àti tó bá àìnídí àwọn ilé-iṣẹ́ mu.",
    creator_call: "Pè", creator_whatsapp: "WhatsApp", creator_site: "Wo ààyè mi",
    footer_logo: "CleanPro Services", footer_slogan: "Ìmọ rẹ, àfojúsùn wa",
    footer_nav_title: "Atọ́nà", footer_services_title: "Àwọn Iṣẹ́",
    footer_menu_1: "Ilé", footer_menu_2: "Àwọn Iṣẹ́",
    footer_menu_3: "Kànsí", footer_menu_4: "FAQ",
    fs1: "Ọ́fíìsì", fs2: "Ilé", fs3: "Lẹ́yìn ikọ́lé", fs4: "Àyíká",
    footer_newsletter_title: "Ìwé Ìròyìn",
    footer_newsletter_text: "Fọwọ́ sí fún àwọn àṣẹ̀yọrí àkànjí",
    footer_newsletter_placeholder: "Ímeèlì rẹ",
    footer_newsletter_btn: "Fọwọ́ sí",
    footer_copy: "© 2026 CleanPro Services – Gbogbo ẹ̀tọ́ ni a tọ́jú",
    footer_demo: "⚠️ Iṣẹ́ àfihàn ni èyí. Gbogbo ìsọfúnni jẹ́ irọ́."
  },
  goun: {
    demo_text: "⚗️ Projet de démonstration – Donnée fictives",
    home: "Gbè", about: "Mǐ sín", services: "Wema",
    why: "Nukɔn", projects: "Wema kpɔn", contact: "Kanlin",
    hero_badge: "✦ Wema Gɔ́ngɔ́n",
    hero_title: "Wema naxia ɖò fí ɖé mǐtɔn",
    hero_text:  "Wema bɛ mǐ na wà dó tɔ́n ɖò azɔwanú kpowun kpo mɛ ɖeɖee lɛ kpo.",
    hero_btn1:  "Byɔ mɛ dó fí ɖé we sín wema",
    hero_btn2:  "Kpɔn wema lɛ",
    stat1: "Mɛ ɖuɖu", stat2: "Wema lɛ", stat3: "Xwè sín wema",
    about_label: "Mǐ sín gbè",
    about_title: "CleanPro Services sín",
    about_p1: "CleanPro Services nyí azɔwanú ɖé bɛ nɔ bló wema naxia.",
    about_p2: "Gbejinɔtɔ́ lɛ kpo azɔwanú ɖaxó lɛ kpo sín gblamɛ, mǐ hɛn ali ɖó bo na nɔ dó zán fí.",
    about_p3: "Mǐ sín jlǒ nyí bló wema naxia e dó zán bo hɛn gbɔ na fí.",
    about_cta: "Mɔ nukɔn ɖevo", about_badge: "Mɛjitɔ́",
    services_label: "Mǐ nɔ bló", services_title: "Wema Mǐtɔn",
    service1_title: "Wema biro",    service1_text: "Hɛn biro mitɔn naxia.",
    service2_title: "Wema xwé",     service2_text: "Fí naxia bo ɖó dɔ̌ nú asì.",
    service3_title: "Wema lɛ́yìn ikọ́lé",service3_text: "Wema gudo tɔn lɛ́yìn.",
    service4_title: "Wema ɖaxó",    service4_text: "Wema ɖaxó nú azɔwanú.",
    service5_title: "Wema fèrèsé",  service5_text: "Fèrèsé e ɖó zán fín.",
    service6_title: "Wema kárpẹ́ẹ̀tì",service6_text: "Wema kárpẹ́ẹ̀tì ɖaxó.",
    service7_title: "Wema gbɛ",     service7_text: "Dó zán nǔ gbɛtɔ́ sín.",
    service8_title: "Wema ọgbà",    service8_text: "Mǐ nɔ bló wema ọgbà.",
    service_cta: "Byɔ →",
    why_label: "Mǐ sín gbe", why_title: "Nukɔn",
    why1_title: "Gbejinɔtɔ́", why1_text: "Gbejinɔtɔ́ e ɖó wema.",
    why2_title: "Nǔ gbɛ",    why2_text: "Nǔ gbɛtɔ́ sín kpo azan sín.",
    why3_title: "Azɔwanú",   why3_text: "Azɔwanú ɖaxó nú wema.",
    why4_title: "Wema jɛ",   why4_text: "Wema jɛ kpowun.",
    pricing_label: "Gbè", pricing_title: "Wema dó",
    pricing1_title: "Biro",   pricing1_text: "Wema dó biro.",
    pricing2_title: "Xwé",    pricing2_text: "Wema dó xwé.",
    pricing3_title: "Ikọ́lé",  pricing3_text: "Wema dó ikọ́lé.",
    pricing_popular: "Mɛ ɖuɖu", pricing_quote: "Gbè dó", pricing_cta: "Byɔ gbè",
    coverage_title: "Fí Wema",
    coverage_text1: "Mǐ nɔ wà ɖò Cotonou, Porto-Novo kpo Abomey-Calavi.",
    coverage_text2: "Mǐ lɛ́ sixu yì fí gbɛtɔ́.",
    coverage_text3: "Bɛ ɖò fí ɖevo, kanlin mǐ.",
    projects_label: "Wema mǐtɔn", projects_title: "Wema Mǐ Bló",
    testimonials_label: "Wɛ nɔ ɖɔ",
    testimonials_title: "Mɛ ɖuɖu sín",
    testimonials_intro: "Mɛ ɖuɖu sín gbè nyí nukɔn tɔn.",
    client_role: "Mɛ ɖuɖu", pro_client_role: "Azɔwanú", private_client_role: "Mɛɖé",
    testimonial1: "Wema ɖaxó kpo gbejinɔtɔ́ lɛ kpo. Un nɔ xlɛ́.",
    testimonial2: "Biro mǐtɔn nɔ naxia. Wema bɛ mǐ na wà dó tɔ́n.",
    testimonial3: "Un ɖó gbè ɖò wema gudo tɔn lɛ́yìn. Un nɔ xlɛ́.",
    contact_label: "Ɖɔ xó",
    contact_title: "Kanlin Mǐ",
    contact_address_label: "Fí", contact_phone_label: "Fóòn",
    contact_hours_label: "Hwenu", contact_hours: "Sín Mɔ̌n zan 7h–19h",
    contact_name: "Nyikɔ mitɔn", contact_email_label: "Ímeèlì",
    contact_email: "Ímeèlì", contact_phone: "Fóòn",
    contact_city: "Tɔ́wun",
    contact_service: "Wema irú",
    contact_service_options: ["Wema xwé","Wema biro","Wema lẹ́yìn ikọ́lé","Wema fèrèsé","Wema industriel"],
    contact_message: "Dzɔ wɛ", contact_send: "Kpɔ dzɔ",
    creator_label: "✦ Mɛ bló",
    creator_title: "Fabrice Houeto wɛ bló",
    creator_desc: "Un nyí mɛ ɖé e nɔ bló fí ɖò Internet bo nɔ xlɛ́ azɔwanú lɛ.",
    creator_call: "Ylɔ", creator_whatsapp: "WhatsApp", creator_site: "Kpɔn fí mitɔn",
    footer_logo: "CleanPro Services", footer_slogan: "Dzɔ dzɔ wɛ, gbɛ wɛ kpɔn",
    footer_nav_title: "Atɔn", footer_services_title: "Wema",
    footer_menu_1: "Gbè", footer_menu_2: "Wema",
    footer_menu_3: "Kanlin", footer_menu_4: "FAQ",
    fs1: "Biro", fs2: "Xwé", fs3: "Ikọ́lé", fs4: "Gbɛ",
    footer_newsletter_title: "Ìwé",
    footer_newsletter_text: "Ɖó nyikɔ mitɔn",
    footer_newsletter_placeholder: "Ímeèlì mitɔn",
    footer_newsletter_btn: "Ɖó nyikɔ",
    footer_copy: "© 2026 CleanPro Services – Gbɔn lɛ kpɔ tɔn",
    footer_demo: "⚠️ Wema démonstration. Dɔkun lɛ nyí irọ́."
  }
};

let currentLang = localStorage.getItem("cleanpro-lang") || "fr";
const languageSwitcher = document.getElementById("language-switcher");

function updateTexts() {
  const t = translations[currentLang] || translations.fr;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (t[key] !== undefined) el.textContent = t[key];
  });
  updatePlaceholders();
}

function updatePlaceholders() {
  const t = translations[currentLang] || translations.fr;
  document.querySelectorAll("[data-lang-placeholder]").forEach(el => {
    const key = el.getAttribute("data-lang-placeholder");
    if (!t[key]) return;
    if (el.tagName.toLowerCase() === "select") {
      el.options[0].text = t[key];
      const opts = t.contact_service_options;
      if (opts) {
        for (let i = 1; i < el.options.length; i++) {
          el.options[i].text = opts[i - 1] || el.options[i].text;
        }
      }
    } else {
      el.placeholder = t[key];
    }
  });
}

// Initialiser la langue
languageSwitcher.value = currentLang;
updateTexts();

languageSwitcher.addEventListener("change", () => {
  currentLang = languageSwitcher.value;
  localStorage.setItem("cleanpro-lang", currentLang);
  updateTexts();
});

/* ──────────────────────────────────────────────
   6. HERO SLIDER
────────────────────────────────────────────── */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
showSlide(0);

/* ──────────────────────────────────────────────
   7. HERO PARTICLES
────────────────────────────────────────────── */
function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 20 + 6;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      bottom: -${size}px;
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(p);
  }
}

createParticles();

/* ──────────────────────────────────────────────
   8. COUNTER ANIMATION (Stats hero)
────────────────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

// Déclencher quand la section hero devient visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".stat-num").forEach(animateCounter);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

const heroSection = document.getElementById("hero");
if (heroSection) statsObserver.observe(heroSection);

/* ──────────────────────────────────────────────
   9. SCROLL REVEAL ANIMATION
────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger par index dans le conteneur
      const siblings = entry.target.parentElement.querySelectorAll(".reveal");
      let delay = 0;
      siblings.forEach((sib, idx) => {
        if (sib === entry.target) delay = idx * 80;
      });
      setTimeout(() => entry.target.classList.add("visible"), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ──────────────────────────────────────────────
   10. GALLERY LIGHTBOX (améliorée)
────────────────────────────────────────────── */
const lightbox        = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose   = document.getElementById("lightbox-close");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    const icon = item.querySelector(".gallery-placeholder").innerHTML;
    lightboxContent.innerHTML = icon;
    lightboxCaption.textContent = item.dataset.caption || "";
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === lightboxCaption) closeLightbox();
});

lightboxClose.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* ──────────────────────────────────────────────
   11. SCROLL TO TOP
────────────────────────────────────────────── */
const scrollTopBtn = document.getElementById("scrollTop");

function toggleScrollTop() {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
}

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ──────────────────────────────────────────────
   12. NEWSLETTER (footer)
────────────────────────────────────────────── */
function handleNewsletter(e) {
  e.preventDefault();
  const form  = e.target;
  const input = form.querySelector("input[type='email']");
  const btn   = form.querySelector("button");
  const orig  = btn.textContent;

  btn.textContent = "✓";
  btn.style.background = "#2ECC71";
  input.value = "";

  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = "";
  }, 2500);
}

/* ──────────────────────────────────────────────
   13. EMAILJS — Formulaire de contact
────────────────────────────────────────────── */
(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init("wNZ091NbVmDr9SJzH");
  }
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const btn  = form.querySelector("button[type='submit']");
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours…';
  btn.disabled = true;

  if (typeof emailjs === "undefined") {
    // Simulation pour la démo
    setTimeout(() => {
      showFormMessage("success");
      form.reset();
      btn.innerHTML = orig;
      btn.disabled  = false;
    }, 1200);
    return;
  }

  emailjs.sendForm("service_qo15ze4", "template_lykcvjq", form)
    .then(() => {
      showFormMessage("success");
      form.reset();
    })
    .catch((err) => {
      showFormMessage("error");
      console.error("EmailJS:", err);
    })
    .finally(() => {
      btn.innerHTML = orig;
      btn.disabled  = false;
    });
});

function showFormMessage(type) {
  const existing = form.querySelector(".form-success, .form-error");
  if (existing) existing.remove();

  const t = translations[currentLang] || translations.fr;
  const msg = document.createElement("div");
  msg.className = type === "success" ? "form-success" : "form-error";
  msg.textContent = type === "success"
    ? "✅ " + (t.form_success || "Message envoyé avec succès !")
    : "❌ " + (t.form_error   || "Erreur lors de l'envoi. Réessayez.");

  form.prepend(msg);
  setTimeout(() => msg.remove(), 5000);
}

/* ──────────────────────────────────────────────
   14. INIT
────────────────────────────────────────────── */
highlightNav();
toggleScrollTop();
