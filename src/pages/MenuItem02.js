import React, { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import _ from 'lodash'
import GoogleMapReact from 'google-map-react'
import PdfUlotka from '../documents/ulotka_etap2.pdf'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function MenuItem02 () {
  const dispatch = useDispatch()
  const appState = useSelector(state => state.appState)
  const pages = useSelector(state => _.keyBy(Object.values(state.pages), 'id'))

  useEffect(()=> {    
    dispatch(editState('false', 'menuHide'))
    dispatch(editState('Prezentacja', 'activeItem'))
    dispatch(editState('11%', 'widthStop'))
    dispatch(editState('33.32%', 'heightStop'))
    dispatch(editState('Mapa', 'secondaryTitle'))
    dispatch(editState('hide', 'ui'))
  },[])

  const defaultProps = {
    center: {
      lat: 49.9970347,
      lng: 19.8673887
    },
    zoom: 16
  };

  function renderContent() {
    if (appState.loading === 'false') return (
      <div className='infoText'>
        <div dangerouslySetInnerHTML={{ __html: pages[1].content }}></div><br/>
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
    return (
      <div className='pageContent' >
        <div className='localisation'>
          <div className="localisationText">
            {renderContent()}</div>
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
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
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

export default MenuItem02