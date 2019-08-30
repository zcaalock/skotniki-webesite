import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'

class MenuItem05 extends React.Component {

  state = { itemSelected: 'wawrzynca' }

  componentDidMount() {
    this.props.editState('86%', 'widthStop')
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

  renderContent() {
    if (this.props.appState.loading === 'false')
      return (
        <div style={{ padding: '100px 63px 25px 63px' }}>
          <div dangerouslySetInnerHTML={{ __html: this.props.pages.menuItem05.content.rendered }}></div>
        </div>
      )
    return <div style={{ padding: '100px 63px 25px 63px' }}><ContentPlaceholder /></div>
  }

  render() {

    return (
      <div className='pageContent'>
        <div className='localisation'>
          <div className="localisationText">
            <div className='title'>
              <h3>Plany domów</h3>
            </div>
            {this.renderContent()}
          </div>
          <div className="devImages">
            <div style={{ display: 'flex', height: '50px' }}>
              <div className='imgMenu' onClick={() => this.handleClick('wawrzynca')} style={this.handleStyle('wawrzynca')}><b>Wawrzyńca 19</b></div>
              <div className='imgMenu' onClick={() => this.handleClick('skotniki')} style={this.handleStyle('skotniki')}><b>Osiedle przy Spacerowej</b></div>
              <div className='imgMenu' onClick={() => this.handleClick('tyniecka')} style={this.handleStyle('tyniecka')}><b>Osiedle przy Tynieckiej</b></div>
            </div>
            {this.renderImg()}
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

export default connect(mapStateToPrps, { editState })(MenuItem05)
