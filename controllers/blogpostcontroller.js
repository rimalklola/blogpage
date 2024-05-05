// Import your BlogPost model
const BlogPost = require('../models/blogpost');

// Controller functions
const blogpostcontroller = {
  createPost: async (req, res) => {
    try {
      const { title, content, imageURL, categoryId } = req.body;
      const post = await BlogPost.create({ title, content, imageURL, categoryId });
      res.status(201).json({ success: true, data: post });
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const posts = await BlogPost.findAll();
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      console.error('Error getting posts:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  getPostsByCategory: async (req, res) => {
    try {
      const { categoryId } = req.params;
      const posts = await BlogPost.findAll({ where: { categoryId } });
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      console.error('Error getting posts by category:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  updatePost: async (req, res) => {
    try {
      const { postId } = req.params;
      const { title, content, imageURL, categoryId } = req.body;
      const post = await BlogPost.findByPk(postId);
      if (!post) {
        return res.status(404).json({ success: false, error: 'Post not found' });
      }
      post.title = title;
      post.content = content;
      post.imageURL = imageURL;
      post.categoryId = categoryId;
      await post.save();
      res.status(200).json({ success: true, data: post });
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  deletePost: async (req, res) => {
    try {
      const { postId } = req.params;
      const post = await BlogPost.findByPk(postId);
      if (!post) {
        return res.status(404).json({ success: false, error: 'Post not found' });
      }
      await post.destroy();
      res.status(200).json({ success: true, message: 'Post deleted successfully' });
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
};

module.exports = blogpostcontroller;
