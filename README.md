# Polyclinique des Spécialistes — Page hub (Vue 3)

Page « link hub » : réseaux sociaux, coordonnées et liste des services, avec un QR code qui pointe vers l'URL de la page.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez l'adresse affichée (par défaut http://localhost:5173).

## Configurer le QR code

Le QR encode l'adresse en ligne de la page. Ouvrez `src/App.vue` et modifiez :

```js
const hubUrl = 'https://polycliniquedesspecialistes.ga'
```

Mettez-y l'URL réelle **après avoir hébergé la page**.

## Build de production

```bash
npm run build     # génère le dossier dist/
npm run preview   # prévisualise le build
```

Déployez le contenu de `dist/` sur n'importe quel hébergeur statique (Netlify, Vercel, GitHub Pages, o2switch, etc.).
> Sur GitHub Pages dans un sous-dossier, décommentez et adaptez `base` dans `vite.config.js`.

## Modifier le contenu

Tout se trouve dans `src/App.vue` :
- `socials` : liens Facebook / Instagram / WhatsApp
- `contacts` : téléphones, email, adresse (Google Maps)
- `services` : la liste des spécialités
- Le logo est dans `public/logo.png`

## Pile technique
- Vue 3 + Vite
- `qrcode.vue` pour le QR code
- Polices Google Fonts : Archivo + Public Sans (chargées dans `index.html`)
