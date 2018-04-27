const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Example = db.define('example', {
  text: {
    type: Sequelize.TEXT,
  }
})

module.exports = Example
