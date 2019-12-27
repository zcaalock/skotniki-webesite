import React, { Component } from 'react'
import { connect } from 'react-redux'

import history from '../history'
import { editState } from '../actions/appState'
import { fetchPages } from '../actions/pages'
import GreenSpring from '../components/GeenSpring'


class BottomMenu extends Component {

  componentDidMount() {
    this.props.fetchPages() 
  }

  state = {
    menuNames: [
      { title: 'Galeria', id: 'MenuItem01' },
      { title: 'Prezentacja', id: 'MenuItem02' },
      { title: 'Twój Dom', id: 'MenuItem03' },
      { title: 'Dostępne Domy', id: 'MenuItem04' },
      { title: 'Doświadczenie', id: 'MenuItem05' },
      { title: 'Kontakt', id: 'MenuItem06' },
    ]
  }

  handleClick(id) {    
    history.push(`/${id}`)
  }

  renderMenu() {
    const pages = this.state.menuNames
    return pages.map(page => {
      return <div onClick={() => this.handleClick(page.id)} key={page.id} className='menuItem'>{page.title}</div>
    })
  }

  hideMenuBar() {
    if (this.props.appState.menuHide === 'true' || this.props.appState.landingPage === 'true') return {display: 'none'}
    return {display: ''}
  }

  render() {
    return (
      <div className='bottomeNavBar' style={this.hideMenuBar()}>
        <div className='menuBottom'>
          <GreenSpring style={{ zIndex: this.props.appState.zIndex }} widthStart={this.props.appState.widthStart} widthStop={this.props.appState.widthStop} height={'100%'} color={'#efefef'} zIndex={this.props.appState.zIndex} />
          {this.renderMenu()}
        </div>
        <div style={{ backgroundColor: 'rgba(81, 122, 66, 0.79)', width: '30%' }}></div>
   
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: Object.values(state.pages),
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState, fetchPages })(BottomMenu)