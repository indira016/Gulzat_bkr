const Router = require('express')
const router = new Router()
const coursesRouter = require('./coursesRouter')
const userRouter = require('./userRouter')
const questionsAndAnswersRouter = require('./questionsAndAnswersRouter')
const reviewController = require('./reviewRouter')
const payRouter = require('./payRouter')

router.use('/courses', coursesRouter)
router.use('/user', userRouter)
router.use('/questions_and_answers', questionsAndAnswersRouter)
router.use('/review', reviewController)
router.use('/pay', payRouter)



module.exports = router