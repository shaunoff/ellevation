const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Note = db.define('note', {
  text: {
    type: Sequelize.TEXT,
  }
})

module.exports = Note
