import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';
import { Placeholder } from 'semantic-ui-react'

import PdfUlotka from '../documents/ulotka_etap2.pdf'
import { editState } from '../actions/appState'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MenuItem02 extends React.Component {

  componentDidMount() {
    this.props.editState('Prezentacja', 'activeItem')
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
        <div dangerouslySetInnerHTML={{ __html: this.props.pages.menuItem02.content.rendered }}></div>
        <a href={PdfUlotka} target="_blank" rel="noopener noreferrer">Zobacz Ulotkę</a>
      </div>

    )
    return (
      <div className='infoText'>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </div>
    )
  }


  render() {
    return (
      <div className='pageContent' >
        <div className='localisation'>
          <div className="localisationText">
            <div className='title'>
              <h3>Informacje</h3>
            </div>
            {this.renderContent()}
          </div>
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