import React from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { editState } from '../actions/appState'
import { logoutUser } from '../actions/users'
import history from '../history'
import windowSize from '../components/widnowSize'

export default function LeftMenu() {
  windowSize()
  const authenticated = useSelector(state => state.user.authenticated)
  const landingPage = useSelector(state => state.appState.landingPage)
  const dispatch = useDispatch()

  const showAdminPanel = () => {

    if (authenticated === true) return (
      <div className='adminPanelTitle'>
        <div
          onClick={() => { history.push('/'); dispatch(logoutUser()); localStorage.removeItem("state") }}
          data-position="right center"
          data-tooltip="Logout">
          <h3><i className="power off icon" /></h3>
        </div>
        <div><h3>Admin Panel</h3></div>
      </div>)
  }

      if(landingPage === 'false') return (
      <div className='leftMenu'>
        <div className='menuTop'>
          <div className='menuGreenBar'>{showAdminPanel()}</div>
          <img className='menuLogo' src="/img/logo.svg" alt="Skotniki logo" />
        </div>
        <div className='menuBottomLeft'>
          <h3>Kontakt</h3>
          biuro@przyspacerowej.pl
          <br/>          
          tel. +48 509 192 091
          <br/>
          tel. +48 12 628 08 00
          </div>
      </div>
    )
    return <div></div>
  


}

//import windowSize from '../components/widnowSize'

// class LeftMenu extends React.Component {

//   // constructor(props) {
//   //   super(props);
//   //   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
//   // }

//   // componentDidMount() {
//   //   this.updateWindowDimensions();
//   //   window.addEventListener('resize', this.updateWindowDimensions);  
//   // }

//   // componentWillUnmount() {
//   //   window.removeEventListener('resize', this.updateWindowDimensions);
//   // }



//   // updateWindowDimensions() {    
//   //   this.props.editState( window.innerWidth, 'width' );
//   //   //this.props.editState( window.innerHeight, 'height')
//   // }


//   showAdminPanel() {

//     if(this.props.user.authenticated === true) return (
//     <div className='adminPanelTitle'>
//       <div
//           onClick={() => {history.push('/'); this.props.logoutUser(); localStorage.removeItem("state")}}
//           data-position="right center"
//           data-tooltip="Logout">
//           <h3><i className="power off icon" /></h3>
//         </div>
//       <div><h3>Admin Panel</h3></div>
//     </div>)
//   }

//   render() {

//     if(this.props.appState.landingPage === 'false') return (
//       <div className='leftMenu'>
//         <div className='menuTop'>
//           <div className='menuGreenBar'>{this.showAdminPanel()}</div>
//           <img className='menuLogo' src="/img/logo.svg" alt="Skotniki logo" />
//         </div>
//         <div className='menuBottomLeft'>
//           <h3>Kontakt</h3>
//           biuro@przyspacerowej.pl
//           <br/>          
//           tel. +48 509 192 091
//           <br/>
//           tel. +48 12 628 08 00
//           </div>
//       </div>
//     )
//     return <div></div>
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     appState: state.appState,
//     user: state.user
//   }
// }

// export default connect(mapStateToProps, { editState, logoutUser })(LeftMenu)