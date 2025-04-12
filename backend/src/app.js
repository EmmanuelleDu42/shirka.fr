const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

// Chargement des variables d'environnement
dotenv.config();

// Initialisation de l'application
const app = express();

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/content', require('./routes/contentRoutes'));
app.use('/api/subscriptions', require('./routes/subscriptionRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Route de test
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API Smart Content Platform',
    version: '1.0.0'
  });
});

// Serve les fichiers statiques du frontend si en production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../frontend/build', 'index.html'));
  });
}

// Gestion des erreurs (si existants dans ton projet)
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
app.use(notFound);
app.use(errorHandler);

// Lancement du serveur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serveur démarré en mode ${process.env.NODE_ENV} sur le port ${port}`);
});
