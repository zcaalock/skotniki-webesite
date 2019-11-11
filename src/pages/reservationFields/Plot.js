import React from 'react'
import { connect } from 'react-redux'
import { editReservation } from '../../actions/reservations'
import SingleInput from '../../forms/SingleInput'


class Plot extends React.Component {
  state = { itemEditable: false }

  removeEdit() {
    this.setState({ itemEditable: false })
  }

  showEdit() {
    this.setState({ itemEditable: true })
  }

  onSubmit = (formValues) => {
    this.props.editReservation(this.props.reservation.id, { plot: formValues })
    this.removeEdit()
  }


  renderEditPlot() {
    if (this.state.itemEditable === true) {
      return (
        <SingleInput
          propStyle={{ padding: '0' }}
          propChildStyle={{ padding: '5px' }}
          initValue={this.props.reservation.plot}
          removeEdit={() => this.removeEdit()}
          onSubmit={this.onSubmit} />
      )
    }

    if (this.state.itemEditable === false) {
      return (
        <div >
          <div>{this.props.reservation.plot}</div>
        </div>
      )
    }
  }



  render() {
    return (
      <div onDoubleClick={() => this.showEdit()}>
        <div style={{ width: '100%' }}>
          {this.renderEditPlot()}
        </div>
      </div>
    )
  }
}

export default connect(null, { editReservation })(Plot)