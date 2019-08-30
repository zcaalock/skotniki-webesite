import React from 'react'
import _ from 'lodash'
import axios from 'axios'

class MenuItem05 extends React.Component {

  state = {    
    pageData: [],
    isLoaded: 'false',
    itemSelected: 'wawrzynca'
  }

  componentDidMount() {
    axios.get('/wp-json/wp/v2/skotniki2')
      .then(res => this.setState({
        pageData: _.keyBy(res.data.map(data => {
          return {
            name: data.title.rendered,
            content: data.content
          }
        }), 'name'),
        isLoaded: 'true'
      }))
      .catch(err => console.log(err))
  }  

  handleStyle(item) {
    if (this.state.itemSelected === item) return { color: '#21BA45', cursor: 'pointer' }
    return { color: 'black', cursor: 'pointer' }
  }

  handleClick(item) {
    this.setState({ itemSelected: item })
  }

  renderImg() {
    if (this.state.itemSelected === 'wawrzynca') return (
      <>
        <img className='imageAutoHeight' src="/img/w19-02.jpg" alt="wawrzynca19" />
        <img className='imageAutoHeight' src="/img/w19-01.jpg" alt="wawrzynca19" />
        <a style={{ marginBottom: '15px' }} href='http://www.wawrzynca19.pl' target="_blank" rel="noopener noreferrer" alt="wawrzynca19">wawrzynca19.pl</a>
      </>)

    if (this.state.itemSelected === 'skotniki') return (
      <>
        <img className='imageAutoHeight' src="/img/skotniki_01.jpg" alt="skotniki" />
        <img className='imageAutoHeight' src="/img/skotniki_02.jpg" alt="skotniki" />
        <a style={{ marginBottom: '15px' }} href='http://www.przyspacerowej.pl' target="_blank" rel="noopener noreferrer" alt="wawrzynca19">przyspacerowej.pl</a>
      </>)

    if (this.state.itemSelected === 'tyniecka') return (
      <>
        <img className='imageAutoHeight' src="/img/tyniecka_01.jpg" alt="tyniecka" />
        <img className='imageAutoHeight' src="/img/tyniecka_02.jpg" alt="tyniecka" />
        <a style={{ marginBottom: '15px' }} href='http://www.przytynieckiej.pl' target="_blank" rel="noopener noreferrer" alt="wawrzynca19">przytynieckiej.pl</a>
      </>)
  }

  render() {
    if (this.state.pageData.wawrzynca)
    return (
      <div className='pageContent'>
        <div className='localisation'>
          <div className="localisationText">
            <div className='title'>
              <h3>Plany domów</h3>
            </div>
            <div style={{ padding: '100px 63px 25px 63px' }}>
              <div onClick={() => this.handleClick('wawrzynca')} style={this.handleStyle('wawrzynca')}><b>Wawrzyńca 19</b></div>
              <br />
              
              {/* To inwestycja mieszkaniowa zrealizowana na krakowskim Kazimierzu. W dawnej, pochodzącej z 1914 roku Elektrowni Miejskiej przy ul. Św. Wawrzyńca 19, powstaje nowoczesny kompleks apartamentów. Zabytkowe obiekty są modernizowane i przekształcane w taki sposób, aby nie naruszyć spójności ich oryginalnego projektu. Adaptacja postindustrialnych zabudowań odznacza się wysokim stopniem oryginalności i idealnie wpisuje się w charakter zrewitalizowanego otoczenia architektonicznego Kwartału Świętego Wawrzyńca.
            <br />
              <br /> */}
              <div dangerouslySetInnerHTML={{ __html: this.state.pageData.wawrzynca.content.rendered }}></div>
              <br />
              <br />
              <div onClick={() => this.handleClick('skotniki')} style={this.handleStyle('skotniki')}><b>Osiedle przy Spacerowej</b></div>
              <br />
              <div dangerouslySetInnerHTML={{ __html: this.state.pageData.skotniki1.content.rendered }}></div>
              
              {/* To zespół nowoczesnych i komfortowych domów jednorodzinnych, zlokalizowanych przy ulicy Spacerowej 101 w Krakowie. Osiedle położone jest w Skotnikach, aktualnie bardzo prężnie rozwijającej się części Krakowa. W ofercie znajduje się 12 domów o powierzchni użytkowej od 105 do 109 m2, każdy z garażem i dużym ogrodem.
              <br />
              <br /> */}
              <br />
              <br />
              <div onClick={() => this.handleClick('tyniecka')} style={this.handleStyle('tyniecka')}><b>Osiedle przy Tynieckiej</b></div>
              <br />
{/*               
              To zespół nowoczesnych i komfortowych domów jednorodzinnych, zlokalizowanych przy ulicy Tynieckiej  w Krakowie. Osiedle położone jest w dzielnicy Dębniki – Kostrze, malowniczej cześć Krakowa przez którą przebiega trasa rowerowa do Tyńca. W naszej ofercie znajduje się 13 domów o powierzchni użytkowej od 154 do 175 m2, każdy z garażem i dużym ogrodem. */}
              <div dangerouslySetInnerHTML={{ __html: this.state.pageData.tyniecka.content.rendered }}></div>

            </div>
          </div>
          <div className="devImages">
            {this.renderImg()}
          </div>
        </div>
      </div>
    )
    return <div>loading...</div>
  }
}

export default MenuItem05