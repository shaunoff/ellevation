const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Student = db.define('student', {
  grade: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.TEXT,
  },
  level: {
    type: Sequelize.TEXT,
  }
})

module.exports = Student
