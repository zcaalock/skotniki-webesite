import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'


class MenuItem02 extends React.Component {

  componentDidMount() {
    this.props.editState('Kontakt', 'activeItem')
    this.props.editState('86%', 'widthStop')
    this.props.editState('100%', 'heightStop')
    this.props.editState('', 'secondaryTitle')
    this.props.editState('hide', 'ui')
  }

  

  renderContent() {
    if (this.props.appState.loading === 'false') return (
      <div className='infoText' >
        <div dangerouslySetInnerHTML={{ __html: this.props.pages.menuItem06.content.rendered }}></div>
        
      </div>

    )
    return (
      <div className='infoText'style={{width: '50%'}}>
        <ContentPlaceholder/>
      </div>
    )
  }


  render() {
    return (
      <div className='pageContent' >
        <div className='localisation'>
          
            
            {this.renderContent()}
          </div>
          {/* <div className="localisationMap">
            
          </div> */}
        
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