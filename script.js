/* ======================================
   MENU HAMBURGER
====================================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", (e) => {

navMenu.classList.toggle("active");

if(navMenu.classList.contains("active")){
hamburger.innerHTML = '<i class="fas fa-times"></i>';
}
else{
hamburger.innerHTML = '<i class="fas fa-bars"></i>';
}

e.stopPropagation();

});


// fermer quand on clique ailleurs

document.addEventListener("click", function(e){

if(!navMenu.contains(e.target) && !hamburger.contains(e.target)){

navMenu.classList.remove("active");
hamburger.innerHTML = '<i class="fas fa-bars"></i>';

}

});

/* ===================== MULTI-LANGUES & HERO SLIDER ===================== */

/* 1️⃣ Traductions pour toutes les sections */
const translations = {
  fr: {
    // Header / menu
    home: "Accueil",
    about: "À propos",
    services: "Services",
    why: "Pourquoi nous",
    projects: "Réalisations",
    contact: "Contact",
    // Hero
    hero_title: "Un nettoyage professionnel pour vos espaces",
    hero_text: "Des solutions de nettoyage fiables pour les entreprises et particuliers.",
    hero_btn1: "Demander un devis",
    hero_btn2: "Voir nos services",
    // About
    about_title: "À propos de CleanPro Services",
    about_p1: "CleanPro Services est une entreprise spécialisée dans les services professionnels de nettoyage pour les particuliers et les entreprises.",
    about_p2: "Grâce à une équipe qualifiée et à des équipements modernes, nous garantissons des espaces propres, sains et agréables.",
    about_p3: "Notre mission est d’offrir des solutions de nettoyage efficaces, fiables et respectueuses de l’environnement.",
    // Services
    services_title: "Nos Services",
    service1_title: "Nettoyage de bureaux",
    service1_text: "Maintenez vos espaces de travail propres et professionnels.",
    service2_title: "Nettoyage de maisons",
    service2_text: "Un environnement propre et sain pour votre famille.",
    service3_title: "Nettoyage après travaux",
    service3_text: "Remise en état après chantier ou rénovation.",
    service4_title: "Nettoyage industriel",
    service4_text: "Solutions professionnelles pour les industries.",
    service5_title: "Nettoyage de vitres",
    service5_text: "Des vitres impeccables pour une meilleure luminosité.",
    service6_title: "Nettoyage de tapis",
    service6_text: "Nettoyage en profondeur de vos tapis et moquettes.",
    service7_title: "Nettoyage écologique",
    service7_text: "Utilisation de produits respectueux de l’environnement pour un nettoyage efficace tout en protégeant votre santé et la planète.",
    service8_title: "Entretien des espaces verts",
    service8_text: "Nous proposons également un entretien régulier de vos jardins et espaces extérieurs : tonte, désherbage et nettoyage des allées.",
    // why
    why_title: "Pourquoi nous choisir",
    why1_title: "Personnel qualifié",
    why1_text: "Une équipe formée et expérimentée.",
    why2_title: "Produits écologiques",
    why2_text: "Respect de l'environnement et de votre santé.",
    why3_title: "Équipements modernes",
    why3_text: "Des outils professionnels pour un nettoyage efficace.",
    why4_title: "Service rapide",
    why4_text: "Intervention rapide et flexible.",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    why: "Why us",
    projects: "Projects",
    contact: "Contact",
    hero_title: "Professional cleaning for your spaces",
    hero_text: "Reliable cleaning solutions for businesses and individuals.",
    hero_btn1: "Request a quote",
    hero_btn2: "View our services",
    about_title: "About CleanPro Services",
    about_p1: "CleanPro Services is a company specializing in professional cleaning services for individuals and businesses.",
    about_p2: "With a qualified team and modern equipment, we guarantee clean, healthy and pleasant spaces.",
    about_p3: "Our mission is to provide effective, reliable, and environmentally friendly cleaning solutions.",
    services_title: "Our Services",
    service1_title: "Office Cleaning",
    service1_text: "Keep your workspaces clean and professional.",
    service2_title: "House Cleaning",
    service2_text: "A clean and healthy environment for your family.",
    service3_title: "Post-Construction Cleaning",
    service3_text: "Restoration after construction or renovation.",
    service4_title: "Industrial Cleaning",
    service4_text: "Professional solutions for industries.",
    service5_title: "Window Cleaning",
    service5_text: "Spotless windows for better brightness.",
    service6_title: "Carpet Cleaning",
    service6_text: "Deep cleaning of your carpets and rugs.",
    service7_title: "Eco-Friendly Cleaning",
    service7_text: "Using environmentally friendly products for effective cleaning while protecting health and the planet.",
    service8_title: "Garden & Green Space Maintenance",
    service8_text: "We also offer regular garden and outdoor maintenance: mowing, weeding, and path cleaning.",
    why_title: "Why choose us",
    why1_title: "Qualified staff",
    why1_text: "A trained and experienced team.",
    why2_title: "Eco-friendly products",
    why2_text: "Respect for the environment and your health.",
    why3_title: "Modern equipment",
    why3_text: "Professional tools for effective cleaning.",
    why4_title: "Fast service",
    why4_text: "Quick and flexible intervention.",
    
  },
  es: {
    home: "Inicio",
    about: "Sobre nosotros",
    services: "Servicios",
    why: "Por qué nosotros",
    projects: "Proyectos",
    contact: "Contacto",
    hero_title: "Limpieza profesional para tus espacios",
    hero_text: "Soluciones de limpieza confiables para empresas y particulares.",
    hero_btn1: "Solicitar presupuesto",
    hero_btn2: "Ver nuestros servicios",
    about_title: "Sobre CleanPro Services",
    about_p1: "CleanPro Services es una empresa especializada en servicios profesionales de limpieza para particulares y empresas.",
    about_p2: "Con un equipo cualificado y equipos modernos, garantizamos espacios limpios, saludables y agradables.",
    about_p3: "Nuestra misión es ofrecer soluciones de limpieza efectivas, fiables y respetuosas con el medio ambiente.",
    services_title: "Nuestros Servicios",
    service1_title: "Limpieza de oficinas",
    service1_text: "Mantenga sus espacios de trabajo limpios y profesionales.",
    service2_title: "Limpieza de casas",
    service2_text: "Un entorno limpio y saludable para su familia.",
    service3_title: "Limpieza post-construcción",
    service3_text: "Restauración después de obras o renovaciones.",
    service4_title: "Limpieza industrial",
    service4_text: "Soluciones profesionales para industrias.",
    service5_title: "Limpieza de ventanas",
    service5_text: "Ventanas impecables para una mejor luminosidad.",
    service6_title: "Limpieza de alfombras",
    service6_text: "Limpieza profunda de alfombras y moquetas.",
    service7_title: "Limpieza ecológica",
    service7_text: "Uso de productos respetuosos con el medio ambiente para una limpieza eficaz y protección de la salud y el planeta.",
    service8_title: "Mantenimiento de jardines y espacios verdes",
    service8_text: "También ofrecemos mantenimiento regular de jardines y exteriores: corte de césped, deshierbe y limpieza de caminos.",
    why_title: "Por qué elegirnos",
    why1_title: "Personal calificado",
    why1_text: "Un equipo capacitado y experimentado.",
    why2_title: "Productos ecológicos",
    why2_text: "Respeto por el medio ambiente y su salud.",
    why3_title: "Equipos modernos",
    why3_text: "Herramientas profesionales para una limpieza eficaz.",
    why4_title: "Servicio rápido",
    why4_text: "Intervención rápida y flexible.",
  },
  yo: {
    home: "Ile",
    about: "Nipa wa",
    services: "Iṣẹ",
    why: "Idi ti wa",
    projects: "Awọn iṣẹ wa",
    contact: "Kan si wa",
    hero_title: "Ìmọ́tótó àgbà fún àyè rẹ",
    hero_text: "Àwọn ìpinnu ìmọ́tótó tó dájú fún ilé-iṣẹ́ àti ẹni kọọkan.",
    hero_btn1: "Beere fun ìṣàkóso",
    hero_btn2: "Wo awọn iṣẹ wa",
    about_title: "Nipa CleanPro Services",
    about_p1: "CleanPro Services jẹ ile-iṣẹ ti o ṣe amọja ni iṣẹ imototo ọjọgbọn fun awọn ẹni-kọọkan ati awọn iṣowo.",
    about_p2: "Pẹlu ẹgbẹ ti o ni imọ ati awọn ohun elo igbalode, a ṣe idaniloju awọn aaye mimọ, ilera ati itunu.",
    about_p3: "Ise wa ni lati pese awọn solusan mimọ to munadoko, igbẹkẹle ati ti ayika.",
    services_title: "Awọn Iṣẹ Wa",
    service1_title: "Ìmọ́tótó ọfiisi",
    service1_text: "Ṣe awọn aaye iṣẹ rẹ mọ ati ọjọgbọn.",
    service2_title: "Ìmọ́tótó ile",
    service2_text: "Ayika mimọ ati ilera fun ẹbi rẹ.",
    service3_title: "Ìmọ́tótó lẹ́yìn iṣẹ́-ṣiṣe",
    service3_text: "Ìtunṣe lẹ́yìn iṣẹ́-ṣiṣe tabi atunṣe.",
    service4_title: "Ìmọ́tótó ile-iṣẹ",
    service4_text: "Awọn solusan ọjọgbọn fun awọn ile-iṣẹ.",
    service5_title: "Ìmọ́tótó ferese",
    service5_text: "Fereṣi mimọ fun imọlẹ to dara.",
    service6_title: "Ìmọ́tótó aga ilẹ",
    service6_text: "Ìmọ́tótó jinlẹ ti awọn aga ilẹ ati aṣọ ilẹ rẹ.",
    service7_title: "Ìmọ́tótó ayika",
    service7_text: "Lilo awọn ọja ore ayika fun mimọ to munadoko ati aabo ilera ati aye.",
    service8_title: "Itọju ọgba & aaye alawọ ewe",
    service8_text: "A tun nṣe itọju igbagbogbo ti ọgba ati awọn aaye ita: gige koriko, yiyọ ewe ati mimọ awọn ọna.",
    why_title: "Kí nìdí tí ẹ fi yẹ kí ẹ yan wa",
    why1_title: "Oṣiṣẹ to ni oye",
    why1_text: "Ẹgbẹ ti o ni ikẹkọ ati iriri.",
    why2_title: "Awọn ọja ore ayika",
    why2_text: "A bọwọ fun ayika ati ilera rẹ.",
    why3_title: "Ohun elo igbalode",
    why3_text: "Awọn irinṣẹ ọjọgbọn fun mimọ to munadoko.",
    why4_title: "Iṣẹ yarayara",
    why4_text: "Iṣẹ yarayara ati rọ.",
  },
  goun: {
    home: "Agbaza",
    about: "Nukọn nù",
    services: "Wema",
    why: "Na mi wá",
    projects: "Wema lɛ",
    contact: "Kanlin",
    hero_title: "Wema wé zɔ́ dzɔ́",
    hero_text: "Wema lɛ wɛ gbà lɛ nɛ dzɔ́ klɛ agbo lɛ.",
    hero_btn1: "Dzɔ́ klɛ agbo",
    hero_btn2: "Kpɔ́ dzɔ́ wema lɛ",
    about_title: "Nukọn nù CleanPro Services",
    about_p1: "CleanPro Services wɛ gbà dzɔ́ wɛ dzɔ́ kplɛ agbado wɛ dzɔ́ kpɔn klɛ wɛ kpɔ̃ lɛ.",
    about_p2: "Dzɔ́ gbègbè kpɔn dzɔ̃ kpli dzɔ́ wɛ kpɔ̃ lɛ, wɛ gbà kpɔn dzɔ́ gbè lɛ, kpɔ́ kpli fɛ kplɔ̃.",
    about_p3: "Wɛ nɔ dzɔ́ kpli wema lɛ lɛ dzɔ́ fɛkpo, dzɔ́ klɛ kpɔn kpli yɔ kpli gbɛ.",
    services_title: "Wema lɛ",
    service1_title: "Wema agbado",
    service1_text: "Dzɔ́ klɛ agbado kpɔ̃ lɛ.",
    service2_title: "Wema aklɔ",
    service2_text: "Dzɔ́ klɛ wɛ kpɔ̃ kpɔ̃.",
    service3_title: "Wema lẹ́yìn dzɔ́",
    service3_text: "Dzɔ́ kpɔn kpɔn kpɛ́ lɛ kpli dzɔ̃.",
    service4_title: "Wema gbegbe",
    service4_text: "Dzɔ́ klɛ kpɔn dzɔ̃ kpɛ́.",
    service5_title: "Wema ferese",
    service5_text: "Dzɔ́ klɛ ferese kpli fɛ́ kplɔ̃.",
    service6_title: "Wema aga ilẹ",
    service6_text: "Dzɔ́ klɛ wɛ kpɔ̃ lɛ kpli dzɔ̃ kpɛ́.",
    service7_title: "Wema ayika",
    service7_text: "Dzɔ́ kpɔn dzɔ̃ kpɛ́ kpli kpɔ̃ dzɔ̃ kplɛ kplɔ̃ kpɔn fɛ kplɔ̃ kpɔ̃ wɛ.",
    service8_title: "Dzɔ́ kplɛ agbado kpli agbala alawọ ewe",
    service8_text: "Wɛ dzɔ́ klɛ dzɔ̃ kpɔn dzɔ́ agbado kplɛ agbala alawɔ: gige, yiyo dzɔ̃ kpli dzɔ́ kplɔ̃ kpɔ̃.",
    why_title: "Na mi wá mì",
    why1_title: "Ame si do",
    why1_text: "Ame lɛ si nyi kplɛ nyin.",
    why2_title: "Nukun tɔn alɔ",
    why2_text: "Mì wá kpɔn ayika kplɛ ame.",
    why3_title: "Nukun si do",
    why3_text: "Nukun wɛ gbà wema klɛ.",
    why4_title: "Wema vɛvɛ",
    why4_text: "Wema kpɔn kpɔn kplɛ gblé.",
  }
};

