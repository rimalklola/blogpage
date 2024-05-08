const express = require('express'); /*kanimportiw express*/

const app = express(); /*kancreayiw app */ 
const PORT = 3000; 

app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
});

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 

// Require all controller files
const blogpostcontroller = require('./controllers/blogpostcontroller');
const categorycontroller = require('./controllers/categorycontroller');
const commentcontroller = require('./controllers/commentcontroller');


// Define routes for blog post controller
app.post('/api/posts', blogpostcontroller.createPost);
app.get('/api/posts', blogpostcontroller.getAllPosts);
app.get('/api/posts/category/:categoryId', blogpostcontroller.getPostsByCategory);
app.put('/api/posts/:postId', blogpostcontroller.updatePost);
app.delete('/api/posts/:postId', blogpostcontroller.deletePost);

// Define routes for category controller
app.post('/api/categories', categorycontroller.createCategory);
app.get('/api/categories', categorycontroller.getAllCategories);
app.get('/api/categories/:categoryId', categorycontroller.getCategoryById);
app.put('/api/categories/:categoryId', categorycontroller.updateCategory);
app.delete('/api/categories/:categoryId', categorycontroller.deleteCategory);

// Define routes for comment controller
app.post('/api/comments', commentcontroller.createComment);
app.get('/api/comments', commentcontroller.getAllComments);
app.get('/api/comments/:commentId', commentcontroller.getCommentById);
app.put('/api/comments/:commentId', commentcontroller.updateComment);
app.delete('/api/comments/:commentId', commentcontroller.deleteComment);

