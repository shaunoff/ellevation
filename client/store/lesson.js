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


/**
 * THUNK CREATORS
 */
export const fetchLesson = () =>
  dispatch =>
    axios.get('/api/lesson')
      .then(res =>
        dispatch(getLesson(res.data || defaultLesson)))
      .catch(err => console.log(err))

export const updateLesson = (data) => dispatch => {
    axios.put(`/api/lesson/1`,data)
      .then(res => {
				dispatch(getLesson(res.data))
			})
      .catch(err => console.log(err))
}

export const addComment = (text) => dispatch => {
    axios.post(`/api/lesson/comment/1`,text)
      .then(res => {
				dispatch(getLesson(res.data))
			})
      .catch(err => console.log(err))
}


/**
 * REDUCER
 */
export default function (state = defaultLesson, action) {
  switch (action.type) {
    case GET_LESSON:
      return action.lesson
    case UPDATE_LESSON:
      return defaultLesson
    default:
      return state
  }
}
