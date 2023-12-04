const express = require('express');

const router = express.Router();

const UserController = require('../controllers/userController');

router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.delete('/id/:id', UserController.delete);
router.put('/id/:id', UserController.update);

module.exports = router;