const Router = require('express')
const router = new Router()
const payController = require('../controllers/payController')
const courseController = require("../controllers/courseController")

router.post('/', payController.create)
router.get('/', payController.getAll)
router.get('/:id', payController.getOne)
router.get('/course/:courseId', payController.getCourseId)

module.exports = router