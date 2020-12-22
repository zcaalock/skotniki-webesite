import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { editState } from '../actions/appState'
import { fetchReservations } from '../actions/reservations'
import _ from 'lodash'

import PdfALewy from '../documents/segment-A01-A12-lewy.pdf'
import PdfAPrawy from '../documents/segment-A01-A12-prawy.pdf'
import PdfBLewy from '../documents/segment-B1-B4-lewy.pdf'
import PdfBPrawy from '../documents/segment-B1-B4-prawy.pdf'

import Area from '../components/Maps/Area'
import { Placeholder } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

import EditName from './reservationFields/EditPlotName'
import Type from './reservationFields/Type'
import Status from './reservationFields/Status'

function MenuItem04() {

  const dispatch = useDispatch()
  const reservations = useSelector(state => Object.values(state.reservations))
  const appState = useSelector(state => state.appState)
  const isAutenticated = useSelector(state => state.user.authenticated)

  const [pageState, setState] = useState({
    tableData: [],
    isLoaded: 'false',
    placeholder: ['full', 'very long', 'long', 'medium', 'short', 'very short'],
  })
  useEffect(() => {
    dispatch(fetchReservations())
    dispatch(editState('false', 'menuHide'))
    dispatch(editState('34%', 'widthStop'))
    dispatch(editState('49.64%', 'heightStop'))
    dispatch(editState('Wybierz Dom', 'activeItem'))
    dispatch(editState('Plan Osiedla', 'secondaryTitle'))
    dispatch(editState('hide', 'ui'))
  },[])

  function selectArea(id) {
    if (appState.secondaryTitle === id) return { backgroundColor: '#efefef' }
  }

  function reserverdArea(id) {
    const num = parseInt(id.slice(-2), 10) - 1
    if (reservations[num].status === 'reserved') return { backgroundColor: '#ffedba' }
    if (reservations[num].status === 'sold') return { backgroundColor: '#6b849e' }
    if (reservations[num].status === 'blocked') return { backgroundColor: '#ffcaba' }
    if (reservations[num].status === 'sold') return { backgroundColor: 'rgba(80, 55, 55, 0.6)' }

  }

  function mapSize() {
    if (appState.width < 905) return 370
    return 550
  }

  function showPdf(type) {
    if (type === 'Aleft') return <a href={PdfALewy} target="_blank" rel="noopener noreferrer">Typ A: lewy</a>
    if (type === 'Aright') return <a href={PdfAPrawy} target="_blank" rel="noopener noreferrer">Typ A: prawy</a>
    if (type === 'Bleft') return <a href={PdfBLewy} target="_blank" rel="noopener noreferrer">Typ B: lewy</a>
    if (type === 'Bright') return <a href={PdfBPrawy} target="_blank" rel="noopener noreferrer">Typ B: prawy</a>
  }

  function renderTableForUser() {
    if (appState.reservationLoading === 'false') {
      let reservationsCol = _.chain(reservations).reject({ status: 'disabled' }).value()      
      return _.sortBy(reservationsCol, 'id').map(data => {
        return (
          <Table.Row
            onMouseEnter={() => dispatch(editState(data.name, 'secondaryTitle'))}
            onMouseLeave={() => dispatch(editState('Plan Osiedla', 'secondaryTitle'))}
            //style={this.selectArea(data.name)} 
            //style={reserverdArea(data.name)}
            id={data.name}
            key={data.name}>
            <Table.Cell >{data.name}</Table.Cell>
            <Table.Cell>{data.plot}</Table.Cell>
            <Table.Cell>{data.pum}</Table.Cell>
            <Table.Cell>{data.price}</Table.Cell>
            <Table.Cell>{showPdf(data.type)}</Table.Cell>
          </Table.Row>
        )
      })
    }
    return pageState.placeholder.map(data => {
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

  function renderTableForAdmin() {
    if (appState.reservationLoading === 'false') {
      return _.sortBy(reservations, 'id').map(reservation => {
        return (
          <Table.Row 
          //style={selectArea(reservation.name)} 
          id={reservation.name} 
          key={reservation.name}>
            <Table.Cell ><EditName selector='name' reservation={reservation} /></Table.Cell>
            <Table.Cell ><EditName selector='plot' reservation={reservation} /></Table.Cell>
            <Table.Cell ><EditName selector='pum' reservation={reservation} /></Table.Cell>
            <Table.Cell ><EditName selector='price' reservation={reservation} /></Table.Cell>
            <Table.Cell><Type reservation={reservation} /></Table.Cell>
            <Table.Cell><Status reservation={reservation} /></Table.Cell>
          </Table.Row>
        )
      })
    }
    return pageState.placeholder.map(data => {
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

  function showTableForUser() {
    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Nr domu</Table.HeaderCell>
            <Table.HeaderCell >Pow. działki [m2]</Table.HeaderCell>
            <Table.HeaderCell >Pow. użytkowa domu [m2]</Table.HeaderCell>
            <Table.HeaderCell >Cena ofertowa</Table.HeaderCell>
            <Table.HeaderCell >Rzut kondygnacji</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderTableForUser()}
        </Table.Body>
      </Table>
    )
  }

  function showTableForAdmin() {
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
            <Table.HeaderCell style={{ width: '80px' }}>Typ domu</Table.HeaderCell>
            <Table.HeaderCell style={{ width: '100px' }}>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderTableForAdmin()}
        </Table.Body>
      </Table>
    )
  }

  function authCheck() {
    if (isAutenticated === true) return <>{showTableForAdmin()}</>
    if (isAutenticated === false) return <>{showTableForUser()}</>
  }

  return (
    <div className='pageContent'>
      <div className='localisation'>
        <div className="localisationText">
          <div className="mobilePlans">
            <Area deviceWidth={mapSize()} />
          </div>
          <div className='infoText'>
            {authCheck()}
          </div>
        </div>
        <div className="plans">
          <Area deviceWidth={mapSize()} />
        </div>
      </div>
    </div>
  )
}

export default MenuItem04