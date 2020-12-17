import React from 'react'
import { useDispatch } from "react-redux"
import { editReservation } from '../../actions/reservations'
import DropDownMenu from '../../forms/DropDownMenu'

function Status(props) {

  const dispatch = useDispatch()

  function saveField(name) {
    dispatch(editReservation(props.reservation.id, { status: name }))
  }

  return (
    <DropDownMenu
      onSave={(title) => saveField(title)}
      id={props.reservation.id}
      values={['blocked', 'open', 'reserved', 'disabled']}
      text={props.reservation.status} />
  )
}

export default Status
