# Examen sur Vite pour une Application Vanilla JS (Niveau Débutant)

**Durée : 1 heure**

## Partie 1: Théorie (15 minutes)

### Questions courtes

1. Qu'est-ce que Vite et quels sont ses avantages principaux par rapport à d'autres outils ?
2. Quelle commande utilise-t-on pour créer un nouveau projet Vite avec JavaScript vanilla ?
3. Comment lance-t-on le serveur de développement avec Vite ?
4. Quel est le rôle du fichier `vite.config.js` ?
5. Quelle est la différence entre `npm run dev` et `npm run build` ?

## Partie 2: Pratique (45 minutes)

### Exercice 1: Configuration de base (15 minutes)

1. Créez un nouveau projet Vite avec JavaScript vanilla
2. Modifiez le fichier `vite.config.js` pour :
   - Changer le port par défaut du serveur de développement à 3000
   - Activer le mode "open" pour que le navigateur s'ouvre automatiquement
3. Créez une structure de base pour votre application avec :
   - Un dossier `pages` pour les différentes pages
   - Un dossier `assets` pour les images et CSS

### Exercice 2: Navigation entre pages (20 minutes)

1. Créez deux pages HTML dans le dossier `pages` :
   - `home.html` (page d'accueil)
   - `about.html` (page à propos)
2. Configurez la navigation entre ces pages sans rechargement complet de la page en utilisant :
   - Le History API de JavaScript
   - Des liens avec des écouteurs d'événements
3. Ajoutez un indicateur visuel (comme une classe "active") au lien de la page courante

### Exercice 3: Import de modules (10 minutes)

1. Créez un module JavaScript `utils.js` qui exporte une fonction `greet(name)`
2. Importez et utilisez cette fonction dans votre fichier `main.js`

## Correction

### Partie 1: Théorie

1. **Vite** est un outil de build rapide pour les applications web modernes. Avantages : démarrage instantané du serveur, HMR (Hot Module Replacement) rapide, configuration simple.
2. `npm create vite@latest mon-projet -- --template vanilla`
3. `npm run dev`
4. Le fichier `vite.config.js` permet de configurer le comportement de Vite (plugins, options du serveur, build, etc.)
5. `npm run dev` lance le serveur de développement avec HMR, `npm run build` crée une version optimisée pour la production.

### Partie 2: Pratique

#### Exercice 1: Configuration de base

1. ```bash
   npm create vite@latest mon-examen -- --template vanilla
   cd mon-examen
   npm install
   ```

2. `vite.config.js` :

```js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
});
```

3. Structure :

```
src/
  ├── pages/
  ├── assets/
  │   ├── images/
  │   └── styles/
  └── main.js
```

#### Exercice 2: Navigation entre pages

1. `pages/home.html` :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Accueil</title>
  </head>
  <body>
    <h1>Bienvenue</h1>
    <nav>
      <a href="/" class="nav-link">Accueil</a>
      <a href="/about" class="nav-link">À propos</a>
    </nav>
  </body>
</html>
```

`pages/about.html` :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>À propos</title>
  </head>
  <body>
    <h1>À propos de nous</h1>
    <nav>
      <a href="/" class="nav-link">Accueil</a>
      <a href="/about" class="nav-link">À propos</a>
    </nav>
  </body>
</html>
```

2. Dans `main.js` :

```js
async function loadPage(page) {
  const response = await fetch(`/src/pages/${page}.html`);
  const html = await response.text();
  document.getElementById("app").innerHTML = html;

  // Gestion des liens
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const path = link.getAttribute("href");
      window.history.pushState({}, "", path);
      handleRouting();
    });
  });
}

function handleRouting() {
  const path = window.location.pathname;

  if (path === "/about") {
    loadPage("about");
  } else {
    loadPage("home");
  }

  // Mise à jour de la classe active
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === path);
  });
}

// Gestion du retour/avant
window.addEventListener("popstate", handleRouting);

// Chargement initial
handleRouting();
```

#### Exercice 3: Import de modules

`utils.js` :

```js
export function greet(name) {
  return `Bonjour, ${name}!`;
}
```

`main.js` (ajout en haut) :

```js
import { greet } from "./utils.js";

console.log(greet("Partenaire"));
```
