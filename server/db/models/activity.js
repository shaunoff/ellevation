const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Activity = db.define('activity', {
  text: {
    type: Sequelize.TEXT,
  }
})

module.exports = Activity
