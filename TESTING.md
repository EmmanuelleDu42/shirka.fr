# Guide de test pour Smart Content Platform

Ce document explique comment tester les différentes fonctionnalités de la plateforme Smart Content Platform, tant pour le backend que pour le frontend.

## Table des matières

- [Prérequis](#prérequis)
- [Configuration de l'environnement de test](#configuration-de-lenvironnement-de-test)
- [Tests du Backend](#tests-du-backend)
  - [Tests unitaires](#tests-unitaires)
  - [Tests d'intégration](#tests-dintégration)
  - [Tests manuels avec Postman](#tests-manuels-avec-postman)
- [Tests du Frontend](#tests-du-frontend)
  - [Tests unitaires des composants](#tests-unitaires-des-composants)
  - [Tests d'intégration](#tests-dintégration-1)
  - [Tests end-to-end](#tests-end-to-end)
- [Tests de performance](#tests-de-performance)
- [Débogage](#débogage)

## Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn
- MongoDB ou MariaDB (installé localement ou accessible via une URL)
- Postman (pour les tests manuels d'API)
- Navigateur web moderne (Chrome, Firefox, etc.)

## Configuration de l'environnement de test

1. **Cloner le dépôt et installer les dépendances**

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/smart-content-platform.git
cd smart-content-platform

# Installer les dépendances du backend
cd backend
npm install

# Installer les dépendances du frontend
cd ../frontend
npm install
```

2. **Configurer les variables d'environnement pour les tests**

Créez un fichier `.env.test` dans le dossier `backend` :

```
NODE_ENV=test
PORT=5001
MONGO_URI=mongodb://localhost:27017/smart-content-platform-test
JWT_SECRET=votre_secret_jwt_pour_les_tests
JWT_EXPIRE=1h
STRIPE_SECRET_KEY=votre_clé_stripe_de_test
```

## Tests du Backend

### Tests unitaires

Les tests unitaires vérifient le bon fonctionnement des fonctions individuelles et des composants isolés.

```bash
# Dans le dossier backend
cd backend

# Exécuter tous les tests unitaires
npm test

# Exécuter les tests d'un fichier spécifique
npm test -- --testPathPattern=controllers/authController.test.js

# Exécuter les tests avec couverture de code
npm test -- --coverage
```

### Tests d'intégration

Les tests d'intégration vérifient l'interaction entre différentes parties de l'application.

```bash
# Dans le dossier backend
cd backend

# Exécuter les tests d'intégration
npm run test:integration
```

### Tests manuels avec Postman

1. **Démarrer le serveur en mode test**

```bash
# Dans le dossier backend
cd backend
NODE_ENV=test npm run dev
```

2. **Importer la collection Postman**

Importez le fichier `Smart_Content_Platform_API.postman_collection.json` dans Postman.

3. **Configurer les variables d'environnement dans Postman**

Créez un environnement avec les variables suivantes :
- `baseUrl` : `http://localhost:5001/api`
- `token` : (laissez vide pour l'instant)

4. **Exécuter les requêtes de test**

- Commencez par la requête "Register User" pour créer un compte
- Utilisez la requête "Login User" pour obtenir un token
- Copiez le token dans la variable d'environnement `token`
- Testez les autres endpoints protégés

#### Exemples de tests manuels

1. **Authentification**
   - Créer un nouvel utilisateur
   - Se connecter avec cet utilisateur
   - Récupérer les informations de l'utilisateur connecté

2. **Génération de contenu**
   - Générer du contenu pour différentes plateformes
   - Récupérer la liste des contenus générés
   - Modifier un contenu existant
   - Supprimer un contenu

3. **Abonnements**
   - Récupérer la liste des abonnements disponibles
   - Souscrire à un abonnement
   - Vérifier l'abonnement actuel
   - Annuler l'abonnement

4. **Administration**
   - Récupérer les statistiques globales
   - Gérer les utilisateurs
   - Gérer les contenus
   - Exporter les données

## Tests du Frontend

### Tests unitaires des composants

```bash
# Dans le dossier frontend
cd frontend

# Exécuter tous les tests unitaires
npm test

# Exécuter les tests d'un composant spécifique
npm test -- --testPathPattern=components/Button.test.js

# Exécuter les tests avec couverture de code
npm test -- --coverage
```

### Tests d'intégration

```bash
# Dans le dossier frontend
cd frontend

# Exécuter les tests d'intégration
npm run test:integration
```

### Tests end-to-end

Les tests end-to-end vérifient le fonctionnement de l'application de bout en bout, simulant les interactions utilisateur.

1. **Installer Cypress**

```bash
# Dans le dossier frontend
cd frontend
npm install --save-dev cypress
```

2. **Configurer Cypress**

Créez un fichier `cypress.json` à la racine du dossier frontend :

```json
{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1280,
  "viewportHeight": 720
}
```

3. **Exécuter les tests end-to-end**

```bash
# Démarrer le backend et le frontend
# Dans un terminal
cd backend
npm run dev

# Dans un autre terminal
cd frontend
npm start

# Dans un troisième terminal
cd frontend
npx cypress open
```

#### Scénarios de test end-to-end

1. **Inscription et connexion**
   - Visiter la page d'accueil
   - Cliquer sur "S'inscrire"
   - Remplir le formulaire d'inscription
   - Soumettre le formulaire
   - Vérifier la redirection vers le tableau de bord

2. **Génération de contenu**
   - Se connecter
   - Accéder à la page de génération de contenu
   - Sélectionner une plateforme
   - Remplir le formulaire
   - Cliquer sur "Générer"
   - Vérifier l'affichage du contenu généré

3. **Gestion de l'abonnement**
   - Se connecter
   - Accéder à la page d'abonnement
   - Sélectionner un forfait
   - Compléter le processus de paiement
   - Vérifier la mise à jour de l'abonnement

## Tests de performance

Pour tester les performances de l'API, vous pouvez utiliser des outils comme Apache JMeter ou Artillery.

```bash
# Installer Artillery globalement
npm install -g artillery

# Exécuter un test de charge
artillery run tests/performance/api-load-test.yml
```

## Débogage

### Backend

```bash
# Démarrer le serveur en mode debug
cd backend
NODE_ENV=development DEBUG=app:* npm run dev
```

### Frontend

1. **Utiliser les outils de développement du navigateur**
   - Ouvrez les DevTools (F12 ou Cmd+Option+I sur Mac)
   - Naviguez vers l'onglet "Console" pour voir les logs
   - Utilisez l'onglet "Network" pour inspecter les requêtes API
   - Utilisez l'onglet "React" (avec l'extension React DevTools) pour inspecter les composants

2. **Activer les logs de débogage**

```bash
# Démarrer le frontend avec plus de logs
cd frontend
REACT_APP_DEBUG=true npm start
```

---

Ce guide devrait vous aider à tester efficacement toutes les fonctionnalités de la plateforme Smart Content Platform. Si vous rencontrez des problèmes ou avez des questions, n'hésitez pas à consulter la documentation ou à contacter l'équipe de développement.
