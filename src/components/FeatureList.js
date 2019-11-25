import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextSpring from './TextSpring'


export class FeatureList extends Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  state = { 'item0': 'hide', 'item1': 'hide', 'item2': 'hide', 'item3': 'hide', 'item4': 'hide', 'item5': 'hide', hover: 'false', show: 'none' }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.setState({show:'block' })

    setTimeout(() => {
      this.setState({ 'item0': 'show00'})
    }, 1500);
    setTimeout(() => {
      this.setState({ 'item1': 'show01' })
    }, 2000);
    setTimeout(() => {
      this.setState({ 'item2': 'show02' })
    }, 2500);
    setTimeout(() => {
      this.setState({ 'item3': 'show03' })
    }, 3000);
    setTimeout(() => {
      this.setState({ 'item4': 'show04' })
    }, 3500);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  featureList(number, content) {
    const id = `item${number}`
    if (this.state[id] === `show0${number}` && this.state.show === 'block' && this.state.width > 905) return <div className='featureList'><TextSpring content={content} widthStart={'0%'} widthStop={'100%'} height={'100%'} color={'#efefef'} zIndex={this.props.appState.zIndex} /></div>
    return <div></div>
  }

  hover() {
    if (this.state.hover === 'true') return 'black'
    if (this.state.hover === 'false') return 'rgba(0,0,0,0)'
    return 'none'
  }


  render() {
    return (
      <div onMouseEnter={() => { this.setState({ hover: 'true' }) }} onMouseLeave={() => { this.setState({ hover: 'false' }) }} style={{ paddingTop: '50px', width: '700px', height: 'auto', display: this.state.show }}>
        <div onClick={() => { this.setState({ 'item0': '', 'item1': '', 'item2': '', 'item3': '', 'item4': '', show:'none' }) }} className="featureList icon" style={{ color: `${this.hover()}`, paddingLeft: '10px', cursor: 'pointer' }}><i className="x icon" /></div>
        <div>{this.featureList(0, 'Ogrzewanie podłogowe na parterze w cenie')}</div>
        <div>{this.featureList(1, 'Dwie pełne kondygnacje')}</div>
        <div>{this.featureList(2, 'Kocioł gazowy kondensacyjny z zasobnikiem na wodę')}</div>
        <div>{this.featureList(3, 'Okna trójszybowe')}</div>
        <div>{this.featureList(4, 'Funkcjonalna przestrzeń, duże przeszklenia')}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps)(FeatureList)
