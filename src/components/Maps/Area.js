import React from 'react'
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux'
import { editState } from '../../actions/appState'



class Area extends React.Component {

  onLeave(text) {
    this.props.editState(text, 'secondaryTitle')
  }

  onEnter(area) {
    if(this.props.reservations[area.id].status === 'blocked') this.props.editState('Etap II', 'secondaryTitle')
    if(this.props.reservations[area.id].status === 'reserved') this.props.editState('Rezerwacja', 'secondaryTitle')
    if(this.props.reservations[area.id].status === 'open')this.props.editState(area.name, 'secondaryTitle')

  }

  preFillColor(id) {
    if (this.props.appState.reservationLoading === 'false')
      {if (this.props.reservations[id].status === 'blocked') return 'rgba(210, 202, 200, 0.6)'
      if (this.props.reservations[id].status === 'reserved') return 'rgba(80, 65, 55, 0.6)'}
      
    return 'rgba(210, 202, 200, 0)'
  }

  fillColor(id) {
    if (this.props.appState.reservationLoading === 'false')
      if (this.props.reservations[id].status === 'blocked' || this.props.reservations[id].status === 'reserved') return 'rgba(81, 122, 66, 0)'
    return 'rgba(81, 122, 66, 0.7)'
  }

  strokeColor() {
    return 'rgba(0, 0, 0, 0)'
  }

  lineWidth() {
    return 1
  }

  render() {
    const URL = "img/plany_mapa_kolor.jpg"
    const MAP = {
      name: "my-map",
      areas: [
        { name: "A01", id:0, coords: [22, 150, 367, 153, 367, 227, 322, 226, 322, 249, 22, 250], shape: "poly", preFillColor: this.preFillColor(0), fillColor: this.fillColor(0), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A02", id:1, coords: [22, 345, 322, 250], shape: "rect", preFillColor: this.preFillColor(1), fillColor: this.fillColor(1), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A03", id:2, coords: [22, 438, 322, 345], shape: "rect", preFillColor: this.preFillColor(2), fillColor: this.fillColor(2), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A04", id:3, coords: [22, 527, 322, 438], shape: "rect", preFillColor: this.preFillColor(3), fillColor: this.fillColor(3), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A05", id:4, coords: [22, 616, 322, 527], shape: "rect", preFillColor: this.preFillColor(4), fillColor: this.fillColor(4), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A06", id:5, coords: [22, 697, 322, 616], shape: "rect", preFillColor: this.preFillColor(5), fillColor: this.fillColor(5), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A07", id:6, coords: [22,697, 22,1005, 241,956, 242,697], shape: "poly", preFillColor: this.preFillColor(6), fillColor: this.fillColor(6), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A08", id:7, coords: [242,697, 367,697, 368, 928, 241, 956], shape: "poly", preFillColor: this.preFillColor(7), fillColor: this.fillColor(7), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A09", id:8, coords: [369, 696, 447, 686, 502, 898, 371, 930], shape: "poly", preFillColor: this.preFillColor(8), fillColor: this.fillColor(8), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A10", id:9, coords: [451, 686, 548, 661, 603, 875, 503, 899], shape: "poly", preFillColor: this.preFillColor(9), fillColor: this.fillColor(9), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A11", id:10, coords: [549, 661, 608, 877, 702, 857, 652, 630], shape: "poly", preFillColor: this.preFillColor(10), fillColor: this.fillColor(10), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A12", id:11, coords: [706, 856, 806, 838, 752, 610, 656, 627], shape: "poly", preFillColor: this.preFillColor(11), fillColor: this.fillColor(11), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A13", id:12, coords: [754, 609, 807, 836, 903, 814, 850, 582], shape: "poly", preFillColor: this.preFillColor(12), fillColor: this.fillColor(12), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A14", id:13, coords: [905, 814, 989, 794, 947, 564, 922, 564, 852, 581], shape: "poly", preFillColor: this.preFillColor(13), fillColor: this.fillColor(13), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A15", id:14, coords: [950, 563, 988, 794, 1067, 780, 1045, 562], shape: "poly", preFillColor: this.preFillColor(14), fillColor: this.fillColor(14), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A16", id:15, coords: [1070, 779, 1176, 761, 1174, 562, 1048, 562], shape: "poly", preFillColor: this.preFillColor(15), fillColor: this.fillColor(15), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() }
      ]
    }
    return (

      <ImageMapper onMouseEnter={area => this.onEnter(area)} onMouseLeave={() => this.onLeave('Plan Osiedla')} style={{ margin: 'auto' }} imgWidth={1252} width={550} src={URL} map={MAP} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState,
    reservations: Object.values(state.reservations)
  }
}

export default connect(mapStateToProps, { editState })(Area)