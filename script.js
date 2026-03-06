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

/* ======================================
   LANGUAGE SWITCHER
====================================== */

const translations = {

fr: {
home: "Accueil",
about: "À propos",
services: "Services",
why: "Pourquoi nous",
projects: "Réalisations",
contact: "Contact"
},

en: {
home: "Home",
about: "About",
services: "Services",
why: "Why us",
projects: "Projects",
contact: "Contact"
},

es: {
home: "Inicio",
about: "Sobre nosotros",
services: "Servicios",
why: "Por qué nosotros",
projects: "Proyectos",
contact: "Contacto"
},

yo: {
home: "Ile",
about: "Nipa wa",
services: "Iṣẹ",
why: "Idi ti wa",
projects: "Awọn iṣẹ wa",
contact: "Kan si wa"
},

goun: {
home: "Agbaza",
about: "Nukọn nù",
services: "Wema",
why: "Na mi wá",
projects: "Wema lɛ",
contact: "Kanlin"
}

};


const languageSwitcher = document.getElementById("language-switcher");

languageSwitcher.addEventListener("change", function(){

const lang = this.value;

document.querySelectorAll("[data-lang]").forEach(element => {

const key = element.getAttribute("data-lang");

element.textContent = translations[lang][key];

});

});