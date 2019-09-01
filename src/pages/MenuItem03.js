import React from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'
import PdfALewy from '../documents/segment-lewy.pdf';
import PdfAPrawy from '../documents/segment-prawy.pdf'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'

import LZero from '../components/Maps/LZero'
import LOne from '../components/Maps/LOne'
import PZero from '../components/Maps/PZero'
import POne from '../components/Maps/POne'

class MenuItem03 extends React.Component {
  state = {
    segmentLeftZero: 'true',
    segmentLeftOne: 'false',
    segmentRightZero: 'false',
    segmentRightOne: 'false',
  }

  componentDidMount() {
    this.props.editState('Twój Dom', 'activeItem')
    this.props.editState('32%', 'widthStop')
    this.props.editState('47.98%', 'heightStop')
    this.props.editState('Segment L: Parter', 'secondaryTitle')
  }
  downloadPDF() {
    if (this.state.segmentLeftZero === 'true' || this.state.segmentLeftOne === 'true') return <a href={PdfALewy} target="_blank" rel="noopener noreferrer">Zobacz PDF</a>
    if (this.state.segmentRightZero === 'true' || this.state.segmentRightOne === 'true') return <a href={PdfAPrawy} target="_blank" rel="noopener noreferrer">Zobacz PDF</a>
  }

  handleStyle(selector) {
    if (selector === 'true') return { color: '#21BA45', cursor: 'pointer' }
    return { color: 'black', cursor: 'pointer' }
  }

  handleClick(segment, item) {
    this.setState({
      segmentLeftZero: 'false',
      segmentLeftOne: 'false',
      segmentRightZero: 'false',
      segmentRightOne: 'false',
    }
    )
    this.setState({ [segment]: 'true' })
    this.props.editState(item, 'secondaryTitle')
  }

  renderPlans() {
    if (this.state.segmentLeftZero === 'true') return <LZero />
    if (this.state.segmentLeftOne === 'true') return <LOne />
    if (this.state.segmentRightZero === 'true') return <PZero />
    if (this.state.segmentRightOne === 'true') return <POne />
  }

  renderMobilePlans() {
    if (this.state.segmentLeftZero === 'true') return <img className='imageAutoWidth' src='/img/plany_domow/A_lewy_plan_pietro.png' />
    if (this.state.segmentLeftOne === 'true') return <img className='imageAutoWidth' src='/img/plany_domow/A_lewy_plan_parter.png' />
    if (this.state.segmentRightZero === 'true') return <img className='imageAutoWidth' src='/img/plany_domow/A_prawy_plan_pietro.png' />
    if (this.state.segmentRightOne === 'true') return <img className='imageAutoWidth' src='/img/plany_domow/A_prawy_plan_parter.png' />
  }

  renderContent() {
    if (this.props.appState.loading === 'false') return (
      <div className='infoText'>
        <div style={{ display: 'flex', height: '50px', backgroundColor: '#EFEFEF' }}>
          <div style={{ width: '47.5%', display: 'flex' }}>
            <div className='imgMenu' ><b>Segment L : </b></div>
            <div className='imgMenu' onClick={() => this.handleClick('segmentLeftZero', 'Segment L: Parter')} style={this.handleStyle(this.state.segmentLeftZero)}><b> Parter</b></div>
            <div className='imgMenu' onClick={() => this.handleClick('segmentLeftOne', 'Segment L: Piętro')} style={this.handleStyle(this.state.segmentLeftOne)}><b> Piętro</b></div>
          </div>
          <div style={{ width: '5%', backgroundColor: 'white' }}></div>
          <div style={{ width: '47.5%', display: 'flex' }}>
            <div className='imgMenu' ><b>Segment P : </b></div>
            <div className='imgMenu' onClick={() => this.handleClick('segmentRightZero', 'Segment L: Parter')} style={this.handleStyle(this.state.segmentRightZero)}><b> Parter</b></div>
            <div className='imgMenu' onClick={() => this.handleClick('segmentRightOne', 'Segment L: Piętro')} style={this.handleStyle(this.state.segmentRightOne)}><b> Piętro</b></div>
          </div>
        </div>
        <div style={{ paddingTop: '20px' }} dangerouslySetInnerHTML={{ __html: this.props.pages.menuItem03.content.rendered }}></div>
      </div>
    )
    return <div className='infoText'><ContentPlaceholder /></div>
  }

  render() {
    return (
      <div className='pageContent'>
        <div className='localisation'>
          <div className="localisationText">

            {this.renderContent()}

          </div>
          <div className="plans">
            {this.renderPlans()}
            <div>{this.downloadPDF()}</div>
          </div>
          <div className='mobilePlans'>
            {this.renderMobilePlans()}
            <div>{this.downloadPDF()}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToPrps = (state) => {
  return {
    pages: _.keyBy(Object.values(state.pages), 'id'),
    appState: state.appState
  }
}

export default connect(mapStateToPrps, { editState })(MenuItem03)