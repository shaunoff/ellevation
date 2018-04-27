const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Resource = db.define('resource', {
  text: {
    type: Sequelize.TEXT,
  }
})

module.exports = Resource
