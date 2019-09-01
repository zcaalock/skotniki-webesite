import React from 'react'
import { connect } from 'react-redux'
import ImageMapper from 'react-image-mapper';
import { editState } from '../../actions/appState'


const URL = "img/plany_domow/A_lewy_plan_parter.png"
  const MAP = {
    name: "my-map",
    areas: [      
      { name: "Garaż: 16.13m2", shape: "rect", coords: [367,327,560,707], fillColor: "#efefef61" },
      { name: "Wiatrołap: 3.43m2", shape: "rect", coords: [182,597,348,707], fillColor: "#efefef61" },
      { name: "Toaleta: 2.00m2", shape: "rect", coords: [112,492,209,587], fillColor: "#efefef61" },
      { name: "Komunikacja: 6.09m2", shape: "rect", coords: [223,484,347,583], fillColor: "#efefef61" },
      { name: "Salon + aneks kuchenny: 30.95m2", shape: "poly", coords: [29,134,560,134,558,305,350,307,346,478,31,483], fillColor: "#efefef61" },
      { name: "Miejsce na taras", shape: "rect", coords: [54,16,281,104], fillColor: "#efefef61" }
    ]
  }

class LZero extends React.Component {  
  
  onLeave(text) {
    this.props.editState(text, 'secondaryTitle')
  }

  onEnter(area){
    this.props.editState(area.name, 'secondaryTitle')
    
  }
    
  render() {
    return (
      <ImageMapper onMouseEnter={area => this.onEnter(area)} onMouseLeave={() => this.onLeave('Segment L: Parter')} style={{margin: 'auto'}} imgWidth={594} width={430} src={URL} map={MAP}/>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {    
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState })(LZero)