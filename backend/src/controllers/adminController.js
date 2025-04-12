// Contrôleur d'administration
// Ce fichier gère les fonctionnalités liées à l'administration de la plateforme

// Importation des dépendances (à installer via npm lorsque Node.js sera disponible)
// const User = require('../models/User');
// const Content = require('../models/Content');
// const { Subscription } = require('../models/Subscription');

// Simulation de la base de données utilisateurs
let users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user',
        subscription: 'creator',
        subscriptionEndDate: '2025-05-10T00:00:00Z',
        generationsCount: 25,
        generationsLimit: 50,
        createdAt: '2025-03-15T10:30:00Z'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'admin',
        subscription: 'pro',
        subscriptionEndDate: '2025-06-15T00:00:00Z',
        generationsCount: 120,
        generationsLimit: Infinity,
        createdAt: '2025-02-20T14:45:00Z'
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'user',
        subscription: 'discovery',
        subscriptionEndDate: null,
        generationsCount: 3,
        generationsLimit: 5,
        createdAt: '2025-04-05T09:15:00Z'
    }
];

// Simulation de la base de données de contenus
let contents = [
    {
        id: 1,
        userId: 1,
        platform: 'blog',
        topic: 'Marketing digital',
        keywords: ['stratégie', 'SEO', 'réseaux sociaux'],
        tone: 'professional',
        content: '<h2>10 Stratégies de Marketing Digital pour 2025</h2><p>Le marketing digital évolue constamment...</p>',
        title: '10 Stratégies de Marketing Digital pour 2025',
        status: 'published',
        metadata: {
            generatedAt: '2025-04-08T10:30:00Z',
            wordCount: 1200
        },
        createdAt: '2025-04-08T10:30:00Z',
        updatedAt: '2025-04-08T10:30:00Z'
    },
    {
        id: 2,
        userId: 1,
        platform: 'linkedin',
        topic: 'Intelligence artificielle',
        keywords: ['IA', 'innovation', 'technologie'],
        tone: 'professional',
        content: '<p>🚀 <strong>3 tendances incontournables dans l\'IA pour 2025</strong></p><p>Après avoir analysé les données...</p>',
        title: '3 tendances incontournables dans l\'IA pour 2025',
        status: 'draft',
        metadata: {
            generatedAt: '2025-04-10T14:45:00Z',
            wordCount: 350
        },
        createdAt: '2025-04-10T14:45:00Z',
        updatedAt: '2025-04-10T14:45:00Z'
    },
    {
        id: 3,
        userId: 3,
        platform: 'instagram',
        topic: 'Développement personnel',
        keywords: ['motivation', 'productivité', 'bien-être'],
        tone: 'inspirational',
        content: '<p>✨ <strong>Transformez votre approche du développement personnel avec ces 5 astuces</strong> ✨</p><p>Swipez pour découvrir...</p>',
        title: 'Transformez votre approche du développement personnel avec ces 5 astuces',
        status: 'published',
        metadata: {
            generatedAt: '2025-04-12T09:15:00Z',
            wordCount: 280
        },
        createdAt: '2025-04-12T09:15:00Z',
        updatedAt: '2025-04-12T09:15:00Z'
    }
];

