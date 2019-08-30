import React, { Component } from 'react'
import { connect } from 'react-redux'


import history from '../history'
import { Menu } from 'semantic-ui-react'
import { editState } from '../actions/appState'
import { fetchPages } from '../actions/pages'


class BottomMenu extends Component {

  componentDidMount() {
    this.props.fetchPages()
  }

  handleClick(activeItem, id) {
    this.props.editState(activeItem, 'activeItem')
    history.push(`/${id}`)
  }

  renderMenu() {
    const pages = this.props.pages
    if (this.props.appState.loading === 'false')
      return pages.map(page => {
        return <Menu.Item
          key={page.id}
          name={page.title}
          active={page.title === this.props.appState.activeItem}
          onClick={() => this.handleClick(page.title, page.id)}
        />
      })

    return <Menu.Item
      name={'Loading...'}
    />
  }

  render() {

    return (
      <div className='menuBottom'>
        <Menu style={{ height: '7vh' }} color={'green'}>
          {this.renderMenu()}
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: Object.values(state.pages),
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState, fetchPages })(BottomMenu)