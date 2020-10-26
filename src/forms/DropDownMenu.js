import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';
import React from 'react'

class DropDrownMenu extends React.Component {

  renderDropDown() {
    //console.log('values: ', this.props.values)
    if(!this.props.values){
      return <div class="ui active inline loader"></div>
    }
    return this.props.values.map(value => {
      //console.log(c)   
      //console.log('dropdown value: ', value)
      return (
        
        <Dropdown.Item
          key={value}
          name={value}
          onClick={() => this.props.onSave(value)}>
          {value}
        </Dropdown.Item>
      )
    })
  }
  render() {
    
    return (
      <div>
        <Dropdown item text={this.props.text}>
          <Dropdown.Menu>
            {this.renderDropDown()}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}



export default connect(null)(DropDrownMenu)