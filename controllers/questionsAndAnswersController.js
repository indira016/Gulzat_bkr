const {QuestionsAndAnswers} = require('../models/models')
const ApiError = require('../error/ApiError')


class questionsAndAnswersController {
    async create(req, res, next) {
        try {
            const {title, description} = req.body
            const questionsAndAnswers = await QuestionsAndAnswers.create({title, description})
            return res.json(questionsAndAnswers)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const questionsAndAnswers = await QuestionsAndAnswers.findAll()
        return res.json(questionsAndAnswers)
    }
}

module.exports = new questionsAndAnswersController()