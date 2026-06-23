# GIORTECH Website 🚀

Bienvenue sur le dépôt officiel du projet **GIORTECH Website**. Cette application web vitrine moderne est développée pour présenter les services, les projets et l'expertise de l'entreprise. 

Ce fichier sert de documentation complète pour l'installation, le démarrage, l'architecture et la reprise en main du code par n'importe quel membre de l'équipe ou futur développeur.

---

## 🛠️ Stack Technique

Avant de modifier le projet, assurez-vous de comprendre les technologies clés utilisées :
* **React 18+ (via Vite)** : Framework principal et outil de build rapide.
* **React Router DOM v6** : Gestion du routage applicatif (Single Page Application).
* **i18next & react-i18next** : Gestion complète du multilingue (Français/Anglais).
* **CSS Modules** : Les styles sont isolés par composant (`*.module.css`) pour éviter tout conflit global.

---

## 🚀 Guide d'Installation et de Démarrage Rapide

Suivez scrupuleusement ces étapes pour installer l'environnement de développement sur votre machine locale :

### 1. Prérequis système
Assurez-vous d'avoir installé **Node.js** (Version LTS recommandée, 18 ou supérieure) et **npm** sur votre machine. Vous pouvez vérifier avec :
```bash
node -v
npm -v

Cloner le projet et entrer dans le dossier

git clone [https://github.com/votre-compte/giortech-website.git](https://github.com/votre-compte/giortech-website.git)

cd giortech-website

Installer proprement les dépendances

npm install

Lancer le serveur de développement local

npm run dev

Guide de Reprise en Main (Architecture du Code)

    Pour continuer le développement sereinement, voici où se trouvent les éléments importants et comment les modifier :

src/
├── assets/                 # Images, icônes et logos (ex: Logo_giortech.png)
├── components/
│   └── Nav/
│       ├── Nav.jsx         # Barre de navigation globale
│       └── Navbar.module.css
├── pages/
│   ├── Accueil/            # Composant et style de la page d'accueil
│   ├── Services/           # Composant et style de la page services
│   ├── APropos/            # Composant et style de la page à propos
│   ├── Projets/            # Composant et style de la page projets
│   └── Contact/
│       ├── Contact.jsx     # Formulaire connecté au tracking + Map
│       └── Contact.module.css
├── locales/                # Fichiers de dictionnaire pour le multilingue
│   ├── fr/
│   │   └── translation.json # Toutes les chaînes de texte en Français
│   └── en/
│       └── translation.json # Toutes les chaînes de texte en Anglais
├── i18n.js                 # Fichier de configuration initiale de i18next
├── App.jsx                 # Déclaration de l'arborescence des routes de l'application
└── main.jsx                # Point d'entrée React (injecte i18n et l'App)

Comment ajouter ou modifier du texte (Internationalisation)

    Règle d'or : N'écrivez jamais de texte en dur (comme "Bonjour") directement dans le code JSX des pages. Passez toujours par le système de traduction.

    1) Allez dans src/locales/fr/translation.json et ajoutez votre texte avec une clé unique :
    "monNouveauTitre": "Bienvenue chez Giortech"

    2) Allez dans src/locales/en/translation.json et ajoutez la traduction sous la même clé :
    "monNouveauTitre": "Welcome to Giortech"

    3) Dans votre composant React, affichez le texte en appelant la fonction t :

<h1>{t('monNouveauTitre')}</h1>

Documentation de l'Intégration Commerciale (Kaefra SDK)

    La page de contact (Contact.jsx) intègre un pont asynchrone vers la plateforme externe de capture de prospects Kaefra. Si vous devez retravailler cette page, sachez comment elle est articulée :

    *) Suivi de visite (Passif) : Un useEffect configuré avec un tableau de dépendance vide [] s'exécute une seule fois au chargement de la page de contact. Il crée une iframe invisible, envoie un ping anonyme contenant les données système de navigation à l'URL Kaefra, puis autodétruit l'iframe après 3 secondes.

    *) Formulaire de Contact (Actif) : La fonction handleSubmit intercepte la soumission du formulaire, rassemble toutes les données saisies par le client (fullName, companyName, email, phone, projectType, message), les formate, et les envoie discrètement via une méthode d'injection similaire.

    *) Comportement après envoi : L'utilisateur reste sur le site web. Une alerte native de succès apparaît et l'état du formulaire (formData) est entièrement réinitialisé pour vider les champs à l'écran.

👥 Règles de Contribution et Git
    Si vous collaborez à plusieurs (travail en binôme ou en groupe) sur ce projet, merci de respecter ce workflow :

    1) Ne travaillez jamais directement sur la branche main.

    2) Créez toujours une branche descriptive pour votre fonctionnalité : git checkout -b feature/nom-de-votre-tache

    3) Effectuez vos modifications, puis ajoutez et commitez vos fichiers :

    git add .
    git commit -m "ajout de la section témoignages sur l'accueil"

    4)  Poussez votre branche sur le dépôt distant et ouvrez une Pull Request (PR) pour fusionner avec main.