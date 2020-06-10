import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import GreenSpring from '../components/GeenSpringProgress'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'




class MenuItem07 extends Component {


  myRef = React.createRef()
  myRef01 = React.createRef()

  componentDidMount() {
    this.props.editState(1800, 'scroll')
    this.props.editState('false', 'menuHide')
    this.props.editState('Dziennik Budowy', 'activeItem')
    this.props.editState('87%', 'widthStop')
    this.props.editState('100%', 'heightStop')
    this.props.editState('01 maja 2020', 'secondaryTitle')
    this.props.editState('hide', 'ui')
  }

  onEnter(title) {
    this.props.editState(title, 'secondaryTitle')
  }

  //budowa 1000 dni
  //1 zdjęcie 213 dzien

  renderDot(margin, title, date, scroll, ref) {
    let pDate = this.renderTextwidth(title)
    return (
      <div
        className='Dot'
        style={{ marginLeft: margin, backgroundColor: this.renderDotColor(title)[0], zIndex: this.renderDotColor(title)[1] }}
        onClick={() => { this.onEnter(title); this.props.editState(scroll, 'scroll'); this.scrollToMyRef(ref) }}
      >
        <div className='ProgressDate' style={{ width: pDate[0], color: pDate[1], backgroundColor: pDate[2], zIndex: 10 }}>
          <div style={{ padding: '2px' }}>{date}</div>
        </div>
      </div>
    )
  }

  renderDotColor(source) {

    if (source === this.props.appState.secondaryTitle) return ['#504137', '20']
    return ''
  }

  renderTextwidth(source) {
    if (source === this.props.appState.secondaryTitle) return ['85px', 'black', '#739367']
    return ''
  }


  renderProgress() {
    if (this.props.appState.secondaryTitle === 'Rozpoczęcie Budowy') return '20px'
    if (this.props.appState.secondaryTitle === '01.05.2020') return '95px'
    if (this.props.appState.secondaryTitle === '08.06.2020') return '115px'
    if (this.props.appState.secondaryTitle === 'Zakończenie Budowy') return '115px'
    return '20px'
  }

  scrollToMyRef(ref) {
    if (this.myRef.current && ref === 'myRef') {
      document.querySelector('#scrollTop').scrollTo({
        top:this.myRef.current.offsetTop, 
        behavior: "smooth" 
    })
    }

    if (this.myRef.current && ref === 'myRef01') {
      document.querySelector('#scrollTop').scrollTo({
        top:this.myRef01.current.offsetTop, 
        behavior: "smooth"
    })
    }
  }

  renderContent() {

    if (this.props.appState.loading === 'false') return (

      <>



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


          <div className='ProgressBarContainer' >
            <div className='ProgressBar'>
              <GreenSpring style={{ zIndex: 0 }} widthStart={'20px'} widthStop={this.renderProgress()} height={'20px'} color={'#efefef'} />
              {this.renderDot('2.5%', 'Rozpoczęcie Budowy', '01.10.2019', 0, 'myRef')}
              {this.renderDot('12%', '01 maja 2020', '01.05.2020', 1800, 'myRef01')}
              {this.renderDot('13%', '08 czerwca 2020', '08.06.2020', 4500)}
              {this.renderDot('81%', 'Zakończenie Budowy', '30.06.2022', 4500)}
            </div>
          </div>

          <div id='scrollTop' className='TimeContent'  >
            <div ref={this.myRef}></div>
            <img onMouseOver={() => { this.props.editState('Rozpoczęcie Budowy', 'secondaryTitle'); this.props.editState(undefined, 'scroll') }} className='TimePhoto' src="/img//dziennik/01.jpg" alt="trockiego01" />
            <img onMouseOver={() => { this.props.editState('Rozpoczęcie Budowy', 'secondaryTitle'); this.props.editState(undefined, 'scroll') }} className='TimePhoto' src="/img//dziennik/02.jpg" alt="trockiego02" />
            <div ref={this.myRef01}></div>
            <img onMouseOver={() => { this.props.editState('01.05.2020', 'secondaryTitle'); this.props.editState(undefined, 'scroll') }} className='TimePhoto' src="/img//dziennik/03.jpg" alt="trockiego03" />
            <img onMouseOver={() => { this.props.editState('01.05.2020', 'secondaryTitle'); this.props.editState(undefined, 'scroll') }} className='TimePhoto' src="/img//dziennik/04.jpg" alt="trockiego04" />
            <img onMouseOver={() => { this.props.editState('01.05.2020', 'secondaryTitle'); this.props.editState(undefined, 'scroll') }} className='TimePhoto' src="/img//dziennik/05.jpg" alt="trockiego05" />

            <img onMouseOver={() => { this.props.editState('08.06.2020', 'secondaryTitle'); this.props.editState(undefined, 'scroll') }} className='TimePhoto' src="/img//dziennik/06.jpg" alt="trockiego06" />
            <img onMouseOver={() => { this.props.editState('08.06.2020', 'secondaryTitle'); this.props.editState(undefined, 'scroll') }} className='TimePhoto' src="/img//dziennik/07.jpg" alt="trockiego07" />
            <img onMouseOver={() => { this.props.editState('08.06.2020', 'secondaryTitle'); this.props.editState(undefined, 'scroll') }} className='TimePhoto' src="/img//dziennik/08.jpg" alt="trockiego08" />
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

export default connect(mapStateToProps, { editState })(MenuItem07)