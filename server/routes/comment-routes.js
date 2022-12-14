const { check } = require('express-validator');
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment-controller');
const { getCommentByPostId, createComment, updateComment, postComment } = commentController;
const auth = require("../middleware/auth");

// To comment in Post
router.post("/comment", auth.protect, postComment);

// Get all comments of post by post id
// router.get('/:postId', getCommentByPostId);


/*
For Creating Comment Request like this
{
    "parentPost": "63577c7c21c9b570a042070e",
    "body": "Yes!!!!!!!!!!, Ayush4 its is great way to check this",
    "author": "6326b6aa2f4f9b643208e22f",
    "date": "{{DATE}}",
    "userID": "6326b6aa2f4f9b643208e22f"
}
*/

module.exports = router;