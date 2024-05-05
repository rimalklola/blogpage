// Import your Comment model
const Comment = require('../models/comment');

// Controller functions
const commentcontroller = {
  createComment: async (req, res) => {
    try {
      const { content, postId } = req.body;
      const comment = await Comment.create({ content, postId });
      res.status(201).json({ success: true, data: comment });
    } catch (error) {
      console.error('Error creating comment:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.findAll();
      res.status(200).json({ success: true, data: comments });
    } catch (error) {
      console.error('Error getting comments:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  getCommentById: async (req, res) => {
    try {
      const { commentId } = req.params;
      const comment = await Comment.findByPk(commentId);
      if (!comment) {
        return res.status(404).json({ success: false, error: 'Comment not found' });
      }
      res.status(200).json({ success: true, data: comment });
    } catch (error) {
      console.error('Error getting comment by ID:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  updateComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const { content } = req.body;
      const comment = await Comment.findByPk(commentId);
      if (!comment) {
        return res.status(404).json({ success: false, error: 'Comment not found' });
      }
      comment.content = content;
      await comment.save();
      res.status(200).json({ success: true, data: comment });
    } catch (error) {
      console.error('Error updating comment:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const comment = await Comment.findByPk(commentId);
      if (!comment) {
        return res.status(404).json({ success: false, error: 'Comment not found' });
      }
      await comment.destroy();
      res.status(200).json({ success: true, message: 'Comment deleted successfully' });
    } catch (error) {
      console.error('Error deleting comment:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
};

module.exports = commentcontroller;
