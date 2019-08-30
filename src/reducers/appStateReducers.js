import * as types from '../actions/types'

const appState = {
  activeItem: 'Galeria',
  loading: 'true',
  reservationLoading: 'true',
  widthStart: '0',
  widthStop: '100%',
  zIndex: '10'

}

export default (state = appState, action) => {
  switch (action.type) {
    case types.EDIT_STATE:
      return {
        ...state,
        [action.selector]: action.content
      }


    default:
      return state
  }
}