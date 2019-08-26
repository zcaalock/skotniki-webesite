import React from 'react'
import PdfALewy from '../documents/segment-lewy.pdf';
import PdfAPrawy from '../documents/segment-prawy.pdf'

class Typ1 extends React.Component {
  state = { itemSelected: 'a' }

  downloadPDF(){
    if (this.state.itemSelected === 'a') return <a href={PdfALewy} target="_blank" rel="noopener noreferrer">Zobacz PDF</a>
    if (this.state.itemSelected === 'b') return <a href={PdfAPrawy} target="_blank" rel="noopener noreferrer">Zobacz PDF</a>
  }

  handleStyle(item) {
    if (this.state.itemSelected === item) return { color: '#21BA45', cursor: 'pointer' }
    return { color: 'black', cursor: 'pointer' }
  }

  handleClick(item) {
    this.setState({ itemSelected: item })
  }

  renderPlans() {
    if (this.state.itemSelected === 'a') return (
      <>
        <img className='imageAuto' src="/img/plany_domow/A_lewy_tekst.png" alt="Typ A - lewy" />
        <img className='imageAuto' src="/img/plany_domow/A_lewy_plan.png" alt="Typ A - lewy" />
      </>)

    if (this.state.itemSelected === 'b') return (
      <>
        <img className='imageAuto' src="/img/plany_domow/B_prawy_tekst.png" alt="Typ A - lewy" />
        <img className='imageAuto' src="/img/plany_domow/B_prawy_plan.png" alt="Typ A - lewy" />
      </>)
  }

  render() {

    return (
      <div className='pageContent'>
        <div className='localisation'>
          <div className="localisationText">
            <div className='title'>
              <h3>Plany domów</h3>
            </div>
            <div style={{ padding: '100px 63px 25px 63px' }}>
              <b>Parter</b>
              <br />
              <br />
              Na parterze Domu znajduje się wejście główne, pokój dzienny z aneksem kuchennym i wyjściem na ogród, toaleta, pomieszczenie gospodarcze oraz garaż, a na zewnątrz budynku miejsce na taras (do indywidualnej aranżacji).
            <br />
              <br />
              <b>Piętro</b>
              <br />
              <br />
              Na I piętrze zaprojektowano 3 sypialnie oraz przestronną łazienkę. Należy podkreślić, że kondygnacja I piętra jest pełnej wysokości, bez skosów, co sprawia, że pokoje są przestronne oraz funkcjonalne. Dodatkowo dostępny jest strych, który można wykorzystać jako pomieszczenie do przechowywania rzeczy sezonowych.
              <br />
              <br />
              <b>Elewacja</b>
              <br />
              <br />
              Elewacja budynku mieszkalnego wykończona jest tynkiem sylikonowym oraz elementami drewnianymi, detale oraz balkony wykonane są z betonu architektonicznego.
            <br />
              <br />
              <br />
              <div onClick={() => this.handleClick('a')} style={this.handleStyle('a')}><b>Plan domu: segment lewy</b></div>
              <br />
              <br />
              <div onClick={() => this.handleClick('b')} style={this.handleStyle('b')}><b>Plan domu: segment prawy</b></div>              
            </div>
          </div>
          <div className="plans">
            {this.renderPlans()}
            <div>{this.downloadPDF()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Typ1