// Simulation de la base de données d'abonnements
const subscriptions = [
    {
        id: 'discovery',
        name: 'Découverte',
        price: {
            monthly: 0,
            yearly: 0
        },
        limits: {
            generationsPerMonth: 5
        }
    },
    {
        id: 'creator',
        name: 'Créateur',
        price: {
            monthly: 29,
            yearly: 290
        },
        limits: {
            generationsPerMonth: 50
        }
    },
    {
        id: 'pro',
        name: 'Pro',
        price: {
            monthly: 79,
            yearly: 790
        },
        limits: {
            generationsPerMonth: -1 // Illimité
        }
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
 * @desc    Obtenir les statistiques globales de la plateforme
 * @route   GET /api/admin/stats
 * @access  Admin
 */
const getPlatformStats = async (req, res) => {
    try {
        // Calculer les statistiques globales
        const stats = {
            users: {
                total: users.length,
                bySubscription: {
                    discovery: users.filter(u => u.subscription === 'discovery').length,
                    creator: users.filter(u => u.subscription === 'creator').length,
                    pro: users.filter(u => u.subscription === 'pro').length
                },
                newThisMonth: users.filter(u => {
                    const createdAt = new Date(u.createdAt);
                    const now = new Date();
                    return createdAt.getMonth() === now.getMonth() && createdAt.getFullYear() === now.getFullYear();
                }).length
            },
            contents: {
                total: contents.length,
                byPlatform: {},
                byStatus: {
                    draft: contents.filter(c => c.status === 'draft').length,
                    published: contents.filter(c => c.status === 'published').length,
                    archived: contents.filter(c => c.status === 'archived').length
                },
                generatedThisMonth: contents.filter(c => {
                    const createdAt = new Date(c.createdAt);
                    const now = new Date();
                    return createdAt.getMonth() === now.getMonth() && createdAt.getFullYear() === now.getFullYear();
                }).length
            },
            revenue: {
                total: transactions.reduce((acc, t) => acc + t.amount, 0),
                thisMonth: transactions.filter(t => {
                    const createdAt = new Date(t.createdAt);
                    const now = new Date();
                    return createdAt.getMonth() === now.getMonth() && createdAt.getFullYear() === now.getFullYear();
                }).reduce((acc, t) => acc + t.amount, 0),
                bySubscription: {
                    discovery: 0, // Gratuit
                    creator: transactions.filter(t => t.subscriptionId === 'creator').reduce((acc, t) => acc + t.amount, 0),
                    pro: transactions.filter(t => t.subscriptionId === 'pro').reduce((acc, t) => acc + t.amount, 0)
                }
            }
        };
        
        // Calculer les statistiques par plateforme
        contents.forEach(content => {
            if (!stats.contents.byPlatform[content.platform]) {
                stats.contents.byPlatform[content.platform] = 0;
            }
            stats.contents.byPlatform[content.platform]++;
        });
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            stats
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération des statistiques globales',
            error: error.message
        });
    }
};

/**
 * @desc    Obtenir tous les utilisateurs
 * @route   GET /api/admin/users
 * @access  Admin
 */
const getAllUsers = async (req, res) => {
    try {
        // Pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        
        // Filtrage
        let filteredUsers = [...users];
        
        if (req.query.subscription) {
            filteredUsers = filteredUsers.filter(u => u.subscription === req.query.subscription);
        }
        
        if (req.query.role) {
            filteredUsers = filteredUsers.filter(u => u.role === req.query.role);
        }
        
        if (req.query.search) {
            const searchTerm = req.query.search.toLowerCase();
            filteredUsers = filteredUsers.filter(u => 
                u.name.toLowerCase().includes(searchTerm) || 
                u.email.toLowerCase().includes(searchTerm)
            );
        }
        
        // Tri
        if (req.query.sort) {
            const sortField = req.query.sort.startsWith('-') ? req.query.sort.substring(1) : req.query.sort;
            const sortOrder = req.query.sort.startsWith('-') ? -1 : 1;
            
            filteredUsers.sort((a, b) => {
                if (a[sortField] < b[sortField]) return -1 * sortOrder;
                if (a[sortField] > b[sortField]) return 1 * sortOrder;
                return 0;
            });
        } else {
            // Tri par défaut par date de création (du plus récent au plus ancien)
            filteredUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        
        // Pagination des résultats
        const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
        
        // Informations de pagination
        const pagination = {
            total: filteredUsers.length,
            pages: Math.ceil(filteredUsers.length / limit),
            page,
            limit
        };
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            pagination,
            users: paginatedUsers
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération des utilisateurs',
            error: error.message
        });
    }
};

/**
 * @desc    Obtenir un utilisateur par son ID
 * @route   GET /api/admin/users/:id
 * @access  Admin
 */
const getUserById = async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        
        // Trouver l'utilisateur par son ID
        const user = users.find(u => u.id === userId);
        
        // Vérifier si l'utilisateur existe
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        // Obtenir les contenus de l'utilisateur
        const userContents = contents.filter(c => c.userId === userId);
        
        // Obtenir les transactions de l'utilisateur
        const userTransactions = transactions.filter(t => t.userId === userId);
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            user,
            contents: userContents,
            transactions: userTransactions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération de l\'utilisateur',
            error: error.message
        });
    }
};

