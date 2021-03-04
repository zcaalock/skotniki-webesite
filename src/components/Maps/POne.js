import React from 'react'
import ImageMapper from 'react-image-mapper';
import { useDispatch } from "react-redux"
import { editState } from '../../actions/appState'

const URL = "img/plany_domow/A_prawy_plan_pietro.png"
const MAP = {
  name: "my-map",
  areas: [
    { name: "Komunikacja: 9.07m2", shape: "rect", coords: [571, 418, 246, 519], fillColor: "#efefef61" },
    { name: "Pokój: 13.97m2", shape: "rect", coords: [571, 133, 318, 402], fillColor: "#efefef61" },
    { name: "Pokój: 16.52m2", shape: "rect", coords: [37, 136, 310, 404], fillColor: "#efefef61" },
    { name: "Pokój: 12.45m2", shape: "rect", coords: [37, 418, 232, 712], fillColor: "#efefef61" },
    { name: "Pokój: 5.96m2", shape: "rect", coords: [251, 533, 425, 710], fillColor: "#efefef61" },
  ]
}

function POne(props) {
  const dispatch = useDispatch()

  function onLeave(text) {
    dispatch(editState(text, 'secondaryTitle'))
  }

  function onEnter(area) {
    dispatch(editState(area.name, 'secondaryTitle'))
  }

  return (
    <ImageMapper onMouseEnter={area => onEnter(area)} onMouseLeave={() => onLeave('Typ A: Piętro')} style={{ margin: 'auto' }} imgWidth={594} width={props.width} src={URL} map={MAP} />  )
}

export default POne