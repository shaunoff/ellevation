const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Lesson = db.define('lesson', {
  name: {
    type: Sequelize.TEXT,
  },
  saves: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Lesson
