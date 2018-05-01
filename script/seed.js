
const db = require('../server/db')
const {User,Lesson, Student} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const lesson = await Lesson.create({
    name: "testy westy"
  })
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'gdavis@email.com', password: '123'})
  ])

  const students = await Promise.all([
    Student.create({name: 'Harry', grade: 1, lessonId: 1, level: 'high'}),
    Student.create({name: 'Susan', grade: 2, lessonId: 1, level: 'med'}),
    Student.create({name: 'Boris', grade: 3, lessonId: 1, level: 'low'}),
    Student.create({name: 'Charlie', grade: 4, lessonId: 1, level: 'high'}),
    Student.create({name: 'Anne', grade: 5, lessonId: 1, level: 'high'}),
    Student.create({name: 'Dave', grade: 6, lessonId: 1, level: 'med'}),
    Student.create({name: 'Olivia', grade: 7, lessonId: 1, level: 'low'}),
    Student.create({name: 'Gabriella', grade: 8, lessonId: 1, level: 'med'}),
    Student.create({name: 'Noah', grade: 9, lessonId: 1, level: 'high'}),
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!

}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
