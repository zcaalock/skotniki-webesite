import * as types from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    
    case types.FETCH_PAGES:
      return {...state, ..._.sortBy(action.payload.map(data => {
        return {
          id: data.title.rendered,
          content: data.content,
          title: data.acf.menutitle
        }
      }), 'id')    
    }
    default:
      return state
  }
}