// Import your Category model
const Category = require('../models/category');

// Controller functions
const categorycontroller = {
  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.create({ name });
      res.status(201).json({ success: true, data: category });
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).json({ success: true, data: categories });
    } catch (error) {
      console.error('Error getting categories:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const { categoryId } = req.params;
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ success: false, error: 'Category not found' });
      }
      res.status(200).json({ success: true, data: category });
    } catch (error) {
      console.error('Error getting category by ID:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const { categoryId } = req.params;
      const { name } = req.body;
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ success: false, error: 'Category not found' });
      }
      category.name = name;
      await category.save();
      res.status(200).json({ success: true, data: category });
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const { categoryId } = req.params;
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ success: false, error: 'Category not found' });
      }
      await category.destroy();
      res.status(200).json({ success: true, message: 'Category deleted successfully' });
    } catch (error) {
      console.error('Error deleting category:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
};

module.exports = categorycontroller;
