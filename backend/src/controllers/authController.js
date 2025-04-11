// Contrôleur d'authentification
// Ce fichier gère les fonctionnalités d'authentification (inscription, connexion, etc.)

// Importation des dépendances (à installer via npm lorsque Node.js sera disponible)
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// Simulation de la base de données utilisateurs
const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        password: '$2a$10$X7UrZZmEQoIdGfvJ5DP2UeQj.WZdHEYt9JLx1jpTBZ.ViYWTPTSNK', // password123
        role: 'user',
        subscription: 'creator'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: '$2a$10$X7UrZZmEQoIdGfvJ5DP2UeQj.WZdHEYt9JLx1jpTBZ.ViYWTPTSNK', // password123
        role: 'admin',
        subscription: 'pro'
    }
];

// Fonction utilitaire pour générer un token JWT (simulée)
const generateToken = (userId) => {
    // Dans une vraie implémentation, nous utiliserions jwt.sign
    return `simulated-jwt-token-for-user-${userId}`;
};

// Fonction utilitaire pour hacher un mot de passe (simulée)
const hashPassword = async (password) => {
    // Dans une vraie implémentation, nous utiliserions bcrypt.hash
    return `hashed-${password}`;
};

// Fonction utilitaire pour comparer un mot de passe (simulée)
const comparePassword = async (password, hashedPassword) => {
    // Dans une vraie implémentation, nous utiliserions bcrypt.compare
    return hashedPassword === `hashed-${password}` || hashedPassword === '$2a$10$X7UrZZmEQoIdGfvJ5DP2UeQj.WZdHEYt9JLx1jpTBZ.ViYWTPTSNK';
};

/**
 * @desc    Inscription d'un nouvel utilisateur
 * @route   POST /api/auth/register
 * @access  Public
 */
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        // Vérifier si l'utilisateur existe déjà
        const userExists = users.find(u => u.email === email);
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'Cet email est déjà utilisé'
            });
        }
        
        // Hacher le mot de passe
        const hashedPassword = await hashPassword(password);
        
        // Créer un nouvel utilisateur
        const newUser = {
            id: users.length + 1,
            name,
            email,
            password: hashedPassword,
            role: 'user',
            subscription: 'discovery' // Forfait gratuit par défaut
        };
        
        // Ajouter l'utilisateur à la "base de données"
        users.push(newUser);
        
        // Générer un token JWT
        const token = generateToken(newUser.id);
        
        // Retourner la réponse
        return res.status(201).json({
            success: true,
            token,
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                subscription: newUser.subscription
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de l\'inscription',
            error: error.message
        });
    }
};

/**
 * @desc    Connexion d'un utilisateur
 * @route   POST /api/auth/login
 * @access  Public
 */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Vérifier si l'utilisateur existe
        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Identifiants invalides'
            });
        }
        
        // Vérifier si le mot de passe correspond
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Identifiants invalides'
            });
        }
        
        // Générer un token JWT
        const token = generateToken(user.id);
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                subscription: user.subscription
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la connexion',
            error: error.message
        });
    }
};

/**
 * @desc    Obtenir les informations de l'utilisateur connecté
 * @route   GET /api/auth/me
 * @access  Private
 */
const getMe = async (req, res) => {
    try {
        // Dans une vraie implémentation, l'utilisateur serait extrait du token JWT
        // Ici, nous simulons en utilisant l'ID fourni dans les paramètres de requête
        const userId = parseInt(req.query.userId);
        
        // Vérifier si l'utilisateur existe
        const user = users.find(u => u.id === userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                subscription: user.subscription
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération des informations utilisateur',
            error: error.message
        });
    }
};

/**
 * @desc    Mettre à jour le mot de passe
 * @route   PUT /api/auth/password
 * @access  Private
 */
const updatePassword = async (req, res) => {
    try {
        // Dans une vraie implémentation, l'utilisateur serait extrait du token JWT
        const userId = parseInt(req.body.userId);
        const { currentPassword, newPassword } = req.body;
        
        // Vérifier si l'utilisateur existe
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur non trouvé'
            });
        }
        
        // Vérifier si le mot de passe actuel correspond
        const isMatch = await comparePassword(currentPassword, users[userIndex].password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Mot de passe actuel incorrect'
            });
        }
        
        // Hacher le nouveau mot de passe
        const hashedPassword = await hashPassword(newPassword);
        
        // Mettre à jour le mot de passe
        users[userIndex].password = hashedPassword;
        
        // Retourner la réponse
        return res.status(200).json({
            success: true,
            message: 'Mot de passe mis à jour avec succès'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la mise à jour du mot de passe',
            error: error.message
        });
    }
};

/**
 * @desc    Demander la réinitialisation du mot de passe
 * @route   POST /api/auth/forgot-password
 * @access  Public
 */
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        
        // Vérifier si l'utilisateur existe
        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Aucun utilisateur trouvé avec cet email'
            });
        }
        
        // Dans une vraie implémentation, nous enverrions un email avec un lien de réinitialisation
        // Ici, nous simulons simplement une réponse réussie
        
        return res.status(200).json({
            success: true,
            message: 'Email de réinitialisation envoyé'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la demande de réinitialisation du mot de passe',
            error: error.message
        });
    }
};

/**
 * @desc    Réinitialiser le mot de passe
 * @route   POST /api/auth/reset-password
 * @access  Public
 */
const resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        
        // Dans une vraie implémentation, nous vérifierions le token et trouverions l'utilisateur associé
        // Ici, nous simulons simplement une réponse réussie
        
        return res.status(200).json({
            success: true,
            message: 'Mot de passe réinitialisé avec succès'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la réinitialisation du mot de passe',
            error: error.message
        });
    }
};

// Export des fonctions du contrôleur
module.exports = {
    register,
    login,
    getMe,
    updatePassword,
    forgotPassword,
    resetPassword
};
