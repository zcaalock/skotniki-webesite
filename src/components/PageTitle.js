import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PageTitle extends Component {
  render() {
    if(this.props.appState.landingPage === 'false') return (
      <div className='title'>
        <div className='titleItem' ><h3>{this.props.appState.activeItem}</h3></div>
        <div className='titleItemSecondary'><h3>{this.props.appState.secondaryTitle}</h3></div>
      </div>
    ) 
    return <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps)(PageTitle)
