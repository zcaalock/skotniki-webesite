import React from 'react'
import EditPlotName from './EditPlotName'

class Plot extends React.Component {
  state = { itemEditable: false }

  removeEdit() {
    this.setState({ itemEditable: false })
  }

  showEdit() {
    this.setState({ itemEditable: true })
  }

  render() {
    return (
      <div onDoubleClick={() => this.showEdit()}>        
          <EditPlotName
            reservation={this.props.reservation}
            editState={this.state}
            showEdit={() => this.showEdit()}
            removeEdit={() => this.removeEdit()}/>        
      </div>
    )
  }
}

export default Plot