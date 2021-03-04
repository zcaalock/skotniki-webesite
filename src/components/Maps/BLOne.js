import React from 'react'
import { useDispatch } from "react-redux"
import ImageMapper from 'react-image-mapper'
import { editState } from '../../actions/appState'

const URL = "img/plany_domow/B_lewy_plan_pietro.png"
const MAP = {
  name: "my-map",
  areas: [
    { name: "Komunikacja: 9.07m2", shape: "rect", coords: [31, 416, 363, 518], fillColor: "#efefef61" },
    { name: "Pokój: 13.97m2", shape: "rect", coords: [34, 138, 283, 403], fillColor: "#efefef61" },
    { name: "Pokój: 16.52m2", shape: "rect", coords: [292, 137, 560, 403], fillColor: "#efefef61" },
    { name: "Pokój: 12.45m2", shape: "rect", coords: [369, 417, 560, 705], fillColor: "#efefef61" },
    { name: "Pokój: 5.96m2", shape: "rect", coords: [174, 528, 351, 706], fillColor: "#efefef61" },
  ]
}

function LOne(props) {

  const dispatch = useDispatch()

  function onLeave(text) {
    dispatch(editState(text, 'secondaryTitle'))
  }

  function onEnter(area) {
    dispatch(editState(area.name, 'secondaryTitle'))
  }

  return (
    <ImageMapper onMouseEnter={area => onEnter(area)} onMouseLeave={() => onLeave('Typ B: Piętro')} style={{ margin: 'auto' }} imgWidth={594} width={props.width} src={URL} map={MAP} />
  )
}

export default LOne