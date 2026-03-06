



/* ======================================
   MENU HAMBURGER MOBILE
====================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if(menuToggle){

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active");

});

}


/* ======================================
   LANGUAGE SWITCHER (GOOGLE TRANSLATE)
====================================== */

const languageSwitcher = document.getElementById("language-switcher");

if(languageSwitcher){

languageSwitcher.addEventListener("change", function(){

let lang = this.value;

let googleTranslateSelect = document.querySelector(".goog-te-combo");

if(googleTranslateSelect){

googleTranslateSelect.value = lang;
googleTranslateSelect.dispatchEvent(new Event("change"));

}

});

}



/* ======================================
   GOOGLE TRANSLATE INITIALISATION
====================================== */

function googleTranslateElementInit() {

new google.translate.TranslateElement({

pageLanguage: "fr",
includedLanguages: "fr,en,es,yo"

}, "google_translate_element");

}

