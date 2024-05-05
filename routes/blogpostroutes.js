const express = require('express');
const router = express.Router();
const blogpostcontroller = require('../controllers/blogpostcontroller');

// Route to create a new blog post
router.post('/posts', blogpostcontroller.createPost);

// Route to get all blog posts
router.get('/posts', blogpostcontroller.getAllPosts);

// Route to get blog posts by category
router.get('/posts/category/:categoryId', blogpostcontroller.getPostsByCategory);

// Route to update a blog post
router.put('/posts/:postId', blogpostcontroller.updatePost);

// Route to delete a blog post
router.delete('/posts/:postId', blogpostcontroller.deletePost);

module.exports = router;
