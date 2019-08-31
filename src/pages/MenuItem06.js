import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'


class MenuItem02 extends React.Component {

  componentDidMount() {
    this.props.editState('Kontakt', 'activeItem')
    this.props.editState('86%', 'widthStop')
    this.props.editState('', 'secondaryTitle')
  }

  

  renderContent() {
    if (this.props.appState.loading === 'false') return (
      <div className='infoText'>
        <div dangerouslySetInnerHTML={{ __html: this.props.pages.menuItem06.content.rendered }}></div>
        
      </div>

    )
    return (
      <div className='infoText'>
        <ContentPlaceholder/>
      </div>
    )
  }


  render() {
    return (
      <div className='pageContent' >
        <div className='localisation'>
          <div className="localisationText">
            
            {this.renderContent()}
          </div>
          <div className="localisationMap">
            
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: _.keyBy(Object.values(state.pages), 'id'),
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState })(MenuItem02)