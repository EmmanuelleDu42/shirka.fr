// Routes d'authentification
// Ce fichier définit les routes liées à l'authentification

// Importation des dépendances (à installer via npm lorsque Node.js sera disponible)
// const express = require('express');
// const { register, login, getMe, updatePassword, forgotPassword, resetPassword } = require('../controllers/authController');
// const { protect } = require('../middlewares/authMiddleware');

// Création du routeur
// const router = express.Router();

// Définition des routes
/**
 * @route   POST /api/auth/register
 * @desc    Inscription d'un nouvel utilisateur
 * @access  Public
 */
// router.post('/register', register);

/**
 * @route   POST /api/auth/login
 * @desc    Connexion d'un utilisateur
 * @access  Public
 */
// router.post('/login', login);

/**
 * @route   GET /api/auth/me
 * @desc    Obtenir les informations de l'utilisateur connecté
 * @access  Private
 */
// router.get('/me', protect, getMe);

/**
 * @route   PUT /api/auth/password
 * @desc    Mettre à jour le mot de passe
 * @access  Private
 */
// router.put('/password', protect, updatePassword);

/**
 * @route   POST /api/auth/forgot-password
 * @desc    Demander la réinitialisation du mot de passe
 * @access  Public
 */
// router.post('/forgot-password', forgotPassword);

/**
 * @route   POST /api/auth/reset-password
 * @desc    Réinitialiser le mot de passe
 * @access  Public
 */
// router.post('/reset-password', resetPassword);

// Export du routeur
// module.exports = router;

// Simulation des routes d'authentification (à remplacer par Express)
const authRoutes = {
    register: {
        method: 'POST',
        path: '/api/auth/register',
        handler: 'register',
        access: 'Public',
        description: 'Inscription d\'un nouvel utilisateur'
    },
    login: {
        method: 'POST',
        path: '/api/auth/login',
        handler: 'login',
        access: 'Public',
        description: 'Connexion d\'un utilisateur'
    },
    getMe: {
        method: 'GET',
        path: '/api/auth/me',
        handler: 'getMe',
        access: 'Private',
        description: 'Obtenir les informations de l\'utilisateur connecté'
    },
    updatePassword: {
        method: 'PUT',
        path: '/api/auth/password',
        handler: 'updatePassword',
        access: 'Private',
        description: 'Mettre à jour le mot de passe'
    },
    forgotPassword: {
        method: 'POST',
        path: '/api/auth/forgot-password',
        handler: 'forgotPassword',
        access: 'Public',
        description: 'Demander la réinitialisation du mot de passe'
    },
    resetPassword: {
        method: 'POST',
        path: '/api/auth/reset-password',
        handler: 'resetPassword',
        access: 'Public',
        description: 'Réinitialiser le mot de passe'
    }
};

// Export des routes
module.exports = authRoutes;
