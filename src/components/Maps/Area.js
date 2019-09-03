import React from 'react'
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux'
import { editState } from '../../actions/appState'

 

class Area extends React.Component {

  onLeave(text) {
    this.props.editState(text, 'secondaryTitle')
  }

  onEnter(area){
    this.props.editState(area.name, 'secondaryTitle')
    
  }  

  render() {
    const URL = "http://skotniki2.herokuapp.com/img/plany_mapa_kolor.jpg"
  const MAP = {
    name: "my-map",
    areas: [
      { name: "A01", coords:[22,150,367,153,367,227,322,226,322,249,21,250], shape:"poly", fillColor: "#efefef61" },
      { name: "A02", coords:[20,345,326,345,322,250,20,251], shape:"poly", fillColor: "#efefef61" },
      { name: "A03", coords:[22,438,326,350], shape:"rect", fillColor: "#efefef61" },
      { name: "A04", coords:[23,527,327,439], shape:"rect", fillColor: "#efefef61" },
      { name: "A05", coords:[23,616,325,529], shape:"rect", fillColor: "#efefef61" },
      { name: "A06", coords:[23,697,326,618], shape:"rect", fillColor: "#efefef61" },
      { name: "A07", coords:[23,700,23,1005,241,956,242,700], shape:"poly", fillColor: "#efefef61" },
      { name: "A08", coords:[244,701,367,700,368,928,246,956], shape:"poly", fillColor: "#efefef61" },
      { name: "A09", coords:[369,696,447,686,502,898,371,930], shape:"poly", fillColor: "#efefef61" },
      { name: "A10", coords:[451,686,548,661,603,875,503,899], shape:"poly", fillColor: "#efefef61" },
      { name: "A11", coords:[549,661,608,877,702,857,652,630], shape:"poly", fillColor: "#efefef61" },
      { name: "A12", coords:[706,856,806,838,752,610,656,627], shape:"poly", fillColor: "#efefef61" },
      { name: "A13", coords:[754,609,807,836,903,814,850,582], shape:"poly", fillColor: "#efefef61" },
      { name: "A14", coords:[905,814,989,794,947,564,922,564,852,581], shape:"poly", fillColor: "#efefef61" },
      { name: "A15", coords:[950,563,988,794,1067,780,1045,562], shape:"poly", fillColor: "#efefef61" },
      { name: "A16", coords:[1070,779,1176,761,1174,562,1048,562], shape:"poly", fillColor: "#efefef61" }
    ]
  } 
    return (
      
      <ImageMapper onMouseEnter={area => this.onEnter(area)} onMouseLeave={() => this.onLeave('Plan Osiedla')} style={{margin: 'auto'}} imgWidth={1252} width={600} src={URL} map={MAP}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState })(Area)