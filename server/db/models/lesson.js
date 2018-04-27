const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Lesson = db.define('lesson', {
  name: {
    type: Sequelize.TEXT,
  }
})

module.exports = Lesson
