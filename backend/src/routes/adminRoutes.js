// Routes d'administration
// Ce fichier définit les routes liées à l'administration de la plateforme

// Importation des dépendances (à installer via npm lorsque Node.js sera disponible)
// const express = require('express');
// const { getGlobalStats, getAllUsers, getUserById, updateUser, deleteUser, getAllContents, getAllTransactions, exportData } = require('../controllers/adminController');
// const { protect, admin } = require('../middlewares/authMiddleware');

// Création du routeur
// const router = express.Router();

// Toutes les routes d'administration nécessitent une authentification et des droits d'administrateur
// router.use(protect, admin);

// Définition des routes
/**
 * @route   GET /api/admin/stats
 * @desc    Obtenir les statistiques globales de la plateforme
 * @access  Admin
 */
// router.get('/stats', getGlobalStats);

/**
 * @route   GET /api/admin/users
 * @desc    Obtenir tous les utilisateurs
 * @access  Admin
 */
// router.get('/users', getAllUsers);

/**
 * @route   GET /api/admin/users/:id
 * @desc    Obtenir un utilisateur par son ID
 * @access  Admin
 */
// router.get('/users/:id', getUserById);

/**
 * @route   PUT /api/admin/users/:id
 * @desc    Mettre à jour un utilisateur
 * @access  Admin
 */
// router.put('/users/:id', updateUser);

/**
 * @route   DELETE /api/admin/users/:id
 * @desc    Supprimer un utilisateur
 * @access  Admin
 */
// router.delete('/users/:id', deleteUser);

/**
 * @route   GET /api/admin/contents
 * @desc    Obtenir tous les contenus
 * @access  Admin
 */
// router.get('/contents', getAllContents);

/**
 * @route   GET /api/admin/transactions
 * @desc    Obtenir toutes les transactions
 * @access  Admin
 */
// router.get('/transactions', getAllTransactions);

/**
 * @route   GET /api/admin/export
 * @desc    Exporter les données (utilisateurs, contenus, transactions) au format CSV
 * @access  Admin
 */
// router.get('/export', exportData);

// Export du routeur
// module.exports = router;

// Simulation des routes d'administration (à remplacer par Express)
const adminRoutes = {
    getGlobalStats: {
        method: 'GET',
        path: '/api/admin/stats',
        handler: 'getGlobalStats',
        access: 'Admin',
        description: 'Obtenir les statistiques globales de la plateforme'
    },
    getAllUsers: {
        method: 'GET',
        path: '/api/admin/users',
        handler: 'getAllUsers',
        access: 'Admin',
        description: 'Obtenir tous les utilisateurs'
    },
    getUserById: {
        method: 'GET',
        path: '/api/admin/users/:id',
        handler: 'getUserById',
        access: 'Admin',
        description: 'Obtenir un utilisateur par son ID'
    },
    updateUser: {
        method: 'PUT',
        path: '/api/admin/users/:id',
        handler: 'updateUser',
        access: 'Admin',
        description: 'Mettre à jour un utilisateur'
    },
    deleteUser: {
        method: 'DELETE',
        path: '/api/admin/users/:id',
        handler: 'deleteUser',
        access: 'Admin',
        description: 'Supprimer un utilisateur'
    },
    getAllContents: {
        method: 'GET',
        path: '/api/admin/contents',
        handler: 'getAllContents',
        access: 'Admin',
        description: 'Obtenir tous les contenus'
    },
    getAllTransactions: {
        method: 'GET',
        path: '/api/admin/transactions',
        handler: 'getAllTransactions',
        access: 'Admin',
        description: 'Obtenir toutes les transactions'
    },
    exportData: {
        method: 'GET',
        path: '/api/admin/export',
        handler: 'exportData',
        access: 'Admin',
        description: 'Exporter les données (utilisateurs, contenus, transactions) au format CSV'
    }
};

// Export des routes
module.exports = adminRoutes;
