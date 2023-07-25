const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Course = sequelize.define('course', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    titleCourse: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    description2: {type: DataTypes.TEXT, allowNull: false},
    time: {type: DataTypes.INTEGER, allowNull: false},
    people: {type: DataTypes.STRING, allowNull: false},
})

const Review = sequelize.define('review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
})

const QuestionsAndAnswers = sequelize.define('questions_and_answers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
})

const Pay = sequelize.define('Pay', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING, allowNull: false},
    personal_account: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
})

User.hasMany(Pay)
Pay.belongsTo(User)
Course.hasMany(Pay)
Pay.belongsTo(Course)


const Tests = sequelize.define('test', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
})


User.hasMany(Course)
Course.belongsTo(User)
Course.hasMany(Tests)
Tests.belongsTo(Course)

module.exports = {
    User, Course, Tests, Review, QuestionsAndAnswers, Pay
}





