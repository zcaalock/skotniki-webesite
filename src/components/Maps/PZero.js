import React from 'react'
import { connect } from 'react-redux'
import ImageMapper from 'react-image-mapper';
import { editState } from '../../actions/appState'


const URL = "http://skotniki2.herokuapp.com/img/plany_domow/A_prawy_plan_parter.png"
  const MAP = {
    name: "my-map",
    areas: [      
      { name: "Garaż: 16.13m2", shape: "rect", coords: [234,711,40,330], fillColor: "#efefef61" },
      { name: "Wiatrołap: 3.43m2", shape: "rect", coords: [424,601,253,712], fillColor: "#efefef61" },
      { name: "Toaleta: 2.00m2", shape: "rect", coords: [490,500,390,589], fillColor: "#efefef61" },
      { name: "Komunikacja: 6.09m2", shape: "rect", coords: [377,588,254,491], fillColor: "#efefef61" },
      { name: "Salon + aneks kuchenny: 30.95m2", shape: "poly", coords: [39,134,572,139,573,488,254,487,254,312,40,311], fillColor: "#efefef61" },
      { name: "Miejsce na taras", shape: "rect", coords: [320,19,549,107], fillColor: "#efefef61" }
    ]
  }

class PZero extends React.Component {  
  
  onLeave(text) {
    this.props.editState(text, 'secondaryTitle')
  }

  onEnter(area){
    this.props.editState(area.name, 'secondaryTitle')
    
  }
    
  render() {
    return (
      <ImageMapper onMouseEnter={area => this.onEnter(area)} onMouseLeave={() => this.onLeave('Segment P: Parter')} style={{margin: 'auto'}} imgWidth={594} width={430} src={URL} map={MAP}/>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {    
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState })(PZero)