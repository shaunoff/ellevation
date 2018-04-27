const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Student = db.define('student', {
  text: {
    type: Sequelize.TEXT,
  }
})

module.exports = Student
