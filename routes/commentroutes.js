const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentcontroller');

// Route to create a new comment
router.post('/comments', commentController.createComment);

// Route to get all comments
router.get('/comments', commentController.getAllComments);

// Route to get a comment by ID
router.get('/comments/:commentId', commentController.getCommentById);

// Route to update a comment
router.put('/comments/:commentId', commentController.updateComment);

// Route to delete a comment
router.delete('/comments/:commentId', commentController.deleteComment);

module.exports = router;
