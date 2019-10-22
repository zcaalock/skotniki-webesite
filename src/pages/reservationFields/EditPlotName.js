import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { editReservation} from '../../actions/reservations'
import SingleInput from '../../forms/SingleInput'

class EditPlotName extends React.Component {    

  onSubmit = (formValues) => {
    this.props.editReservation(this.props.reservation.id, {plot: formValues})
    
    this.props.removeEdit()
  }  
 

  renderEditPlot() {
    //console.log('init: ', _.pick(this.props.reservation, 'plot') )
    
    if (this.props.editState.itemEditable === true) {
      return (
        <SingleInput 
        propStyle={{padding: '0'}} 
        propChildStyle={{ padding: '5px'}}
        initValue={this.props.reservation.plot} 
        removeEdit={()=>this.props.removeEdit()} 
        onSubmit={this.onSubmit} />
      )
    }

    if (this.props.editState.itemEditable === false) {
      return (
        <div >            
          <div>{this.props.reservation.plot}</div>          
        </div>
      )
    }
  }

  render() {

    return (
      <div style={{width: '100%'}}>      
        {this.renderEditPlot()}
      </div>
    )
  }
}

export default connect(null, { editReservation })(EditPlotName)
