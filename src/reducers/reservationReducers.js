import * as types from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    
    case types.FETCH_RESERVATIONS:
      return {...state, ..._.sortBy(action.payload.map(data => {
        return {
          name: data.acf.name,
          plot: data.acf.plot,
          pum: data.acf.pum,
          price: data.acf.price
        }
      }),'name')  
    }
    default:
      return state
  }
}