import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';


import PdfUlotka from '../documents/ulotka_etap2.pdf'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MenuItem02 extends React.Component {

  constructor(props) {
    super(props)
    this.props.editState('false', 'menuHide')
    this.props.editState('Prezentacja', 'activeItem')
    this.props.editState('11%', 'widthStop')
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
        <a className='mobileMap' href='https://www.google.com/maps/place/przyspacerowej.pl/@49.9973609,19.8681803,16.79z/data=!4m5!3m4!1s0x47165df95d77e089:0xeaf84c32f7785597!8m2!3d49.9971655!4d19.8685561?hl=pl' target="_blank" rel="noopener noreferrer">Zobacz Mapę</a><br/><br/>
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
            <div className='map'>
              <img style={{width: '100%'}} src='/svg/big_map.svg' alt='map'></img>
            </div>
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
                  text="osiedle PrzySpacerowej Etap II - ul. ks. Trockiego"
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