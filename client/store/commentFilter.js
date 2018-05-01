import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const CHANGE_COMMENT_FILTER = 'CHANGE_COMMENT_FILTER'


/**
 * INITIAL STATE
 */
const filter = "newest"

/**
 * ACTION CREATORS
 */
export const commentFilter = filter => ({type: CHANGE_COMMENT_FILTER, filter})

/**
 * REDUCER
 */
export default function (state = filter, action) {
  switch (action.type) {
    case CHANGE_COMMENT_FILTER:
      return action.filter
    default:
      return state
  }
}
