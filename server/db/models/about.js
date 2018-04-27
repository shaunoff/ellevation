const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const About = db.define('about', {
  text: {
    type: Sequelize.TEXT,
  }
})

module.exports = About
