import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'


class MenuItem07 extends React.Component {

  componentDidMount() {
    this.props.editState('false', 'menuHide')
    this.props.editState('Dziennik Budowy', 'activeItem')
    this.props.editState('87%', 'widthStop')
    this.props.editState('100%', 'heightStop')
    this.props.editState('01 maja 2020', 'secondaryTitle')
    this.props.editState('hide', 'ui')
  }

  onLeave() {
    this.props.editState('', 'secondaryTitle')
  }

  onEnter(title) {
    this.props.editState(title, 'secondaryTitle')

  }

  //budowa 1000 dni
  //1 zdjęcie 213 dzien

  renderDot(margin, title, date) {
    return (
      <div        
        className='Dot'
        style={{ marginLeft: margin, backgroundColor: this.renderDotColor(title) }}
        //onMouseEnter={() => this.onEnter(title)}
        onClick={() => this.onEnter(title)}
      //onMouseLeave={() => this.onLeave()}
      >
        <div className='ProgressDate'>
          {date}
        </div>
      </div>
    )
  }

  render01() {
    return (
      <div className='TimeContent'>
        <img className='TimePhoto' src="/img//dziennik/01.jpg" alt="trockiego01" />
        <img className='TimePhoto' src="/img//dziennik/02.jpg" alt="trockiego02" />
      </div>
    )
  }

  render02() {
    return (
      <div className='TimeContent'>
        <img className='TimePhoto' src="/img//dziennik/03.jpg" alt="trockiego01" />
        <img className='TimePhoto' src="/img//dziennik/04.jpg" alt="trockiego02" />
        <img className='TimePhoto' src="/img//dziennik/05.jpg" alt="trockiego02" />
      </div>
    )
  }

  renderDotColor(source) {
      
    if (source === this.props.appState.secondaryTitle) return '#504137'    
    return ''
  }

  
  renderImages() {
    if (this.props.appState.secondaryTitle === 'Rozpoczęcie Budowy') return this.render01()
    if (this.props.appState.secondaryTitle === '01 maja 2020') return this.render02()
    return <div></div>
  }

  renderContent() {
    if (this.props.appState.loading === 'false') return (
      <>
        <div className='ProgressBarContainer' >
          <div className='ProgressBar' >
            {this.renderDot('0.5%', 'Rozpoczęcie Budowy', '01.10.2019')}
            {this.renderDot('12%', '01 maja 2020', '01.05.2020')}
            {this.renderDot('77%', 'Zakończenie Budowy', '30.06.2022')}
          </div>
        </div>        
        {this.renderImages()}
      </>

    )
    return (
      <div className='infoText' style={{ width: '50%' }}>
        <ContentPlaceholder />
      </div>
    )
  }


  render() {
    return (
      <div className='pageContent' >
        <div className='DziennikContainer'>
          {this.renderContent()}
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

export default connect(mapStateToProps, { editState })(MenuItem07)