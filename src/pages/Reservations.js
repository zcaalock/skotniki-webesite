import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

class Reservations extends React.Component {

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
                    <Table.HeaderCell colSpan='3'>Etap 1</Table.HeaderCell>
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
                  <Table.Row>
                    <Table.Cell >A1</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A2</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A3</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A4</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A5</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A6</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A7</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A8</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A9</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A10</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A11</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A12</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A13</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A14</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A15</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell >A16</Table.Cell>
                    <Table.Cell>200 m2</Table.Cell>
                    <Table.Cell>126 m2</Table.Cell>
                    <Table.Cell>650 000zł</Table.Cell>
                    <Table.Cell><a href='/'>PDF</a></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
          <div className="plans">
            <img className='plansAuto' src="/img/plany_mapa_kolor.png" alt="Typ A - lewy" />
          </div>
        </div>
      </div>
    )
  }
}

export default Reservations