/**
 * @desc    Mettre à jour un utilisateur
 * @route   PUT /api/admin/users/:id
 * @access  Admin
 */
const updateUser = async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const { name, email, role, subscription, generationsLimit } = req.body;
        
        // Trouver l'index de l'utilisateur
        const userIndex = users.findIndex(u => u.id === userId);
        
        // Vérifier si l'utilisateur existe
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        // Mettre à jour l'utilisateur
        users[userIndex] = {
            ...users[userIndex],
            name: name || users[userIndex].name,
            email: email || users[userIndex].email,
            role: role || users[userIndex].role,
            subscription: subscription || users[userIndex].subscription,
            generationsLimit: generationsLimit !== undefined ? generationsLimit : users[userIndex].generationsLimit
        };
        
        // Si l'abonnement a été mis à jour, mettre à jour la limite de générations
        if (subscription && subscription !== users[userIndex].subscription) {
            const newSubscription = subscriptions.find(s => s.id === subscription);
            if (newSubscription) {
                users[userIndex].generationsLimit = newSubscription.limits.generationsPerMonth;
                
                // Définir la date de fin d'abonnement (1 mois à partir de maintenant)
                const endDate = new Date();
                endDate.setMonth(endDate.getMonth() + 1);
                users[userIndex].subscriptionEndDate = endDate.toISOString();
            }
        }
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            message: 'Utilisateur mis à jour avec succès',
            user: users[userIndex]
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la mise à jour de l\'utilisateur',
            error: error.message
        });
    }
};

/**
 * @desc    Supprimer un utilisateur
 * @route   DELETE /api/admin/users/:id
 * @access  Admin
 */
const deleteUser = async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        
        // Trouver l'index de l'utilisateur
        const userIndex = users.findIndex(u => u.id === userId);
        
        // Vérifier si l'utilisateur existe
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        // Supprimer l'utilisateur
        users.splice(userIndex, 1);
        
        // Supprimer les contenus de l'utilisateur
        contents = contents.filter(c => c.userId !== userId);
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            message: 'Utilisateur supprimé avec succès'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la suppression de l\'utilisateur',
            error: error.message
        });
    }
};

/**
 * @desc    Obtenir tous les contenus
 * @route   GET /api/admin/contents
 * @access  Admin
 */
const getAllContents = async (req, res) => {
    try {
        // Pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        
        // Filtrage
        let filteredContents = [...contents];
        
        if (req.query.platform) {
            filteredContents = filteredContents.filter(c => c.platform === req.query.platform);
        }
        
        if (req.query.status) {
            filteredContents = filteredContents.filter(c => c.status === req.query.status);
        }
        
        if (req.query.userId) {
            filteredContents = filteredContents.filter(c => c.userId === parseInt(req.query.userId));
        }
        
        if (req.query.search) {
            const searchTerm = req.query.search.toLowerCase();
            filteredContents = filteredContents.filter(c => 
                c.title.toLowerCase().includes(searchTerm) || 
                c.topic.toLowerCase().includes(searchTerm) ||
                (c.keywords && c.keywords.some(k => k.toLowerCase().includes(searchTerm)))
            );
        }
        
        // Tri
        if (req.query.sort) {
            const sortField = req.query.sort.startsWith('-') ? req.query.sort.substring(1) : req.query.sort;
            const sortOrder = req.query.sort.startsWith('-') ? -1 : 1;
            
            filteredContents.sort((a, b) => {
                if (a[sortField] < b[sortField]) return -1 * sortOrder;
                if (a[sortField] > b[sortField]) return 1 * sortOrder;
                return 0;
            });
        } else {
            // Tri par défaut par date de création (du plus récent au plus ancien)
            filteredContents.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        
        // Pagination des résultats
        const paginatedContents = filteredContents.slice(startIndex, endIndex);
        
        // Informations de pagination
        const pagination = {
            total: filteredContents.length,
            pages: Math.ceil(filteredContents.length / limit),
            page,
            limit
        };
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            pagination,
            contents: paginatedContents
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération des contenus',
            error: error.message
        });
    }
};

