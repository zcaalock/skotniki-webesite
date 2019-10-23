import React from 'react'
import { connect } from 'react-redux'
import { editReservation } from '../../actions/reservations'
import DropDownMenu from '../../forms/DropDownMenu'

class Type extends React.Component {  

  saveField(name) {
    this.props.editReservation(this.props.reservation.id, { type: name })
  }   

  render() {
    //console.log('users: ', this.props.users)
    return (
      <DropDownMenu
            onSave={(title) => this.saveField(title)}
            id={this.props.reservation.id}
            values={['left', 'right']}
            text={this.props.reservation.type} />
    )
  }
}

export default connect(null, { editReservation })(Type)
