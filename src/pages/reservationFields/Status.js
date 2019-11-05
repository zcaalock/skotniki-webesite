import React from 'react'

import { connect } from 'react-redux'
import { editReservation } from '../../actions/reservations'
import DropDownMenu from '../../forms/DropDownMenu'

class Status extends React.Component {  

  saveField(name) {
    this.props.editReservation(this.props.reservation.id, { status: name })
  }  

  render() {
    //console.log('users: ', this.props.users)
    return (
      <DropDownMenu
            onSave={(title) => this.saveField(title)}
            id={this.props.reservation.id}
            values={['blocked', 'open', 'reserved', 'disabled']}
            text={this.props.reservation.status} />
    )
  }
}

export default connect(null, { editReservation })(Status)
