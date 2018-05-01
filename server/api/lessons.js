const router = require('express').Router()
const {Lesson,Comment,Student} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Lesson.findOne({
    where: {
      id: 1
    },
    include: [
      {
        model: Comment,
        include: {all: true}
      },
      {
        model: Student,
        include: {all: true}
      }
    ]
  })
    .then(lessons => res.json(lessons))
    .catch(next)
})

router.put('/', (req, res, next) => {
  Lesson.findOne({
    where: {
      id: 1
    },
    include: [
      {
        model: Comment,
        include: {all: true}
      },
      {
        model: Student,
        include: {all: true}
      }
    ]
  })
    .then(lessons => res.json(lessons))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Lesson.update(req.body, {where: {id: req.params.id}, returning: true})
  .then(data => {
    return Lesson.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Comment,
          include: {all: true}
        },
        {
          model: Student,
          include: {all: true}
        }
      ]
    })
  })
    .then(lesson => res.json(lesson))
    .catch(next)
})


router.post('/comment/:id', (req, res, next) => {
  const {text} = req.body
  const {id} =req.params
  Comment.create({lessonId: id, text: text, userId: 1})
    .then(data => {
      return Lesson.findOne({
        where: {id},
        include: [
          {
            model: Comment,
            include: {all: true}
          },
          {
            model: Student,
            include: {all: true}
          }
        ]
      })
    })
      .then(lesson => res.json(lesson))
      .catch(next)
})
