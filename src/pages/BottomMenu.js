import React, { Component } from 'react'
import { connect } from 'react-redux'

import history from '../history'
import { editState } from '../actions/appState'
import { fetchPages } from '../actions/pages'
import { fetchReservations } from '../actions/reservations'
import GreenSpring from '../components/GeenSpring'


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
    ]
  }

  handleClick(activeItem, id) {
    //if(activeItem==='Galeria')this.props.editState('13%', 'widthStop')
    //if(activeItem==='Prezentacja')this.props.editState('31%', 'widthStop')
    //if(activeItem==='Twój Dom')this.props.editState('47%', 'widthStop')
    //if(activeItem==='Wybierz Dom')this.props.editState('66%', 'widthStop')
    //if(activeItem==='Doświadczenie')this.props.editState('86%', 'widthStop')
    //if (activeItem === 'Kontakt') this.props.editState('100%', 'widthStop')
    history.push(`/${id}`)
  }

  renderMenu() {
    const pages = this.state.menuNames
    return pages.map(page => {
      return <div onClick={() => this.handleClick(page.title, page.id)} key={page.id} className='menuItem'><h4>{page.title}</h4></div>
    })
  }

  render() {
    return (
      <div>
        <div className='menuBottom'>
          <GreenSpring style={{ zIndex: this.props.appState.zIndex }} widthStart={this.props.appState.widthStart} widthStop={this.props.appState.widthStop} height={'100%'} color={'#517A42'} zIndex={this.props.appState.zIndex} />
          {this.renderMenu()}
        </div>
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