const express = require('express')
const authContoller = require('../controllers/auth.controller')

const router = express.Router()

router.post('/user/register', authContoller.registerUser)
router.post('/user/login', authContoller.loginUser)
router.get('/user/logout', authContoller.logoutUser)


module.exports = router