/* 2️⃣ Hero slider - juste les images, texte dans translations */
const heroSlides = [
  { img: "images/hero1.webp" },
  { img: "images/hero2.webp" },
  { img: "images/hero3.webp" }
];

/* 3️⃣ Variables globales */
let currentSlide = 0;
let currentLang = "fr";

/* 4️⃣ Elements du DOM */
const languageSwitcher = document.getElementById("language-switcher");
const dataLangElements = document.querySelectorAll("[data-lang]");
const heroImgEls = document.querySelectorAll(".slide");
const heroTitleEl = document.querySelector("[data-lang='hero_title']");
const heroTextEl = document.querySelector("[data-lang='hero_text']");
const heroBtn1El = document.querySelector("[data-lang='hero_btn1']");
const heroBtn2El = document.querySelector("[data-lang='hero_btn2']");

/* 5️⃣ Fonction pour mettre à jour tous les textes de la page */
function updateTexts() {
  dataLangElements.forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

/* 6️⃣ Fonction pour afficher le slide hero */
function showHeroSlide(index) {
  // images
  heroImgEls.forEach((imgEl, i) => {
    imgEl.classList.remove("active");
    if (i === index) imgEl.classList.add("active");
  });

  // texte hero
  updateTexts();
}

/* 7️⃣ Slider automatique */
function nextHeroSlide() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  showHeroSlide(currentSlide);
}
setInterval(nextHeroSlide, 4000);

/* 8️⃣ Changement de langue */
languageSwitcher.addEventListener("change", function () {
  currentLang = this.value;
  updateTexts();
  showHeroSlide(currentSlide);
});

/* 9️⃣ Initialisation */
updateTexts();
showHeroSlide(currentSlide);

/* ======================================
   SCROLL FLUIDE ENTRE LES SECTIONS
====================================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

navMenu.classList.remove("active");

});

});

