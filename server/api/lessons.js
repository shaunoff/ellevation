const router = require('express').Router()
const {Lesson} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Lesson.findOne({
    where: {
      id: 1
    },
    include: {all:true}
  })
    .then(lessons => res.json(lessons))
    .catch(next)
})
