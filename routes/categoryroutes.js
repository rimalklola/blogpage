const express = require('express');
const router = express.Router();
const categorycontroller = require('../controllers/categorycontroller');

// Route to create a new category
router.post('/categories', categoryController.createCategory);

// Route to get all categories
router.get('/categories', categoryController.getAllCategories);

// Route to get a category by ID
router.get('/categories/:categoryId', categoryController.getCategoryById);

// Route to update a category
router.put('/categories/:categoryId', categoryController.updateCategory);

// Route to delete a category
router.delete('/categories/:categoryId', categoryController.deleteCategory);

module.exports = router;
