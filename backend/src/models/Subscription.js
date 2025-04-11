// Modèle Abonnement
// Ce fichier définit le schéma de données pour les abonnements

// Importation des dépendances (à installer via npm lorsque Node.js sera disponible)
// const mongoose = require('mongoose');

// Définition du schéma (commenté pour l'instant)
/*
const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Le nom de l\'abonnement est requis'],
        unique: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'L\'identifiant de l\'abonnement est requis'],
        unique: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: [true, 'La description de l\'abonnement est requise']
    },
    price: {
        monthly: {
            type: Number,
            required: [true, 'Le prix mensuel est requis']
        },
        yearly: {
            type: Number,
            required: [true, 'Le prix annuel est requis']
        }
    },
    features: {
        type: [String],
        required: [true, 'Les fonctionnalités de l\'abonnement sont requises']
    },
    limits: {
        generationsPerMonth: {
            type: Number,
            required: [true, 'La limite de générations par mois est requise']
        },
        platforms: {
            type: Number,
            required: [true, 'Le nombre de plateformes est requis']
        },
        historyDays: {
            type: Number,
            required: [true, 'La durée de conservation de l\'historique est requise']
        }
    },
    isPopular: {
        type: Boolean,
        default: false
    },
    stripePriceIdMonthly: {
        type: String
    },
    stripePriceIdYearly: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware pour mettre à jour la date de modification
subscriptionSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
*/

// Simulation du modèle abonnement (à remplacer par le modèle Mongoose)
class Subscription {
    constructor(data) {
        this.id = data.id || Date.now();
        this.name = data.name;
        this.slug = data.slug || this.generateSlug(data.name);
        this.description = data.description || '';
        this.price = {
            monthly: data.price?.monthly || 0,
            yearly: data.price?.yearly || 0
        };
        this.features = data.features || [];
        this.limits = {
            generationsPerMonth: data.limits?.generationsPerMonth || 0,
            platforms: data.limits?.platforms || 0,
            historyDays: data.limits?.historyDays || 0
        };
        this.isPopular = data.isPopular || false;
        this.stripePriceIdMonthly = data.stripePriceIdMonthly || '';
        this.stripePriceIdYearly = data.stripePriceIdYearly || '';
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }
    
    // Méthode pour générer un slug à partir du nom
    generateSlug(name) {
        return name
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    }
    
    // Méthode pour mettre à jour l'abonnement
    update(data) {
        if (data.name) {
            this.name = data.name;
            if (!data.slug) {
                this.slug = this.generateSlug(data.name);
            }
        }
        
        if (data.slug) this.slug = data.slug;
        if (data.description) this.description = data.description;
        
        if (data.price) {
            this.price = {
                monthly: data.price.monthly !== undefined ? data.price.monthly : this.price.monthly,
                yearly: data.price.yearly !== undefined ? data.price.yearly : this.price.yearly
            };
        }
        
        if (data.features) this.features = data.features;
        
        if (data.limits) {
            this.limits = {
                generationsPerMonth: data.limits.generationsPerMonth !== undefined ? data.limits.generationsPerMonth : this.limits.generationsPerMonth,
                platforms: data.limits.platforms !== undefined ? data.limits.platforms : this.limits.platforms,
                historyDays: data.limits.historyDays !== undefined ? data.limits.historyDays : this.limits.historyDays
            };
        }
        
        if (data.isPopular !== undefined) this.isPopular = data.isPopular;
        if (data.stripePriceIdMonthly) this.stripePriceIdMonthly = data.stripePriceIdMonthly;
        if (data.stripePriceIdYearly) this.stripePriceIdYearly = data.stripePriceIdYearly;
        
        this.updatedAt = new Date();
        return this;
    }
    
    // Méthode pour calculer le prix annuel avec réduction
    getYearlyDiscount() {
        const monthlyTotal = this.price.monthly * 12;
        const yearlyTotal = this.price.yearly;
        
        if (monthlyTotal === 0 || yearlyTotal === 0) {
            return 0;
        }
        
        return Math.round(((monthlyTotal - yearlyTotal) / monthlyTotal) * 100);
    }
    
    // Méthode pour obtenir le prix formaté
    getFormattedPrice(type = 'monthly') {
        const price = type === 'yearly' ? this.price.yearly : this.price.monthly;
        
        if (price === 0) {
            return 'Gratuit';
        }
        
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR'
        }).format(price);
    }
    
    // Méthode pour convertir l'instance en objet simple
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            slug: this.slug,
            description: this.description,
            price: this.price,
            features: this.features,
            limits: this.limits,
            isPopular: this.isPopular,
            stripePriceIdMonthly: this.stripePriceIdMonthly,
            stripePriceIdYearly: this.stripePriceIdYearly,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

// Création des abonnements par défaut
const defaultSubscriptions = [
    new Subscription({
        name: 'Découverte',
        slug: 'discovery',
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
        isPopular: false
    }),
    
    new Subscription({
        name: 'Créateur',
        slug: 'creator',
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
        isPopular: true
    }),
    
    new Subscription({
        name: 'Pro',
        slug: 'pro',
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
        isPopular: false
    })
];

// Export du modèle et des abonnements par défaut
module.exports = {
    Subscription,
    defaultSubscriptions
};
