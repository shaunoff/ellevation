const User = require('./user')
const Lesson = require('./lesson')
const About =  require('./about')
const Activity = require('./activity')
const Student = require('./student')
const Example = require('./example')
const Comment = require('./comment')
const Note = require('./note')
const Resource = require('./resource')

// User.hasMany(Appraisal)
// Appraisal.belongsTo(User)
//
// User.belongsToMany(Role, {through: 'permissions'})
// Role.belongsToMany(User, {through: 'permissions'})

Lesson.hasMany(Comment)
Comment.belongsTo(Lesson)

Lesson.hasMany(Resource)
Resource.belongsTo(Lesson)

Lesson.hasMany(Activity)
Activity.belongsTo(Lesson)

Lesson.hasMany(Note)
Note.belongsTo(Lesson)

Lesson.hasMany(Example)
Example.belongsTo(Lesson)

Lesson.hasOne(About)
About.belongsTo(Lesson)

Student.belongsToMany(Lesson, {through: 'learners'})
Lesson.belongsToMany(Student, {through: 'learners'})

module.exports = {
  User,
  Lesson,
  About,
  Activity,
  Student,
  Example,
  Comment,
  Note,
  Resource
}
