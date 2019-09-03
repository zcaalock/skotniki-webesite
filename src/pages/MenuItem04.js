import React from 'react'
import { connect } from 'react-redux'
import { editState } from '../actions/appState'

import Area from '../components/Maps/Area'
import { Placeholder } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class MenuItem04 extends React.Component {
  state = {
    tableData: [],
    isLoaded: 'false',
    placeholder: ['full', 'very long', 'long', 'medium', 'short', 'very short']
  }

  componentDidMount() {
    this.props.editState('48%', 'widthStop')
    this.props.editState('66.64%', 'heightStop')
    this.props.editState('Wybierz Dom', 'activeItem')
    this.props.editState('Plan Osiedla', 'secondaryTitle')
    this.props.editState('hide', 'ui') 
  }

  selectArea(id) {
    if(this.props.appState.secondaryTitle === id) return {backgroundColor: '#efefef'}
  }

  renderTable() {
    //console.log('state: ', this.state.tableData)    
    if (this.props.appState.reservationLoading === 'false') {
      return this.props.reservations.map(data => {
        return (
          <Table.Row style={this.selectArea(data.name)} id={data.name} key={data.name}>
            <Table.Cell >{data.name}</Table.Cell>
            <Table.Cell>{data.plot}</Table.Cell>
            <Table.Cell>{data.pum}</Table.Cell>
            <Table.Cell>{data.price}</Table.Cell>
            <Table.Cell><a href='/'>PDF</a></Table.Cell>
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

  render() {

    return (
      <div className='pageContent'>
        <div className='localisation'>
          <div className="localisationText">
            
            <div className='infoText'>
              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan='5'>Etap 1</Table.HeaderCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell >Nr domu</Table.HeaderCell>
                    <Table.HeaderCell >Pow. działki [m2]</Table.HeaderCell>
                    <Table.HeaderCell >Pow. użytkowa domu [m2]</Table.HeaderCell>
                    <Table.HeaderCell >Cena ofertowa</Table.HeaderCell>
                    <Table.HeaderCell >Rzut kondygnacji</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.renderTable()}
                </Table.Body>
              </Table>

            </div>
          </div>
          <div className="plans">
            {/* <img className='plansAuto' src="/img/plany_mapa_kolor.jpg" alt="Typ A - lewy" /> */}
            <Area />
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToPrps = (state) => {
  return {
    reservations: Object.values(state.reservations),
    appState: state.appState}
}

export default connect(mapStateToPrps, {editState})(MenuItem04)