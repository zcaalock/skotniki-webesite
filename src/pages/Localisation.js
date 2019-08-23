import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Localistation extends React.Component {

  static defaultProps = {
    center: {
      lat: 49.9970347,
      lng: 19.8673887
    },
    zoom: 16
  };
  render() {

    return (
      <div className='pageContent'>
        <div className='localisation'>
          <div className="localisationText">
            <div className='title'>
              <h3>Informacje</h3>
            </div>
            <div style={{ padding: '100px 63px 25px 63px' }}>
              <b>Osiedle Przy Spacerowej II</b>
              <br />
              <br />
              To zespół nowoczesnych i komfortowych domów jednorodzinnych, zlokalizowanych w rejonie ulic Spacerowej i Trockiego w Krakowie. Osiedle położone jest w odległości około 6 km od Rynku Głównego, w południowo – zachodniej części Krakowa, w Skotnikach wchodzących w skład dzielnicy VII-Dębniki
              W ofercie znajdują się 22 domy o powierzchni użytkowej od 105 do 115 m2, każdy z garażem i ogrodem.
            <br />
              <br />
              Osiedle Położone jest w odległości około 6 km od Rynku Głównego, w południowo – zachodniej części Krakowa, w Skotnikach wchodzących w skład dzielnicy VII-Dębniki.
            <br />
              <br />
              <br />
              <br />
              <b>Atuty domów Przy Spacerowej II</b>
              <br />
              <br />
              <li>lokalizacja w granicach administracyjnych Krakowa</li>
              <li>nowoczesny design i wysoki standard wykończenia</li>
              <li>duże przeszklenia</li>
              <li>funkcjonalny i komfortowy układ pomieszczeń (dwie pełne, wysokie kondygnacje, bez tzw. „skosów”)</li>
              <br />
              <br />
              <br />              
              <b>Oferta domów Przy Spacerowej kierowana jest do osób:</b>
              <br />
              <br />
              <li>dla których dom jest lepszym wyborem niż 3-4 pokojowe mieszkanie, </li>
              <li>które oczekują większej prywatności i komfortu, jakiego nie może zapewnić mieszkanie w bloku wielorodzinnym, </li>
              <li>osób preferujących dom w granicach administracyjnych Krakowa z uwagi na prestiż, dogodny dojazd do pracy, szkoły, możliwość korzystania z miejskiej oferty kulturalnej i rozrywkowej, </li>
              <li>poszukujących domu przystępnego cenowo i ekonomicznego w utrzymaniu</li>
            </div>
          </div>
          <div className="localisationMap">
            <div style={{ height: '100%', width: '100%', paddingTop: '49px' }}>
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

export default Localistation