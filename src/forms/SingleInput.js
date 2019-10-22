import React from 'react'
import { Field, reduxForm } from 'redux-form'


class SingleInput extends React.Component {

  state = { value: '' }

  componentDidMount() {
    this.setState({ value: this.props.initValue })
  }
  

  
  Cancel = (event) => {

    if (event.keyCode === 27) {
      this.props.removeEdit()
    }
  }

  render() {

    return (
      <form
        onBlur={() => this.props.removeEdit()}
        onKeyDown={this.Cancel}
        onSubmit={(e)=>{e.preventDefault();this.props.onSubmit(this.state.value)}}
        className="ui form error">
        <input
        autoFocus={true} 
        style={this.props.propChildStyle} 
        name="title" 
        value={this.state.value} 
        onChange={e=>this.setState({value: e.target.value})}
        />
      </form>
    )
  }
}



export default SingleInput



