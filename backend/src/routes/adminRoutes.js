const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const {
  getPlatformStats,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAllContents,
  getAllTransactions,
  exportData
} = require('../controllers/adminController');

// Middleware protect est utilisé ici comme simulateur d'admin
// Tu peux ajouter un `isAdmin` si besoin

router.get('/stats', protect, getPlatformStats);
router.get('/users', protect, getAllUsers);
router.get('/users/:id', protect, getUserById);
router.put('/users/:id', protect, updateUser);
router.delete('/users/:id', protect, deleteUser);

router.get('/contents', protect, getAllContents);
router.get('/transactions', protect, getAllTransactions);
router.get('/export', protect, exportData);

module.exports = router;
