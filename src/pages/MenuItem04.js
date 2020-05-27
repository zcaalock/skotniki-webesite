import React from 'react'
import { connect } from 'react-redux'
import { editState } from '../actions/appState'
import { fetchReservations } from '../actions/reservations'
import _ from 'lodash'

import PdfALewy from '../documents/segment-lewy.pdf'
import PdfAPrawy from '../documents/segment-prawy.pdf'

import Area from '../components/Maps/Area'
import { Placeholder } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

import Plot from './reservationFields/Plot'
import Pum from './reservationFields/Pum'
import Price from './reservationFields/Price'
import Type from './reservationFields/Type'
import Status from './reservationFields/Status'

class MenuItem04 extends React.Component {
  state = {
    tableData: [],
    isLoaded: 'false',
    placeholder: ['full', 'very long', 'long', 'medium', 'short', 'very short'],
  }

  componentDidMount() {
    this.props.fetchReservations()
    this.props.editState('false', 'menuHide')
    this.props.editState('40%', 'widthStop')
    this.props.editState('66.64%', 'heightStop')
    this.props.editState('Wybierz Dom', 'activeItem')
    this.props.editState('Plan Osiedla', 'secondaryTitle')
    this.props.editState('hide', 'ui')
  }

  selectArea(id) {
    if (this.props.appState.secondaryTitle === id) return { backgroundColor: '#efefef' }
  }

  reserverdArea(id) {
    const num = parseInt(id.slice(-2), 10)-1
    if (this.props.reservations[num].status === 'reserved') return { backgroundColor: '#ffedba' } 
    if (this.props.reservations[num].status === 'sold') return { backgroundColor: '#6b849e' }
    if (this.props.reservations[num].status === 'blocked') return { backgroundColor: '#ffcaba' }
       
  }

  mapSize() {
    if (this.props.appState.width < 905) return 370
    return 550

  }

  showPdf(type) {
    if (type === 'left') return <a href={PdfALewy} target="_blank" rel="noopener noreferrer">Typ L</a>
    if (type === 'right') return <a href={PdfAPrawy} target="_blank" rel="noopener noreferrer">Typ P</a>
  }

  renderTableForUser() {
    //console.log('state: ', this.state.tableData)    
    if (this.props.appState.reservationLoading === 'false') {
      let reservations = _.chain(this.props.reservations).reject({ status: 'disabled' }).value()
      return reservations.map(data => {
        return (
          <Table.Row
            onMouseEnter={() => this.props.editState(data.name, 'secondaryTitle')}
            onMouseLeave={() => this.props.editState('Plan Osiedla', 'secondaryTitle')}
            //style={this.selectArea(data.name)} 
            style={this.reserverdArea(data.name)} 
            id={data.name}
            key={data.name}>
            <Table.Cell >{data.name}</Table.Cell>
            <Table.Cell>{data.plot}</Table.Cell>
            <Table.Cell>{data.pum}</Table.Cell>
            <Table.Cell>{data.price}</Table.Cell>
            <Table.Cell>{this.showPdf(data.type)}</Table.Cell>
          </Table.Row>
        )
      })
    }
    return this.state.placeholder.map(data => {
      return (
        <Table.Row key={data}>
          <Table.Cell colSpan='5'>
            <Placeholder>
              <Placeholder.Line length={data} />
            </Placeholder>
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  renderTableForAdmin() {
    //console.log('state: ', this.state.tableData)    
    if (this.props.appState.reservationLoading === 'false') {
      let reservations = this.props.reservations
      return reservations.map(reservation => {
        return (
          <Table.Row style={this.selectArea(reservation.name)} id={reservation.name} key={reservation.name}>
            <Table.Cell >{reservation.name}</Table.Cell>
            <Table.Cell><Plot reservation={reservation} /></Table.Cell>
            <Table.Cell><Pum reservation={reservation} /></Table.Cell>
            <Table.Cell><Price reservation={reservation} /></Table.Cell>
            <Table.Cell><Type reservation={reservation} /></Table.Cell>
            <Table.Cell><Status reservation={reservation} /></Table.Cell>
          </Table.Row>
        )
      })
    }
    return this.state.placeholder.map(data => {
      return (
        <Table.Row key={data}>
          <Table.Cell colSpan='5'>
            <Placeholder>
              <Placeholder.Line length={data} />
            </Placeholder>
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  showTableForUser() {
    return (
      <Table celled striped>
        <Table.Header>
          {/* <Table.Row>
                    <Table.HeaderCell colSpan='5'>Etap 1</Table.HeaderCell>
                  </Table.Row> */}
          <Table.Row>
            <Table.HeaderCell >Nr domu</Table.HeaderCell>
            <Table.HeaderCell >Pow. działki [m2]</Table.HeaderCell>
            <Table.HeaderCell >Pow. użytkowa domu [m2]</Table.HeaderCell>
            <Table.HeaderCell >Cena ofertowa</Table.HeaderCell>
            <Table.HeaderCell >Rzut kondygnacji</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.renderTableForUser()}
        </Table.Body>
      </Table>
    )
  }

  showTableForAdmin() {
    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='6'>Edit</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell >Nr domu</Table.HeaderCell>
            <Table.HeaderCell >Pow. działki [m2]</Table.HeaderCell>
            <Table.HeaderCell >Pow. użytkowa domu [m2]</Table.HeaderCell>
            <Table.HeaderCell >Cena ofertowa</Table.HeaderCell>
            <Table.HeaderCell >Typ domu</Table.HeaderCell>
            <Table.HeaderCell >Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.renderTableForAdmin()}
        </Table.Body>
      </Table>
    )
  }

  authCheck() {
    if (this.props.isAutenticated === true) return <>{this.showTableForAdmin()}</>
    if (this.props.isAutenticated === false) return <>{this.showTableForUser()}</>
  }

  render() {

    return (
      <div className='pageContent'>
        <div className='localisation'>
          <div className="localisationText">
            <div className="mobilePlans">
              <Area deviceWidth={this.mapSize()} />
            </div>
            <div className='infoText'>
              {this.authCheck()}
            </div>

          </div>
          <div className="plans">
            {/* <img className='plansAuto' src="/img/plany_mapa_kolor.jpg" alt="Typ A - lewy" /> */}
            <Area deviceWidth={this.mapSize()} />
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToPrps = (state) => {
  return {
    reservations: Object.values(state.reservations),
    appState: state.appState,
    isAutenticated: state.user.authenticated
  }
}

export default connect(mapStateToPrps, { editState, fetchReservations })(MenuItem04)