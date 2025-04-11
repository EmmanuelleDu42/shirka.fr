// Routes d'abonnement
// Ce fichier définit les routes liées à la gestion des abonnements

// Importation des dépendances (à installer via npm lorsque Node.js sera disponible)
// const express = require('express');
// const { getSubscriptions, getSubscriptionById, getUserSubscription, createCheckoutSession, handleStripeWebhook, updateUserSubscription, cancelUserSubscription, getUserTransactions } = require('../controllers/subscriptionController');
// const { protect } = require('../middlewares/authMiddleware');

// Création du routeur
// const router = express.Router();

// Définition des routes
/**
 * @route   GET /api/subscriptions
 * @desc    Obtenir tous les abonnements disponibles
 * @access  Public
 */
// router.get('/', getSubscriptions);

/**
 * @route   GET /api/subscriptions/:id
 * @desc    Obtenir un abonnement par son ID
 * @access  Public
 */
// router.get('/:id', getSubscriptionById);

/**
 * @route   GET /api/subscriptions/user
 * @desc    Obtenir l'abonnement actuel de l'utilisateur
 * @access  Private
 */
// router.get('/user', protect, getUserSubscription);

/**
 * @route   POST /api/subscriptions/create-checkout-session
 * @desc    Créer une session de paiement Stripe
 * @access  Private
 */
// router.post('/create-checkout-session', protect, createCheckoutSession);

/**
 * @route   POST /api/subscriptions/webhook
 * @desc    Webhook Stripe pour gérer les événements de paiement
 * @access  Public
 */
// router.post('/webhook', handleStripeWebhook);

/**
 * @route   PUT /api/subscriptions/user
 * @desc    Mettre à jour l'abonnement d'un utilisateur
 * @access  Private
 */
// router.put('/user', protect, updateUserSubscription);

/**
 * @route   DELETE /api/subscriptions/user
 * @desc    Annuler l'abonnement d'un utilisateur
 * @access  Private
 */
// router.delete('/user', protect, cancelUserSubscription);

/**
 * @route   GET /api/subscriptions/transactions
 * @desc    Obtenir l'historique des transactions d'un utilisateur
 * @access  Private
 */
// router.get('/transactions', protect, getUserTransactions);

// Export du routeur
// module.exports = router;

// Simulation des routes d'abonnement (à remplacer par Express)
const subscriptionRoutes = {
    getSubscriptions: {
        method: 'GET',
        path: '/api/subscriptions',
        handler: 'getSubscriptions',
        access: 'Public',
        description: 'Obtenir tous les abonnements disponibles'
    },
    getSubscriptionById: {
        method: 'GET',
        path: '/api/subscriptions/:id',
        handler: 'getSubscriptionById',
        access: 'Public',
        description: 'Obtenir un abonnement par son ID'
    },
    getUserSubscription: {
        method: 'GET',
        path: '/api/subscriptions/user',
        handler: 'getUserSubscription',
        access: 'Private',
        description: 'Obtenir l\'abonnement actuel de l\'utilisateur'
    },
    createCheckoutSession: {
        method: 'POST',
        path: '/api/subscriptions/create-checkout-session',
        handler: 'createCheckoutSession',
        access: 'Private',
        description: 'Créer une session de paiement Stripe'
    },
    handleStripeWebhook: {
        method: 'POST',
        path: '/api/subscriptions/webhook',
        handler: 'handleStripeWebhook',
        access: 'Public',
        description: 'Webhook Stripe pour gérer les événements de paiement'
    },
    updateUserSubscription: {
        method: 'PUT',
        path: '/api/subscriptions/user',
        handler: 'updateUserSubscription',
        access: 'Private',
        description: 'Mettre à jour l\'abonnement d\'un utilisateur'
    },
    cancelUserSubscription: {
        method: 'DELETE',
        path: '/api/subscriptions/user',
        handler: 'cancelUserSubscription',
        access: 'Private',
        description: 'Annuler l\'abonnement d\'un utilisateur'
    },
    getUserTransactions: {
        method: 'GET',
        path: '/api/subscriptions/transactions',
        handler: 'getUserTransactions',
        access: 'Private',
        description: 'Obtenir l\'historique des transactions d\'un utilisateur'
    }
};

// Export des routes
module.exports = subscriptionRoutes;