/**
 * @desc    Obtenir toutes les transactions
 * @route   GET /api/admin/transactions
 * @access  Admin
 */
const getAllTransactions = async (req, res) => {
    try {
        // Pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        
        // Filtrage
        let filteredTransactions = [...transactions];
        
        if (req.query.subscriptionId) {
            filteredTransactions = filteredTransactions.filter(t => t.subscriptionId === req.query.subscriptionId);
        }
        
        if (req.query.status) {
            filteredTransactions = filteredTransactions.filter(t => t.status === req.query.status);
        }
        
        if (req.query.userId) {
            filteredTransactions = filteredTransactions.filter(t => t.userId === parseInt(req.query.userId));
        }
        
        // Tri
        if (req.query.sort) {
            const sortField = req.query.sort.startsWith('-') ? req.query.sort.substring(1) : req.query.sort;
            const sortOrder = req.query.sort.startsWith('-') ? -1 : 1;
            
            filteredTransactions.sort((a, b) => {
                if (a[sortField] < b[sortField]) return -1 * sortOrder;
                if (a[sortField] > b[sortField]) return 1 * sortOrder;
                return 0;
            });
        } else {
            // Tri par défaut par date de création (du plus récent au plus ancien)
            filteredTransactions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        
        // Pagination des résultats
        const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);
        
        // Informations de pagination
        const pagination = {
            total: filteredTransactions.length,
            pages: Math.ceil(filteredTransactions.length / limit),
            page,
            limit
        };
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            pagination,
            transactions: paginatedTransactions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération des transactions',
            error: error.message
        });
    }
};

/**
 * @desc    Exporter les données (utilisateurs, contenus, transactions) au format CSV
 * @route   GET /api/admin/export
 * @access  Admin
 */
const exportData = async (req, res) => {
    try {
        const { type } = req.query;
        
        let csv = '';
        
        switch (type) {
            case 'users':
                // En-têtes CSV pour les utilisateurs
                csv = 'ID,Nom,Email,Rôle,Abonnement,Date de fin d\'abonnement,Générations utilisées,Limite de générations,Date de création\n';
                
                // Données des utilisateurs
                users.forEach(user => {
                    csv += `${user.id},"${user.name}",${user.email},${user.role},${user.subscription},${user.subscriptionEndDate || ''},${user.generationsCount},${user.generationsLimit === Infinity ? 'Illimité' : user.generationsLimit},${user.createdAt}\n`;
                });
                break;
                
            case 'contents':
                // En-têtes CSV pour les contenus
                csv = 'ID,ID Utilisateur,Plateforme,Thème,Mots-clés,Ton,Titre,Statut,Nombre de mots,Date de création,Date de modification\n';
                
                // Données des contenus
                contents.forEach(content => {
                    csv += `${content.id},${content.userId},${content.platform},"${content.topic}","${content.keywords.join(', ')}",${content.tone},"${content.title}",${content.status},${content.metadata.wordCount || ''},${content.createdAt},${content.updatedAt}\n`;
                });
                break;
                
            case 'transactions':
                // En-têtes CSV pour les transactions
                csv = 'ID,ID Utilisateur,ID Abonnement,Montant,Devise,Statut,Méthode de paiement,Date de création\n';
                
                // Données des transactions
                transactions.forEach(transaction => {
                    csv += `${transaction.id},${transaction.userId},${transaction.subscriptionId},${transaction.amount},${transaction.currency},${transaction.status},${transaction.paymentMethod},${transaction.createdAt}\n`;
                });
                break;
                
            default:
                return res.status(400).json({
                    success: false,
                    message: 'Type d\'export invalide. Les types valides sont: users, contents, transactions'
                });
        }
        
        // Définir les en-têtes de la réponse pour le téléchargement du fichier CSV
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename=${type}_export_${new Date().toISOString().split('T')[0]}.csv`);
        
        // Retourner le CSV
        return res.status(200).send(csv);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de l\'export des données',
            error: error.message
        });
    }
};

// Export des fonctions du contrôleur
module.exports = {
    getPlatformStats,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getAllContents,
    getAllTransactions,
    exportData
};
