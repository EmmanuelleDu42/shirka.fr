# Smart Content Platform

Une plateforme SaaS de génération de contenu automatisé via IA pour plusieurs plateformes (Blog, LinkedIn, Instagram, TikTok, etc.).

## 📋 Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Architecture technique](#architecture-technique)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [API Reference](#api-reference)
- [Contribuer](#contribuer)
- [Licence](#licence)

## ✨ Fonctionnalités

### Front-End Public
- **Page d'accueil** attractive présentant clairement le service
- **Page de tarification** avec 3 forfaits (Découverte, Créateur, Pro)
- CTA clairs : "Découvrir nos forfaits", "Commencer gratuitement", "Se connecter"

### Processus d'inscription et connexion
- Formulaire simple (email, mot de passe, acceptation CGU)
- Authentification via Firebase Auth (Google/Facebook)

### Espace Client Connecté
- Tableau de bord utilisateur intuitif
- Gestion du compte et de l'abonnement
- Historique des créations

### Interface de génération de contenu
- Choix des thèmes (Blog, LinkedIn, Instagram, TikTok, etc.)
- Formulaire dynamique selon le thème sélectionné
- Feedback durant la génération
- Options pour le contenu généré : copier, modifier, sauvegarder, relancer

### Back-Office Administrateur
- Dashboard avec vue sur clients, abonnements, revenus, consommation
- Gestion CRUD des profils clients et utilisateurs
- Gestion des templates d'agents IA par thème
- Suivi détaillé et exportable des consommations

### Gestion des abonnements
- Abonnements freemium et payants (mensuel/annuel)
- Paiements intégrés via Stripe

## 🏗️ Architecture technique

### Front-end
- React.js
- Tailwind CSS
- Firebase Auth pour l'authentification
- Axios pour les requêtes API
- Zustand pour la gestion d'état
- React Router pour la navigation

### Back-end
- Node.js avec Express
- MongoDB/MariaDB pour la base de données
- API REST
- JWT pour l'authentification
- Stripe pour les paiements

## 🚀 Installation

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn
- MongoDB ou MariaDB

### Installation du backend

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/smart-content-platform.git
cd smart-content-platform

# Installer les dépendances du backend
cd backend
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer le fichier .env avec vos propres valeurs

# Démarrer le serveur de développement
npm run dev
```

### Installation du frontend

```bash
# Dans un nouveau terminal, depuis la racine du projet
cd frontend
npm install

# Démarrer le serveur de développement
npm start
```

## 🖥️ Utilisation

### Génération de contenu
1. Connectez-vous à votre compte
2. Accédez à la page de génération de contenu
3. Sélectionnez la plateforme cible (Blog, LinkedIn, etc.)
4. Remplissez le formulaire avec vos informations
5. Cliquez sur "Générer" et attendez le résultat
6. Modifiez, copiez ou sauvegardez le contenu généré

### Gestion de l'abonnement
1. Accédez à votre profil
2. Cliquez sur "Abonnement"
3. Choisissez le forfait qui vous convient
4. Suivez les instructions pour le paiement

### Administration (pour les administrateurs)
1. Connectez-vous avec un compte administrateur
2. Accédez au back-office
3. Gérez les utilisateurs, les contenus et les abonnements
4. Consultez les statistiques et exportez les données

## 📁 Structure du projet

```
smart-content-platform/
├── backend/                # API et logique métier
│   ├── src/
│   │   ├── controllers/    # Contrôleurs pour les routes
│   │   ├── middlewares/    # Middlewares (auth, validation, etc.)
│   │   ├── models/         # Modèles de données
│   │   ├── routes/         # Routes API
│   │   └── app.js          # Point d'entrée de l'application
│   └── package.json
│
├── frontend/               # Interface utilisateur React
│   ├── public/             # Fichiers statiques
│   ├── src/
│   │   ├── assets/         # Images, styles, etc.
│   │   ├── components/     # Composants réutilisables
│   │   ├── pages/          # Pages de l'application
│   │   ├── services/       # Services (API, auth, etc.)
│   │   ├── store/          # Gestion d'état (Zustand)
│   │   └── index.js        # Point d'entrée React
│   └── package.json
│
└── README.md               # Documentation du projet
```

## 📚 API Reference

### Authentification
- `POST /api/auth/register` - Inscription d'un nouvel utilisateur
- `POST /api/auth/login` - Connexion d'un utilisateur
- `GET /api/auth/me` - Obtenir les informations de l'utilisateur connecté

### Contenu
- `POST /api/content/generate` - Générer du contenu
- `GET /api/content` - Obtenir tous les contenus d'un utilisateur
- `GET /api/content/:id` - Obtenir un contenu par son ID
- `PUT /api/content/:id` - Mettre à jour un contenu
- `DELETE /api/content/:id` - Supprimer un contenu

### Abonnements
- `GET /api/subscriptions` - Obtenir tous les abonnements disponibles
- `GET /api/subscriptions/user` - Obtenir l'abonnement actuel de l'utilisateur
- `POST /api/subscriptions/create-checkout-session` - Créer une session de paiement Stripe
- `PUT /api/subscriptions/user` - Mettre à jour l'abonnement d'un utilisateur
- `DELETE /api/subscriptions/user` - Annuler l'abonnement d'un utilisateur

### Administration
- `GET /api/admin/stats` - Obtenir les statistiques globales de la plateforme
- `GET /api/admin/users` - Obtenir tous les utilisateurs
- `GET /api/admin/contents` - Obtenir tous les contenus
- `GET /api/admin/transactions` - Obtenir toutes les transactions
- `GET /api/admin/export` - Exporter les données au format CSV

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment vous pouvez contribuer :

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'Add some amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.
