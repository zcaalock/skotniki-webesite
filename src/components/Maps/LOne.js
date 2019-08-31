import React from 'react'
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux'
import { editState } from '../../actions/appState'

const URL = "http://skotniki2.herokuapp.com/img/plany_domow/A_lewy_plan_pietro.png"
  const MAP = {
    name: "my-map",
    areas: [
      { name: "Komunikacja: 9.07m2", shape: "rect", coords: [31,416,363,518], fillColor: "#efefef61" },
      { name: "Pokój: 13.97m2", shape: "rect", coords: [34,138,283,403], fillColor: "#efefef61" },
      { name: "Pokój: 16.52m2", shape: "rect", coords: [292,137,560,403], fillColor: "#efefef61" },
      { name: "Pokój: 12.45m2", shape: "rect", coords: [369,417,560,705], fillColor: "#efefef61" },
      { name: "Pokój: 5.96m2", shape: "rect", coords: [174,528,351,706], fillColor: "#efefef61" },
    ]
  }

class LOne extends React.Component {

  onLeave(text) {
    this.props.editState(text, 'secondaryTitle')
  }

  onEnter(area){
    this.props.editState(area.name, 'secondaryTitle')
    
  }

  render() {
    return (
      
      <ImageMapper onMouseEnter={area => this.onEnter(area)} onMouseLeave={() => this.onLeave('Segment L: Piętro')} style={{margin: 'auto'}} imgWidth={594} width={430} src={URL} map={MAP}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState })(LOne)