# 🧹 CleanPro Services — Site Web Portfolio

> **Projet de démonstration** — Toutes les données (nom d'entreprise, contacts, avis clients) sont fictives.  
> Ce site est un projet portfolio conçu pour illustrer les compétences en développement web frontend.

---

## 🌐 Aperçu

**CleanPro Services** est un site vitrine complet pour une entreprise de nettoyage professionnel.  
Il démontre des compétences avancées en HTML, CSS et JavaScript vanilla — sans framework, sans dépendances lourdes.

---

## ✨ Fonctionnalités

### 🎨 Design & Thèmes
| Fonctionnalité | Détail |
|----------------|--------|
| **3 modes** | 🌞 Clair · 🌙 Sombre · 🌿 Nature |
| **Sauvegarde du thème** | Mémorisé via `localStorage` |
| **Design premium** | Typographie Playfair Display + DM Sans |
| **Palette cohérente** | CSS variables pour tous les thèmes |

### 📱 Responsive & Navigation
| Fonctionnalité | Détail |
|----------------|--------|
| **Menu burger** | Toujours visible sur tous les écrans |
| **Nav mobile** | Panneau latéral animé avec overlay |
| **Sticky header** | S'estompe au scroll avec backdrop-blur |
| **Scroll fluide** | Ancres animées entre les sections |
| **Nav active** | Lien courant mis en surbrillance |
| **Retour en haut** | Bouton flottant animé |

### 🌍 Multi-langue
- 🇫🇷 Français (défaut)
- 🇬🇧 Anglais
- 🇪🇸 Espagnol
- 🌍 Yoruba
- 🌍 Goun (Béninois)

### 🏗️ Sections
1. **Hero** — Slider, particules animées, stats avec compteur animé
2. **À propos** — Présentation entreprise
3. **Services** — 8 cartes avec icônes et hover effects
4. **Pourquoi nous** — 4 avantages clés
5. **Tarifs** — 3 formules avec card "populaire" mise en avant
6. **Zone d'intervention** — Section colorée
7. **Réalisations** — Galerie avec lightbox
8. **Témoignages** — Avis clients stylisés
9. **Contact** — Formulaire EmailJS avec validation
10. **Créateur** — Section portfolio développeur
11. **Footer** — Navigation, newsletter, réseaux sociaux

### ⚙️ JavaScript (Vanilla)
- `IntersectionObserver` pour les animations au scroll (reveal)
- Compteur animé des statistiques
- Slider hero automatique
- Particules animées
- Lightbox galerie avec clavier (Escape)
- Formulaire EmailJS avec feedback visuel
- Persistance langue + thème

---

## 📁 Structure des fichiers

```
cleanpro/
├── index.html       # Structure HTML complète
├── style.css        # Styles + 3 thèmes CSS
├── script.js        # Logique JS (vanilla)
├── images/          # Images à placer ici
│   ├── hero1.webp
│   ├── hero2.webp
│   ├── hero3.webp
│   ├── about.webp
│   ├── gallery1–4.webp
│   └── ma_photo.webp
└── README.md
```

---

## 🛠️ Technologies utilisées

| Technologie | Usage |
|-------------|-------|
| HTML5 sémantique | Structure du document |
| CSS3 + Variables | Thèmes, animations, responsive |
| JavaScript ES6+ | Interactivité, logique |
| Font Awesome 6 | Icônes |
| Google Fonts | Playfair Display + DM Sans |
| EmailJS | Envoi de formulaire sans backend |
| IntersectionObserver API | Animations au scroll |

---

## ⚡ Performance

- Images en format `.webp` (loading="lazy")
- CSS variables pour éviter la duplication
- Animations CSS-first (GPU-accelerated)
- Aucun framework JS (zéro dépendance lourde)
- `preconnect` pour Google Fonts

---

## 🔧 Configuration EmailJS

Pour activer l'envoi réel de formulaire :

1. Créer un compte sur [emailjs.com](https://www.emailjs.com/)
2. Remplacer dans `script.js` :
   ```js
   emailjs.init("VOTRE_PUBLIC_KEY");
   emailjs.sendForm("VOTRE_SERVICE_ID", "VOTRE_TEMPLATE_ID", form)
   ```

> Sans configuration EmailJS, le formulaire simule un envoi réussi (mode démo).

---

## 📱 Compatibilité

| Navigateur | Support |
|------------|---------|
| Chrome 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |
| Mobile (iOS/Android) | ✅ |

---

## 🏷️ Badge démo

Une bannière orange en haut de page informe les visiteurs que le site est un projet de démonstration avec des données fictives. Elle peut être fermée par l'utilisateur.

---

## 👨‍💻 Développeur

**Fabrice Houeto**  
Développeur Web Frontend passionné

- 📞 [+229 01 91 69 02 92](tel:+229010191690292)
- 💬 [WhatsApp](https://wa.me/2290191690292)
- 🌐 [hfrwebdesigner.vercel.app](https://hfrwebdesigner.vercel.app/)

---

## 📄 Licence

Ce projet est un **portfolio de démonstration**.  
Toutes les données (nom d'entreprise, contacts, témoignages) sont **entièrement fictives**.  
Libre de s'en inspirer pour des projets réels en adaptant les contenus.

---

*Conçu avec passion pour impressionner les recruteurs et clients 🚀*
