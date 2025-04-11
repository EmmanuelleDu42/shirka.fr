// Middleware d'authentification
// Ce fichier définit les middlewares pour protéger les routes et vérifier les rôles

// Importation des dépendances (à installer via npm lorsque Node.js sera disponible)
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// Simulation de la base de données utilisateurs
const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user',
        subscription: 'creator'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'admin',
        subscription: 'pro'
    }
];

/**
 * Middleware pour protéger les routes
 * Vérifie si l'utilisateur est authentifié
 */
const protect = async (req, res, next) => {
    try {
        // Dans une vraie implémentation, nous vérifierions le token JWT dans les en-têtes
        // Ici, nous simulons en utilisant l'ID fourni dans les paramètres de requête
        
        let token;
        
        // Vérifier si le token est présent dans les en-têtes
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            // Extraire le token
            token = req.headers.authorization.split(' ')[1];
            
            // Dans une vraie implémentation, nous vérifierions le token avec jwt.verify
            // Ici, nous simulons en extrayant l'ID de l'utilisateur du token
            const userId = parseInt(token.split('-').pop());
            
            // Trouver l'utilisateur par son ID
            const user = users.find(u => u.id === userId);
            
            // Vérifier si l'utilisateur existe
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'Non autorisé, token invalide'
                });
            }
            
            // Ajouter l'utilisateur à la requête
            req.user = user;
            
            // Passer au middleware suivant
            next();
        } else {
            // Si le token n'est pas présent dans les en-têtes, vérifier dans les paramètres de requête (pour la simulation)
            if (req.query.userId) {
                const userId = parseInt(req.query.userId);
                
                // Trouver l'utilisateur par son ID
                const user = users.find(u => u.id === userId);
                
                // Vérifier si l'utilisateur existe
                if (!user) {
                    return res.status(401).json({
                        success: false,
                        message: 'Non autorisé, utilisateur non trouvé'
                    });
                }
                
                // Ajouter l'utilisateur à la requête
                req.user = user;
                
                // Passer au middleware suivant
                next();
            } else {
                return res.status(401).json({
                    success: false,
                    message: 'Non autorisé, token non trouvé'
                });
            }
        }
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Non autorisé, erreur de token',
            error: error.message
        });
    }
};

/**
 * Middleware pour vérifier si l'utilisateur est un administrateur
 * Doit être utilisé après le middleware protect
 */
const admin = (req, res, next) => {
    // Vérifier si l'utilisateur est un administrateur
    if (req.user && req.user.role === 'admin') {
        // Passer au middleware suivant
        next();
    } else {
        return res.status(403).json({
            success: false,
            message: 'Non autorisé, accès administrateur requis'
        });
    }
};

/**
 * Middleware pour vérifier si l'utilisateur a un abonnement actif
 * Doit être utilisé après le middleware protect
 */
const activeSubscription = (req, res, next) => {
    // Vérifier si l'utilisateur a un abonnement actif
    if (req.user && (req.user.subscription === 'creator' || req.user.subscription === 'pro')) {
        // Passer au middleware suivant
        next();
    } else {
        return res.status(403).json({
            success: false,
            message: 'Non autorisé, abonnement actif requis'
        });
    }
};

/**
 * Middleware pour vérifier si l'utilisateur peut générer du contenu
 * Doit être utilisé après le middleware protect
 */
const canGenerateContent = (req, res, next) => {
    // Dans une vraie implémentation, nous vérifierions si l'utilisateur a atteint sa limite de générations
    // et si son abonnement est actif
    
    // Ici, nous simulons en fonction de l'abonnement
    if (req.user) {
        let canGenerate = false;
        
        switch (req.user.subscription) {
            case 'pro':
                // Abonnement Pro: générations illimitées
                canGenerate = true;
                break;
            case 'creator':
                // Abonnement Créateur: vérifier la limite (simulée)
                canGenerate = true; // Pour la simulation, on considère que l'utilisateur n'a pas atteint sa limite
                break;
            case 'discovery':
                // Abonnement Découverte: vérifier la limite (simulée)
                canGenerate = true; // Pour la simulation, on considère que l'utilisateur n'a pas atteint sa limite
                break;
            default:
                canGenerate = false;
        }
        
        if (canGenerate) {
            // Passer au middleware suivant
            next();
        } else {
            return res.status(403).json({
                success: false,
                message: 'Limite de générations atteinte pour votre abonnement'
            });
        }
    } else {
        return res.status(401).json({
            success: false,
            message: 'Non autorisé, utilisateur non trouvé'
        });
    }
};

// Export des middlewares
module.exports = {
    protect,
    admin,
    activeSubscription,
    canGenerateContent
};
