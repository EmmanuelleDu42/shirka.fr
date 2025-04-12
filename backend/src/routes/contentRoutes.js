const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const {
  generateContent,
  getUserContents,
  getContentById,
  updateContent,
  deleteContent,
  getUserContentStats
} = require('../controllers/contentController');

// Routes protégées
router.post('/generate', protect, generateContent);
router.get('/', protect, getUserContents);
router.get('/stats', protect, getUserContentStats);
router.get('/:id', protect, getContentById);
router.put('/:id', protect, updateContent);
router.delete('/:id', protect, deleteContent);

module.exports = router;
