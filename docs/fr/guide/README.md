---
sidebarDepth: 3
---
# Geoguess
Geoguess est un jeu gratuit sans publicité. Les joueurs s'affrontent en 5 manches pour deviner la plus proche position d'où ils ont été placé aléatoirement.


Vous avez la possibilité de jouer avec vos amis. Le premier joueur créé une salle et décide de sa taille. Une fois créés, les autres joueurs pourront rejoindre la salle à partir de son nom et joueur tous ensemble.
Ce jeu est issu de [GeoGuess Master](https://geoguessmaster.com/).

Ce guide explique comment mettre en place le jeu Geoguess. 

## 1) Instruction de déploiement

Vous pouvez déployer le site via les outils suivants:

[!["Deploy to netlify"](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/BilelJegham/Geoguess-2) or 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2FBilelJegham%2FGeoguess-2&env=VUE_APP_API_KEY,VUE_APP_FIREBASE_API_KEY,VUE_APP_FIREBASE_PROJECT_ID,VUE_APP_FIREBASE_MESSAGING_SENDER_ID,VUE_APP_FIREBASE_APP_ID,VUE_APP_FIREBASE_MEASUREMENT_ID&envDescription=Follow%20guide%20on%20https%3A%2F%2Fgeoguess-2.github.io%2F&envLink=https%3A%2F%2Fgeoguess-2.github.io%2F&project-name=my-geoguess)

Il vous sera demandé de saisir des variables d'environnement, vous retrouverez ci-dessous quand les obtenir.


## 2) Variables d'environnements

### 2.1) Google Map

> Variable d'environnement : VUE_APP_API_KEY

1. Google Cloud, votre 1er projet ?
    1. Aller sur https://cloud.google.com/maps-platform/
    2. Cliquer sur Premiers pas
    3. Une page s'ouvre et vous demande d'activer la facturation
    !["Google"](./img/google-1.png)
    > **Note :** Google offre 200 $ de crédit mensuel pour l'usage des apis de Google Map ([Source](https://cloud.google.com/maps-platform/pricing?hl=fr)). Pour un usage entre amis, vous ne dépasserez jamais ce montant.
    4. Créer votre compte de facturation

1.(bis) Google Cloud, je connais 💪 alors créer un projet 

2. Dans le "MarketPlace", activer l'api "Maps JavaScript API"
3. Dans l'onglet "Identifiants", générer une clé d'api. Cette clé sera votre `VUE_APP_API_KEY`
> Vous pouvez définir un quota et une restriction d'url


> Plus d'infos : [https://developers.google.com/maps/gmp-get-started](https://developers.google.com/maps/gmp-get-started)

### 2.2) Firebase (multijoueur)
> Variables d'environnements : VUE_APP_FIREBASE_API_KEY, VUE_APP_FIREBASE_PROJECT_ID, VUE_APP_FIREBASE_MESSAGING_SENDER_ID, VUE_APP_FIREBASE_APP_ID et VUE_APP_FIREBASE_MEASUREMENT_ID

1. Créer un projet Firebase (ou utiliser le projet créé pour Google Map Api) via [https://console.firebase.google.com/](https://console.firebase.google.com/)
> Vous pouvez activer Google Analytics pour obtenir des statistiques  
2. Aller sous la rubrique "Développer" dans "Realtime Database", Créer une base de données
3. Aller dans l'onglet Règles,
    1. Remplacer les 2 champs (write et read) `false` par `true` dans le champ
!["Règle"](./img/firebase.png)
    2. Publier les modifications
4. Revenez sur la page d'accueil en cliquant dans le menu à gauche sur "Vue d'ensemble du projet"
5. Sous le titre sur projet, cliquer sur l'icône Web `</>` pour ajouter une application
!["Ajout App"](./img/firebase-2.png)
6. Enregistrer l'application puis récupérer les variables d'environnement indiqué sous `firebaseConfig` 

Voici les associations :

| Paramétre         | Variables d'environnements           |
| ----------------- | ------------------------------------ |
| apiKey            | VUE_APP_FIREBASE_API_KEY             |
| projectId         | VUE_APP_FIREBASE_PROJECT_ID          |
| messagingSenderId | VUE_APP_FIREBASE_MESSAGING_SENDER_ID |
| appId             | VUE_APP_FIREBASE_APP_ID              |
| measurementId     | VUE_APP_FIREBASE_MEASUREMENT_ID      |

> **Note**: `measurementId` est accessible si vous avez activé Google Analytics