import React from 'react'
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux'
import { editState } from '../../actions/appState';



class Area extends React.Component {

  onLeave(text) {
    this.props.editState(text, 'secondaryTitle')
  }

  onEnter(area) {
    if (this.props.reservations[area.id].status === 'blocked') this.props.editState('Etap II', 'secondaryTitle')
    if (this.props.reservations[area.id].status === 'reserved') this.props.editState('Rezerwacja', 'secondaryTitle')
    if (this.props.reservations[area.id].status === 'open') this.props.editState(area.name, 'secondaryTitle')

  }

  preFillColor(id, name) {
    //if (this.props.appState.secondaryTitle === name) return 'rgba(81, 122, 66, 0.7)'
    if (this.props.appState.reservationLoading === 'false') {
      
      if (this.props.reservations[id].status === 'blocked') return 'rgba(210, 202, 200, 0.6)'
      if (this.props.reservations[id].status === 'reserved') return 'rgba(55, 71, 80, 0.6)'
      if (this.props.reservations[id].status === 'disabled') return 'rgba(55, 71, 80, 0)'
      
    }
    
    return 'rgba(210, 202, 200, 0.1)'
  }

  fillColor(id) {
    if (this.props.appState.reservationLoading === 'false')
      if (this.props.reservations[id].status === 'blocked' || this.props.reservations[id].status === 'reserved' || this.props.reservations[id].status === 'disabled') return 'rgba(81, 122, 66, 0)'
      
    return 'rgba(81, 122, 66, 0.7)'
  }

  strokeColor() {
    return 'rgba(0, 0, 0, 0)'
  }

  lineWidth() {
    return 1
  }

  render() {
    const URL = "svg/plot_map.svg"
    const MAP = {
      name: "my-map",
      areas: [
        { name: "A20", id: 19, coords: [343.620, 155.940, 343.620, 243.040, 310.900, 250.910, 310.900, 155.940, 343.620, 155.940], shape: "poly", preFillColor: this.preFillColor(19,"A20"), fillColor: this.fillColor(19), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A19", id: 18, coords: [310.900, 155.940, 310.460, 251.040, 272.990, 260.290, 272.990, 155.940, 310.900, 155.940], shape: "poly", preFillColor: this.preFillColor(18,"A19"), fillColor: this.fillColor(18), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A18", id: 17, coords: [272.990, 155.940, 272.990, 260.290, 235.270, 269.690, 235.090, 155.940, 272.990, 155.940], shape: "poly", preFillColor: this.preFillColor(17,"A18"), fillColor: this.fillColor(17), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A17", id: 16, coords: [206.630, 155.940, 235.120, 156.030, 235.270, 269.610, 206.630, 276.820, 193.880, 263.320, 193.980, 167.480, 206.630, 155.940], shape: "poly", preFillColor: this.preFillColor(16,"A17"), fillColor: this.fillColor(16), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A16", id: 15, coords: [194.700, 99.350, 44.260, 98.420, 44.260, 53.330, 194.700, 53.330, 194.700, 99.350], shape: "poly", preFillColor: this.preFillColor(15,"A16"), fillColor: this.fillColor(15), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A15", id: 14, coords: [186.570, 139.210, 44.260, 138.480, 44.260, 98.640, 186.570, 99.350, 186.570, 139.210], shape: "poly", preFillColor: this.preFillColor(14,"A15"), fillColor: this.fillColor(14), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A14", id: 13, coords: [177.950, 178.630, 44.260, 177.880, 44.260, 138.490, 177.950, 139.270, 177.950, 178.630], shape: "poly", preFillColor: this.preFillColor(13,"A14"), fillColor: this.fillColor(13), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A13", id: 12, coords: [177.950, 217.510, 44.260, 217.510, 44.260, 177.880, 177.950, 178.570, 177.950, 217.510], shape: "poly", preFillColor: this.preFillColor(12,"A13"), fillColor: this.fillColor(12), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A12", id: 11, coords: [177.950, 256.890, 44.260, 256.890, 44.260, 217.510, 177.950, 218.290, 177.950, 256.890], shape: "poly", preFillColor: this.preFillColor(11,"A12"), fillColor: this.fillColor(11), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A11", id: 10, coords: [177.950, 292.410, 44.260, 292.410, 44.260, 256.890, 177.950, 257.600, 177.950, 292.410], shape: "poly", preFillColor: this.preFillColor(10,"A11"), fillColor: this.fillColor(10), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A10", id: 9, coords: [195.640, 299.210, 143.370, 299.210, 142.570, 407.300, 44.260, 429.090, 44.260, 292.410, 195.640, 292.410, 195.640, 299.210], shape: "poly", preFillColor: this.preFillColor(9,"A10"), fillColor: this.fillColor(9), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A09", id: 8, coords: [196.160, 395.410, 142.570, 407.300, 143.370, 299.210, 195.640, 299.210, 196.160, 395.410], shape: "poly", preFillColor: this.preFillColor(8,"A09"), fillColor: this.fillColor(8), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A08", id: 7, coords: [253.540, 382.630, 196.380, 395.370, 195.640, 292.410, 206.600, 292.270, 229.670, 286.710, 253.540, 382.630], shape: "poly", preFillColor: this.preFillColor(7,"A08"), fillColor: this.fillColor(7), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A07", id: 6, coords: [297.810, 372.690, 253.540, 382.670, 229.850, 286.710, 273.010, 276.400, 297.810, 372.690], shape: "poly", preFillColor: this.preFillColor(6,"A07"), fillColor: this.fillColor(6), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A06", id: 5, coords: [315.790, 265.960, 339.990, 363.350, 297.700, 372.690, 273.010, 276.350, 315.790, 265.960], shape: "poly", preFillColor: this.preFillColor(5,"A06"), fillColor: this.fillColor(5), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A05", id: 4, coords: [383.140, 353.700, 340.180, 363.350, 315.790, 265.940, 358.040, 255.890], shape: "poly", preFillColor: this.preFillColor(4,"A05"), fillColor: this.fillColor(4), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A04", id: 3, coords: [423.760, 344.670, 383.140, 353.700, 358.040, 255.890, 400.420, 245.570, 423.760, 344.670], shape: "poly", preFillColor: this.preFillColor(3,"A04"), fillColor: this.fillColor(3), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A03", id: 2, coords: [458.350, 336.930, 423.760, 344.620, 400.410, 245.560, 430.090, 238.560, 441.550, 238.560, 458.350, 336.930], shape: "poly", preFillColor: this.preFillColor(2,"A03"), fillColor: this.fillColor(2), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A02", id: 1, coords: [491.870, 329.470, 458.340, 336.850, 441.540, 238.480, 482.640, 238.570, 491.870, 329.470], shape: "poly", preFillColor: this.preFillColor(1,"A02"), fillColor: this.fillColor(1), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() },
        { name: "A01", id: 0, coords: [482.680, 238.560, 537.040, 238.560, 537.040, 319.370, 491.950, 329.440, 482.680, 238.560], shape: "poly", preFillColor: this.preFillColor(0,"A01"), fillColor: this.fillColor(0), strokeColor: this.strokeColor(), lineWidth: this.lineWidth() }
      ]
    }
    return (

      <ImageMapper onMouseEnter={area => this.onEnter(area)} onMouseLeave={() => this.onLeave('Plan Osiedla')} style={{ margin: 'auto', cursor: 'pointer' }} imgWidth={600} width={this.props.deviceWidth} src={URL} map={MAP} />
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