// Contrôleur d'abonnement
// Ce fichier gère les fonctionnalités liées aux abonnements et aux paiements

// Importation des dépendances (à installer via npm lorsque Node.js sera disponible)
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const User = require('../models/User');
// const { Subscription, defaultSubscriptions } = require('../models/Subscription');

// Simulation de la base de données d'abonnements
const subscriptions = [
    {
        id: 'discovery',
        name: 'Découverte',
        description: 'Parfait pour découvrir notre plateforme.',
        price: {
            monthly: 0,
            yearly: 0
        },
        features: [
            '5 générations par mois',
            '2 plateformes',
            'Historique limité (7 jours)'
        ],
        limits: {
            generationsPerMonth: 5,
            platforms: 2,
            historyDays: 7
        },
        isPopular: false,
        stripePriceIdMonthly: '',
        stripePriceIdYearly: ''
    },
    {
        id: 'creator',
        name: 'Créateur',
        description: 'Idéal pour les créateurs de contenu réguliers.',
        price: {
            monthly: 29,
            yearly: 290
        },
        features: [
            '50 générations par mois',
            'Toutes les plateformes',
            'Historique illimité',
            'Support prioritaire'
        ],
        limits: {
            generationsPerMonth: 50,
            platforms: -1, // Illimité
            historyDays: -1 // Illimité
        },
        isPopular: true,
        stripePriceIdMonthly: 'price_monthly_creator',
        stripePriceIdYearly: 'price_yearly_creator'
    },
    {
        id: 'pro',
        name: 'Pro',
        description: 'Pour les professionnels et les équipes.',
        price: {
            monthly: 79,
            yearly: 790
        },
        features: [
            'Générations illimitées',
            'Toutes les plateformes',
            'Historique illimité',
            'Support dédié',
            'API d\'accès'
        ],
        limits: {
            generationsPerMonth: -1, // Illimité
            platforms: -1, // Illimité
            historyDays: -1 // Illimité
        },
        isPopular: false,
        stripePriceIdMonthly: 'price_monthly_pro',
        stripePriceIdYearly: 'price_yearly_pro'
    }
];

// Simulation de la base de données utilisateurs
const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        subscription: 'creator',
        subscriptionEndDate: '2025-05-10T00:00:00Z'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        subscription: 'pro',
        subscriptionEndDate: '2025-06-15T00:00:00Z'
    }
];

// Simulation de la base de données des transactions
const transactions = [
    {
        id: 1,
        userId: 1,
        subscriptionId: 'creator',
        amount: 29,
        currency: 'EUR',
        status: 'succeeded',
        paymentMethod: 'card',
        createdAt: '2025-04-10T10:30:00Z'
    },
    {
        id: 2,
        userId: 2,
        subscriptionId: 'pro',
        amount: 790,
        currency: 'EUR',
        status: 'succeeded',
        paymentMethod: 'card',
        createdAt: '2025-03-15T14:45:00Z'
    }
];

/**
 * @desc    Obtenir tous les abonnements disponibles
 * @route   GET /api/subscriptions
 * @access  Public
 */
const getSubscriptions = async (req, res) => {
    try {
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            subscriptions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération des abonnements',
            error: error.message
        });
    }
};

/**
 * @desc    Obtenir un abonnement par son ID
 * @route   GET /api/subscriptions/:id
 * @access  Public
 */
const getSubscriptionById = async (req, res) => {
    try {
        const subscriptionId = req.params.id;
        
        // Trouver l'abonnement par son ID
        const subscription = subscriptions.find(s => s.id === subscriptionId);
        
        // Vérifier si l'abonnement existe
        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: 'Abonnement non trouvé'
            });
        }
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            subscription
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération de l\'abonnement',
            error: error.message
        });
    }
};

/**
 * @desc    Obtenir l'abonnement actuel de l'utilisateur
 * @route   GET /api/subscriptions/user
 * @access  Private
 */
const getUserSubscription = async (req, res) => {
    try {
        const userId = parseInt(req.query.userId);
        
        // Trouver l'utilisateur par son ID
        const user = users.find(u => u.id === userId);
        
        // Vérifier si l'utilisateur existe
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        // Trouver l'abonnement de l'utilisateur
        const subscription = subscriptions.find(s => s.id === user.subscription);
        
        // Vérifier si l'abonnement existe
        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: 'Abonnement non trouvé'
            });
        }
        
        // Vérifier si l'abonnement est actif
        const isActive = user.subscription === 'discovery' || new Date() < new Date(user.subscriptionEndDate);
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            subscription,
            subscriptionEndDate: user.subscriptionEndDate,
            isActive
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération de l\'abonnement de l\'utilisateur',
            error: error.message
        });
    }
};

/**
 * @desc    Créer une session de paiement Stripe
 * @route   POST /api/subscriptions/create-checkout-session
 * @access  Private
 */
