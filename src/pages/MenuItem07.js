import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import GreenSpring from '../components/GeenSpringProgress'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'


const photos = [
  { link: '01.jpg', group: 'myRef0', date: '01.10.2019', title: 'Rozpoczęcie Budowy' },
  { link: '02.jpg', group: 'myRef0', date: '01.10.2019', title: 'Rozpoczęcie Budowy' },
  { link: '03.jpg', group: 'myRef1', date: '01.05.2020', title: '1 maja 2020' },
  { link: '04.jpg', group: 'myRef1', date: '01.05.2020', title: '1 maja 2020' },
  { link: '05.jpg', group: 'myRef1', date: '01.05.2020', title: '1 maja 2020' },
  { link: '06.jpg', group: 'myRef2', date: '08.06.2020', title: '8 czerwca 2020' },
  { link: '07.jpg', group: 'myRef2', date: '08.06.2020', title: '8 czerwca 2020' },
  { link: '08.jpg', group: 'myRef2', date: '08.06.2020', title: '8 czerwca 2020' },
  { link: '09.jpg', group: 'myRef3', date: '01.07.2020', title: '1 lipca 2020' },
  { link: '10.jpg', group: 'myRef3', date: '01.07.2020', title: '1 lipca 2020' },
  { link: '11.jpg', group: 'myRef3', date: '01.07.2020', title: '1 lipca 2020' }
]



class MenuItem07 extends Component {

  constructor(props) {
    super(props)
    var count = _.uniqBy(photos, 'group')
    for (var i = 0; i < count.length; i++) {
      //console.log('ble', i)
      this[`myRef${i}`] = React.createRef()
    }
  
    this.props.editState('false', 'menuHide')
    this.props.editState('Dziennik Budowy', 'activeItem')
    this.props.editState('87%', 'widthStop')
    this.props.editState('100%', 'heightStop')
    this.props.editState('1 lipca 2020', 'secondaryTitle')
    this.props.editState('myRef3', 'scroll')
    this.props.editState('hide', 'ui')
  }

  onEnter(title) {
    this.props.editState(title, 'secondaryTitle')
  }

  renderDot() {
    var select = _.uniqBy(photos, 'group')
    var i = -1
    return select.map(arr=> {      
      i = i + 1
      let pDate = this.renderTextwidth(arr.group)
      let margin = i===0 ? '10px' : `${750 / (select.length)}px`
      let title = arr.title
      let ref = arr.group
      let date = arr.date      
      return (
        <div
          key={arr.link}
          className='Dot'
          style={{ marginLeft: margin, backgroundColor: this.renderDotColor(ref)[0], zIndex: this.renderDotColor(ref)[1] }}
          onClick={() => { this.onEnter(title); this.props.editState(ref, 'scroll'); this.scrollToMyRef(ref) }}
        >
          <div className='ProgressDate' style={{ width: pDate[0], color: pDate[1], backgroundColor: pDate[2], zIndex: 10 }}>
            <div style={{ paddingTop: '4px',  paddingLeft: '2px' }}>{date}</div>
          </div>
        </div>        
      )
    })
    
  }

  renderDotColor(source) {

    if (source === this.props.appState.scroll) return ['#504137', '20']
    return ''
  }

  renderTextwidth(source) {
    if (source === this.props.appState.scroll) return ['85px', 'black', '#739367']
    return ''
  }


  renderProgress() {
    var count = _.uniqBy(photos, 'group')
    for (var i = 0; i < count.length; i++) {
      
      if (this.props.appState.scroll === `myRef${i}`) return `${595 / (count.length - 1) * i}px`
    }
    return '0px'
  }

  scrollToMyRef(ref) {
    var count = _.uniqBy(photos, 'group')
    for (var i = 0; i < count.length; i++) {
      if (this[`myRef${i}`].current && ref === `myRef${i}`) {
        document.querySelector('#scrollTop').scrollTo({
          top: this[`myRef${i}`].current.offsetTop,
          behavior: "smooth"
        })
      }
    }

  }
  
  renderPhotoDivs(ref){
    var select = _.filter(photos, {group: ref})   
    
    return select.map(arr=> {     
              
      return (
        <img key={arr.link} onMouseOver={() => { this.props.editState(arr.title, 'secondaryTitle'); this.props.editState(arr.group, 'scroll') }} className='TimePhoto' src={`/img/dziennik/${arr.link}`} alt="trockiego" />       
      )
    })
  }

  renderPhotoRefs(){
    var select = _.uniqBy(photos, 'group').reverse()
    
    return select.map(arr=> {      
               
      return (
        <div key={arr.group}>
        <div ref={this[arr.group]}></div> 
        {this.renderPhotoDivs(arr.group)}
        </div>        
      )
    })
  }

  renderContent() {

    if (this.props.appState.loading === 'false') return (
      <>
        <div className='ProgressBarContainer' >
          <div className='ProgressBar'>
            <GreenSpring style={{ zIndex: 0 }} widthStart={'20px'} widthStop={this.renderProgress()} height={'20px'} color={'#efefef'} />
            {this.renderDot()}            
          </div>
        </div>

        <div id='scrollTop' className='TimeContent'  >
          {this.renderPhotoRefs()}          
        </div>
      </>
    )
    return (
      <div className='infoText' style={{ width: '50%' }}>
        <ContentPlaceholder />
      </div>
    )
  }


  render() {
   // const { myRef } = this.props;    
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