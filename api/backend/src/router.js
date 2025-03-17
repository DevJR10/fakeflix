const express = require('express')
const router = express.Router()

const controller = require('./controllers/movieController')
const middleware = require('./middleware/movieMiddleware')

router.get('/movies', controller.getAll)

router.get('/movies/:name', middleware.validarName, controller.getMovie)

router.get('/generos/:name', middleware.validarName, controller.getGenero)

router.post('/movies', middleware.validarName, middleware.validarData, middleware.validarImg ,controller.addAll)


module.exports = router