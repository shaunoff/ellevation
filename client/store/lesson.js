import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_LESSON = 'GET_LESSON'
const UPDATE_LESSON = 'UPDATE_LESSON'

/**
 * INITIAL STATE
 */
const defaultLesson = {}

/**
 * ACTION CREATORS
 */
const getLesson = lesson => ({type: GET_LESSON, lesson})
const updateLesson = () => ({type: UPDATE_LESSON})

/**
 * THUNK CREATORS
 */
export const fetchLesson = () =>
  dispatch =>
    axios.get('/api/lesson')
      .then(res =>
        dispatch(getLesson(res.data || defaultLesson)))
      .catch(err => console.log(err))




/**
 * REDUCER
 */
export default function (state = defaultLesson, action) {
  console.log(action)
  switch (action.type) {
    case GET_LESSON:
      return action.lesson
    case UPDATE_LESSON:
      return defaultLesson
    default:
      return state
  }
}
