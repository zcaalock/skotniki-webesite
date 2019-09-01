import React, { Component } from 'react'
import { connect } from 'react-redux'

import history from '../../history'
import { editState } from '../../actions/appState'
import { fetchPages } from '../../actions/pages'
import { fetchReservations } from '../../actions/reservations'
import GreenSpringMobile from '../../components/GreenSpringMobile'


class BottomMenu extends Component {

  componentDidMount() {
    this.props.fetchPages()
    this.props.fetchReservations()

  }

  state = {
    menuNames: [
      { title: 'Galeria', id: 'MenuItem01' },
      { title: 'Prezentacja', id: 'MenuItem02' },
      { title: 'Twój Dom', id: 'MenuItem03' },
      { title: 'Wybierz Dom', id: 'MenuItem04' },
      { title: 'Doświadczenie', id: 'MenuItem05' },
      { title: 'Kontakt', id: 'MenuItem06' },
    ],
    showMenu: 'false'
  }

  handleClick(id) {    
    history.push(`/${id}`)
  }

  renderMenu() {
    const pages = this.state.menuNames
    return pages.map(page => {
      return <div onClick={() => this.handleClick(page.id)} key={page.id} className='menuItem'><h3>{page.title}</h3></div>
    })
  }

  showMenuText(){
    if (this.state.showMenu === 'true') return {display: 'block'}
    if (this.state.showMenu === 'false') return {display: 'none'}
  }

  collapseMenu(){
    if (this.state.showMenu === 'true') return {width: '100%', position: 'relative'}
    if (this.state.showMenu === 'false') return {width: '50px', height: '50px', position: 'absolute'}
  }

  toggleMenu() {
    if (this.state.showMenu === 'true') this.setState({showMenu: 'false'})
    if (this.state.showMenu === 'false') this.setState({showMenu: 'true'})
  }

  render() {
    return (
      <div className='mobileNavBar' style={this.collapseMenu()}>
        <div onClick={()=>this.toggleMenu()}><h3><i className='bars icon'/></h3></div>
        <div className='mobileMenu' style={this.showMenuText()}>
          <GreenSpringMobile heightStart={this.props.appState.heightStart} heightStop={this.props.appState.heightStop} height={'100%'} color={'#517A42'} />
          {this.renderMenu()}
        </div>
        {/* <div style={{ backgroundColor: '#517A42', width: '30%' }}></div> */}
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

export default connect(mapStateToProps, { editState, fetchPages, fetchReservations })(BottomMenu)