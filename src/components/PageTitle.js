import React, { Component } from 'react'
import { connect } from 'react-redux'



export class PageTitle extends Component {
  render() {
    return (
      <div className='title'>
        <div className='titleItem' ><h3>{this.props.appState.activeItem}</h3></div>
        <div className='titleItem' style={{textAlign: 'center'}} ><h3>{this.props.appState.secondaryTitle}</h3></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps)(PageTitle)
