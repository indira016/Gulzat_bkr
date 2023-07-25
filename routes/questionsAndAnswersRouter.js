const Router = require('express')
const router = new Router()
const questionsAndAnswersController = require('../controllers/questionsAndAnswersController')

router.post('/', questionsAndAnswersController.create)
router.get('/', questionsAndAnswersController.getAll)

module.exports = router