const createCheckoutSession = async (req, res) => {
    try {
        const { userId, subscriptionId, billingType } = req.body;
        
        // Trouver l'utilisateur par son ID
        const user = users.find(u => u.id === parseInt(userId));
        
        // Vérifier si l'utilisateur existe
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        // Trouver l'abonnement par son ID
        const subscription = subscriptions.find(s => s.id === subscriptionId);
        
        // Vérifier si l'abonnement existe
        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: 'Abonnement non trouvé'
            });
        }
        
        // Vérifier si l'abonnement est gratuit
        if (subscription.price.monthly === 0) {
            // Mettre à jour l'abonnement de l'utilisateur
            const userIndex = users.findIndex(u => u.id === parseInt(userId));
            users[userIndex].subscription = subscriptionId;
            
            // Retourner la réponse
            return res.status(200).json({
                success: true,
                message: 'Abonnement gratuit activé avec succès',
                redirectUrl: '/dashboard'
            });
        }
        
        // Dans une vraie implémentation, nous créerions une session de paiement Stripe
        // Ici, nous simulons simplement une réponse réussie
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            sessionId: 'simulated_session_id',
            redirectUrl: '/checkout/success?session_id=simulated_session_id'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la création de la session de paiement',
            error: error.message
        });
    }
};

/**
 * @desc    Webhook Stripe pour gérer les événements de paiement
 * @route   POST /api/subscriptions/webhook
 * @access  Public
 */
const stripeWebhook = async (req, res) => {
    try {
        // Dans une vraie implémentation, nous vérifierions la signature de l'événement
        // et traiterions les différents types d'événements (paiement réussi, échec, etc.)
        
        // Ici, nous simulons simplement une réponse réussie
        
        // Retourner la réponse
        return res.status(200).json({ received: true });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors du traitement du webhook Stripe',
            error: error.message
        });
    }
};

/**
 * @desc    Mettre à jour l'abonnement d'un utilisateur
 * @route   PUT /api/subscriptions/user
 * @access  Private
 */
const updateUserSubscription = async (req, res) => {
    try {
        const { userId, subscriptionId } = req.body;
        
        // Trouver l'utilisateur par son ID
        const userIndex = users.findIndex(u => u.id === parseInt(userId));
        
        // Vérifier si l'utilisateur existe
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        // Trouver l'abonnement par son ID
        const subscription = subscriptions.find(s => s.id === subscriptionId);
        
        // Vérifier si l'abonnement existe
        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: 'Abonnement non trouvé'
            });
        }
        
        // Mettre à jour l'abonnement de l'utilisateur
        users[userIndex].subscription = subscriptionId;
        
        // Définir la date de fin d'abonnement (1 mois à partir de maintenant)
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 1);
        users[userIndex].subscriptionEndDate = endDate.toISOString();
        
        // Ajouter une transaction
        transactions.push({
            id: transactions.length + 1,
            userId: parseInt(userId),
            subscriptionId,
            amount: subscription.price.monthly,
            currency: 'EUR',
            status: 'succeeded',
            paymentMethod: 'card',
            createdAt: new Date().toISOString()
        });
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            message: 'Abonnement mis à jour avec succès',
            user: {
                id: users[userIndex].id,
                name: users[userIndex].name,
                email: users[userIndex].email,
                subscription: users[userIndex].subscription,
                subscriptionEndDate: users[userIndex].subscriptionEndDate
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la mise à jour de l\'abonnement',
            error: error.message
        });
    }
};

/**
 * @desc    Annuler l'abonnement d'un utilisateur
 * @route   DELETE /api/subscriptions/user
 * @access  Private
 */
const cancelUserSubscription = async (req, res) => {
    try {
        const userId = parseInt(req.query.userId);
        
        // Trouver l'utilisateur par son ID
        const userIndex = users.findIndex(u => u.id === userId);
        
        // Vérifier si l'utilisateur existe
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        // Vérifier si l'utilisateur a un abonnement payant
        if (users[userIndex].subscription === 'discovery') {
            return res.status(400).json({
                success: false,
                message: 'Vous ne pouvez pas annuler un abonnement gratuit'
            });
        }
        
        // Mettre à jour l'abonnement de l'utilisateur
        users[userIndex].subscription = 'discovery';
        users[userIndex].subscriptionEndDate = null;
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            message: 'Abonnement annulé avec succès',
            user: {
                id: users[userIndex].id,
                name: users[userIndex].name,
                email: users[userIndex].email,
                subscription: users[userIndex].subscription,
                subscriptionEndDate: users[userIndex].subscriptionEndDate
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de l\'annulation de l\'abonnement',
            error: error.message
        });
    }
};

/**
 * @desc    Obtenir l'historique des transactions d'un utilisateur
 * @route   GET /api/subscriptions/transactions
 * @access  Private
 */
const getUserTransactions = async (req, res) => {
    try {
        const userId = parseInt(req.query.userId);
        
        // Filtrer les transactions par utilisateur
        const userTransactions = transactions.filter(t => t.userId === userId);
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            count: userTransactions.length,
            transactions: userTransactions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération des transactions',
            error: error.message
        });
    }
};

// Export des fonctions du contrôleur
module.exports = {
  getSubscriptions,
  getSubscriptionById,
  getUserSubscription,
  createCheckoutSession,
  stripeWebhook, // 👈 renommé ici
  updateUserSubscription,
  cancelUserSubscription,
  getUserTransactions
};


