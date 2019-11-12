import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';


import PdfUlotka from '../documents/ulotka_etap2.pdf'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MenuItem02 extends React.Component {


  componentDidMount() {
    this.props.editState('false', 'menuHide')
    this.props.editState('Prezentacja', 'activeItem')
    this.props.editState('15%', 'widthStop')
    this.props.editState('33.32%', 'heightStop')
    this.props.editState('Mapa', 'secondaryTitle')
    this.props.editState('hide', 'ui')
  }

  static defaultProps = {
    center: {
      lat: 49.9970347,
      lng: 19.8673887
    },
    zoom: 16
  };

  renderContent() {
    if (this.props.appState.loading === 'false') return (
      <div className='infoText'>
        <div dangerouslySetInnerHTML={{ __html: this.props.pages[1].content }}></div><br/>
        <a className='mobileMap' href='https://www.google.com/maps/@49.9973793,19.8688136,16z?hl=pl-PL' target="_blank" rel="noopener noreferrer">Zobacz Mapę</a><br/><br/>
        <a href={PdfUlotka} target="_blank" rel="noopener noreferrer">Zobacz Ulotkę</a>
      </div>

    )
    return (
      <div className='infoText'>
        <ContentPlaceholder />
      </div>
    )
  }

  render() {
    return (
      <div className='pageContent' >
        <div className='localisation'>
          <div className="localisationText">
            {this.renderContent()}</div>
          <div className="localisationMap">
            <div
              className="map"
            //style={{ height: '100%', width: '100%', paddingTop: '49px' }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB6sPvWL4Rj_oXN9EUma7bY6nPveHKdBMk' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={49.9970347}
                  lng={19.8673887}
                  text="PrzySpacerowej Etap II"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: _.keyBy(Object.values(state.pages), 'id'),
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState })(MenuItem02)