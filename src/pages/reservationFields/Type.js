import React from 'react'
import { useDispatch } from "react-redux"
import { editReservation } from '../../actions/reservations'
import DropDownMenu from '../../forms/DropDownMenu'

function Type(props) {
  const dispatch = useDispatch()

  function saveField(name) {
    dispatch(editReservation(props.reservation.id, { type: name }))
  }

  return (
    <DropDownMenu
      onSave={(title) => saveField(title)}
      id={props.reservation.id}
      values={['Aleft', 'Aright','Bleft', 'Bright']}
      text={props.reservation.type} />
  )
}

export default Type
