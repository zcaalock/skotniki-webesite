import React from 'react'
import _ from 'lodash'
import PdfALewy from '../documents/segment-lewy.pdf';
import PdfAPrawy from '../documents/segment-prawy.pdf'
import axios from 'axios'

class Typ1 extends React.Component {
  state = {
    itemSelected: 'a',
    pageData: [],
    isLoaded: 'false'
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

  downloadPDF() {
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
    console.log('plans state: ', this.state.pageData)
    if (this.state.pageData.plany_domow)
      return (
        <div className='pageContent'>
          <div className='localisation'>
            <div className="localisationText">
              <div className='title'>
                <h3>Plany domów</h3>
              </div>
              <div style={{ padding: '100px 63px 25px 63px' }}>
                <div dangerouslySetInnerHTML={{ __html: this.state.pageData.plany_domow.content.rendered }}></div>
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
    return <div>loading...</div>
  }
}

export default Typ1