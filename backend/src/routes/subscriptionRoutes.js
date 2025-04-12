const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const {
  getSubscriptions,
  getSubscriptionById,
  getUserSubscription,
  createCheckoutSession,
  updateUserSubscription,
  cancelUserSubscription,
  getUserTransactions,
  stripeWebhook
} = require('../controllers/subscriptionController');

// Routes publiques
router.get('/', getSubscriptions);
router.get('/:id', getSubscriptionById);
router.post('/webhook', stripeWebhook);

// Routes privées
router.get('/user', protect, getUserSubscription);
router.post('/create-checkout-session', protect, createCheckoutSession);
router.put('/user', protect, updateUserSubscription);
router.delete('/user', protect, cancelUserSubscription);
router.get('/transactions', protect, getUserTransactions);

module.exports = router;
