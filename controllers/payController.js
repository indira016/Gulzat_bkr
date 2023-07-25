const {Pay, User, Course} = require('../models/models')
const ApiError = require('../error/ApiError')

class payController {
    async create(req, res, next) {
        try {
            const {phone, personal_account, price, userId, courseId} = req.body
            const pay = await Pay.create({phone, personal_account, price, userId, courseId})
            return res.json(pay)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const pay = await Pay.findAll({
            include: [
                {
                    model: User,
                    attributes: ["name"]
                },
                {
                    model: Course,
                    attributes: ["titleCourse"],
                },
            ],
        })
        return res.json(pay)
    }

    async getOne(req, res) {
        const {id} = req.params
        const pay = await Course.findAndCountAll(
            {
                where:{id}
            }
        )
        return res.json(pay)
    }
    async getCourseId(req, res) {
        const {courseId} = req.params
        const pay = await Course.findAndCountAll(
            {
                where:{courseId}
            }
        )
        return res.json(pay)
    }
}

module.exports = new payController()