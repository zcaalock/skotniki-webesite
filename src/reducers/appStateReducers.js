import * as types from '../actions/types'

const appState = {
  width: 0,
  height: 0,
  activeItem: 'Galeria',
  secondaryTitle: '',
  loading: 'true',
  reservationLoading: 'true',
  widthStart: '100%',
  widthStop: '100%',
  heightStart: '0%',
  heightStop: '0%',
  zIndex: '10',
  ui: 'show',
  menuHide: 'true'

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