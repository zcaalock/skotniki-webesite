import React, {useState} from 'react'
import { useDispatch } from "react-redux"

import _ from 'lodash'
import { editReservation } from '../../actions/reservations'
import SingleInput from '../../forms/SingleInput'

function EditPlotName(props) {
  const dispatch = useDispatch()

  const [itemEditable, setItemeditable] = useState({[props.selector]:false})  

  const onSubmit = (formValues) => {
    //console.log(formValues)
    dispatch(editReservation(props.reservation.id, { [props.selector]: formValues }))
    setItemeditable({[props.selector]:false})
  }

  function renderEditPlot() {

    if (itemEditable[props.selector] === true) {
      return (
        <SingleInput
          propStyle={{ padding: '0' }}
          propChildStyle={{ padding: '5px' }}
          initialValue={props.reservation[props.selector]}
          removeEdit={() => setItemeditable({[props.selector]:false})}
          onSubmit={onSubmit} />
      )
    }

    if (itemEditable[props.selector] === false) {
      return (
        <div >
          <div>{props.reservation[props.selector]}</div>
        </div>
      )
    }
  }

  return (
    <div onDoubleClick={()=>setItemeditable({[props.selector]:true})} style={{ width: '100%' }}>
      {renderEditPlot()}
    </div>
  )
}

export default EditPlotName
