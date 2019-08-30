import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { editState } from '../actions/appState'
import _ from 'lodash'
import { Placeholder } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class MenuItem04 extends React.Component {
  state = {
    tableData: [],
    isLoaded: 'false',
    placeholder: ['full', 'very long', 'long', 'medium', 'short', 'very short']
  }

  componentDidMount() {
    this.props.editState('Wybierz Dom', 'activeItem')
    axios.get('/wp-json/wp/v2/reservations?per_page=20')
      .then(res => this.setState({
        tableData: res.data,
        tableDataObject: _.sortBy(res.data.map(data => {
          return {
            name: data.acf.name,
            plot: data.acf.plot,
            pum: data.acf.pum,
            price: data.acf.price
          }
        }),'name'),
        isLoaded: 'true'
      }))
      .catch(err => console.log(err))
  }

  renderTable() {
    console.log('state: ', this.state.tableData)    
    if (this.state.isLoaded === 'true') {
      return this.state.tableDataObject.map(data => {
        return (
          <Table.Row key={data.name}>
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
            <div className='title'>
              <h3>Wybierz swój dom</h3>
            </div>
            <div style={{ padding: '100px 63px 25px 63px' }}>
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
            <img className='plansAuto' src="/img/plany_mapa_kolor.jpg" alt="Typ A - lewy" />
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToPrps = (state) => {
  return {
    pages: _.keyBy(Object.values(state.pages), 'id'),
    appState: state.appState}
}

export default connect(mapStateToPrps, {editState})(MenuItem04)