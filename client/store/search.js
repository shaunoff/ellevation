import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const CHANGE_SEARCH = 'CHANGE_SEARCH'


/**
 * INITIAL STATE
 */
const search = ""

/**
 * ACTION CREATORS
 */
export const changeSearch = search => ({type: CHANGE_SEARCH, search})

/**
 * REDUCER
 */
export default function (state = search, action) {
  switch (action.type) {
    case CHANGE_SEARCH:
		console.log(action)
      return action.search
    default:
      return state
  }
}
