const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');


// create new user....
router.post('/users', userController.createNewUser);
// get all user....
router.get('/users', userController.getUserList);



module.exports = router;