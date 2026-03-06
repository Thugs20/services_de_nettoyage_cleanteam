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
    hero_btn2: "Voir nos services"
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
    hero_btn2: "View our services"
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
    hero_btn2: "Ver nuestros servicios"
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
    hero_btn2: "Wo awọn iṣẹ wa"
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
    hero_btn2: "Kpɔ́ dzɔ́ wema lɛ"
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
