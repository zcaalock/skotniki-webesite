import React from 'react'
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux'
import { editState } from '../../actions/appState'

const URL = "img/plany_domow/A_prawy_plan_pietro.png"
  const MAP = {
    name: "my-map",
    areas: [
      { name: "Komunikacja: 9.07m2", shape: "rect", coords: [571,418,246,519], fillColor: "#efefef61" },
      { name: "Pokój: 13.97m2", shape: "rect", coords: [571,133,318,402], fillColor: "#efefef61" },
      { name: "Pokój: 16.52m2", shape: "rect", coords: [37,136,310,404], fillColor: "#efefef61" },
      { name: "Pokój: 12.45m2", shape: "rect", coords: [37,418,232,712], fillColor: "#efefef61" },
      { name: "Pokój: 5.96m2", shape: "rect", coords: [251,533,425,710], fillColor: "#efefef61" },
    ]
  }
  
class POne extends React.Component {

  onLeave(text) {
    this.props.editState(text, 'secondaryTitle')
  }

  onEnter(area){
    this.props.editState(area.name, 'secondaryTitle')
    
  }

  render() {
    return (
      
      <ImageMapper onMouseEnter={area => this.onEnter(area)} onMouseLeave={() => this.onLeave('Segment P: Piętro')} style={{margin: 'auto'}} imgWidth={594} width={430} src={URL} map={MAP}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState })(POne)