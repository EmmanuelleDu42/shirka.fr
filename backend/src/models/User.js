// Modèle Utilisateur
// Ce fichier définit le schéma de données pour les utilisateurs

// Importation des dépendances (à installer via npm lorsque Node.js sera disponible)
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// Définition du schéma (commenté pour l'instant)
/*
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Le nom est requis'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'L\'email est requis'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Veuillez fournir un email valide']
    },
    password: {
        type: String,
        required: [true, 'Le mot de passe est requis'],
        minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères'],
        select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    subscription: {
        type: String,
        enum: ['discovery', 'creator', 'pro'],
        default: 'discovery'
    },
    subscriptionEndDate: {
        type: Date,
        default: null
    },
    generationsCount: {
        type: Number,
        default: 0
    },
    generationsLimit: {
        type: Number,
        default: 5 // Limite pour le forfait Découverte
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware pour hacher le mot de passe avant l'enregistrement
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Méthode pour vérifier si le mot de passe correspond
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Méthode pour générer un token JWT
userSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

// Méthode pour mettre à jour les limites de génération en fonction de l'abonnement
userSchema.methods.updateGenerationLimits = function() {
    switch (this.subscription) {
        case 'discovery':
            this.generationsLimit = 5;
            break;
        case 'creator':
            this.generationsLimit = 50;
            break;
        case 'pro':
            this.generationsLimit = Infinity; // Illimité
            break;
        default:
            this.generationsLimit = 5;
    }
    
    return this.save();
};

const User = mongoose.model('User', userSchema);
*/

// Simulation du modèle utilisateur (à remplacer par le modèle Mongoose)
class User {
    constructor(data) {
        this.id = data.id || Date.now();
        this.name = data.name;
        this.email = data.email;
        this.password = data.password; // Dans une vraie implémentation, ce serait haché
        this.role = data.role || 'user';
        this.subscription = data.subscription || 'discovery';
        this.subscriptionEndDate = data.subscriptionEndDate || null;
        this.generationsCount = data.generationsCount || 0;
        this.generationsLimit = this.calculateGenerationsLimit();
        this.createdAt = data.createdAt || new Date();
    }
    
    // Méthode pour calculer la limite de générations en fonction de l'abonnement
    calculateGenerationsLimit() {
        switch (this.subscription) {
            case 'discovery':
                return 5;
            case 'creator':
                return 50;
            case 'pro':
                return Infinity; // Illimité
            default:
                return 5;
        }
    }
    
    // Méthode pour vérifier si l'utilisateur peut générer du contenu
    canGenerateContent() {
        if (this.subscription === 'pro') {
            return true; // Illimité pour le forfait Pro
        }
        
        return this.generationsCount < this.generationsLimit;
    }
    
    // Méthode pour incrémenter le compteur de générations
    incrementGenerationsCount() {
        this.generationsCount += 1;
        return this;
    }
    
    // Méthode pour mettre à jour l'abonnement
    updateSubscription(newSubscription) {
        this.subscription = newSubscription;
        this.generationsLimit = this.calculateGenerationsLimit();
        
        // Définir la date de fin d'abonnement (1 mois à partir de maintenant)
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 1);
        this.subscriptionEndDate = endDate;
        
        return this;
    }
    
    // Méthode pour vérifier si l'abonnement est actif
    isSubscriptionActive() {
        if (this.subscription === 'discovery') {
            return true; // Le forfait gratuit est toujours actif
        }
        
        if (!this.subscriptionEndDate) {
            return false;
        }
        
        return new Date() < new Date(this.subscriptionEndDate);
    }
    
    // Méthode pour convertir l'instance en objet simple
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            role: this.role,
            subscription: this.subscription,
            subscriptionEndDate: this.subscriptionEndDate,
            generationsCount: this.generationsCount,
            generationsLimit: this.generationsLimit,
            createdAt: this.createdAt
        };
    }
}

// Export du modèle
module.exports = User;
