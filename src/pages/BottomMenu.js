import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class BottomMenu extends Component {
  

  render() {
    const { activeItem } = this.props.state

    return (
      <div className='menuBottom'>
        <Menu style={{height: '7vh'}} color={'green'}>
          <Menu.Item name='galeria' active={activeItem === 'galeria'} onClick={this.props.handleItemClick} />          
          <Menu.Item
            name='informacje'
            active={activeItem === 'informacje'}
            onClick={this.props.handleItemClick}
          />
          <Menu.Item
            name='plany'
            active={activeItem === 'plany'}
            onClick={this.props.handleItemClick}
          />          
          <Menu.Item
            name='rezerwacje'
            active={activeItem === 'rezerwacje'}
            onClick={this.props.handleItemClick}
          /> 
          <Menu.Item
            name='inwestor'
            active={activeItem === 'inwestor'}
            onClick={this.props.handleItemClick}
          />              
        </Menu>       
      </div>
    )
  }
}