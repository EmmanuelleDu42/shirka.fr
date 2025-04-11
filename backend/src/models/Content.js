// Modèle Contenu
// Ce fichier définit le schéma de données pour les contenus générés

// Importation des dépendances (à installer via npm lorsque Node.js sera disponible)
// const mongoose = require('mongoose');

// Définition du schéma (commenté pour l'instant)
/*
const contentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    platform: {
        type: String,
        required: [true, 'La plateforme est requise'],
        enum: ['blog', 'linkedin', 'instagram', 'tiktok', 'twitter', 'facebook', 'youtube'],
        trim: true
    },
    topic: {
        type: String,
        required: [true, 'Le thème est requis'],
        trim: true
    },
    keywords: {
        type: [String],
        default: []
    },
    tone: {
        type: String,
        enum: ['professional', 'casual', 'friendly', 'humorous', 'formal', 'inspirational'],
        default: 'professional'
    },
    content: {
        type: String,
        required: [true, 'Le contenu est requis']
    },
    title: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'],
        default: 'draft'
    },
    metadata: {
        type: Object,
        default: {}
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
contentSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Content = mongoose.model('Content', contentSchema);
*/

// Simulation du modèle contenu (à remplacer par le modèle Mongoose)
class Content {
    constructor(data) {
        this.id = data.id || Date.now();
        this.userId = data.userId;
        this.platform = data.platform;
        this.topic = data.topic;
        this.keywords = data.keywords || [];
        this.tone = data.tone || 'professional';
        this.content = data.content;
        this.title = data.title || '';
        this.status = data.status || 'draft';
        this.metadata = data.metadata || {};
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }
    
    // Méthode pour mettre à jour le contenu
    update(data) {
        if (data.platform) this.platform = data.platform;
        if (data.topic) this.topic = data.topic;
        if (data.keywords) this.keywords = data.keywords;
        if (data.tone) this.tone = data.tone;
        if (data.content) this.content = data.content;
        if (data.title) this.title = data.title;
        if (data.status) this.status = data.status;
        if (data.metadata) this.metadata = { ...this.metadata, ...data.metadata };
        
        this.updatedAt = new Date();
        return this;
    }
    
    // Méthode pour publier le contenu
    publish() {
        this.status = 'published';
        this.updatedAt = new Date();
        return this;
    }
    
    // Méthode pour archiver le contenu
    archive() {
        this.status = 'archived';
        this.updatedAt = new Date();
        return this;
    }
    
    // Méthode pour extraire un extrait du contenu
    getExcerpt(length = 100) {
        // Supprimer les balises HTML
        const textContent = this.content.replace(/<[^>]*>/g, '');
        
        // Limiter la longueur et ajouter des points de suspension si nécessaire
        if (textContent.length <= length) {
            return textContent;
        }
        
        return textContent.substring(0, length) + '...';
    }
    
    // Méthode pour obtenir la date de création formatée
    getFormattedCreationDate() {
        return new Date(this.createdAt).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Méthode pour convertir l'instance en objet simple
    toJSON() {
        return {
            id: this.id,
            userId: this.userId,
            platform: this.platform,
            topic: this.topic,
            keywords: this.keywords,
            tone: this.tone,
            content: this.content,
            title: this.title,
            status: this.status,
            metadata: this.metadata,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

// Export du modèle
module.exports = Content;
