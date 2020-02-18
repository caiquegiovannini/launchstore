const express = require('express')
const routes = express.Router()

const SessionController = require('../app/controllers/SessionController')
const UserController = require('../app/controllers/UserController')

const Validator = require('../app/validators/user')

// // login/logout
// routes.get('/login', SessionController.loginForm)
// routes.post('/login', SessionController.login)
// routes.post('/logoute', SearchController.logout)

// // reset password / forgot
// routes.get('/forgot-password', SearchController.forgotForm)
// routes.get('/password-reset', SearchController.resetForm)
// routes.post('/forgot-password', SearchController.forgot)
// routes.post('/password-reset', SearchController.reset)

// // user register
routes.get('/register', UserController.registerForm)
routes.post('/register', Validator.post, UserController.post)

routes.get('/', UserController.show)
// routes.put('/', UserController.put)
// routes.delete('/', UserController.delete)

module.exports = routes