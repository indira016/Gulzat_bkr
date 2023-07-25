const {Course} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class CourseController {
    async create(req, res, next) {
        try {
            const {titleCourse, description, description2, time, people, userId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const courses = await Course.create({titleCourse, description, description2, time, people, userId, img: fileName})
            return res.json(courses)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const courses = await Course.findAndCountAll()
        return res.json(courses)
    }

    async getOne(req, res) {
        const {id} = req.params
        const course = await Course.findOne(
            {
                where:{id}
            }
        )
        return res.json(course)
    }
}

module.exports = new CourseController()