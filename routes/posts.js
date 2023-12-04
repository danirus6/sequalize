const express = require('express');

const router = express.Router();

const PostController = require('./controllers/PostController.js')

router.post('/', PostController.create);
router.get('/id/:id', PostController.getById);
router.get('/title/:title', PostController.getOneByName);
router.delete('/id/:id', PostController.delete);
module.exports = router;