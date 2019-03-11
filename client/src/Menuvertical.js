import React, { Component } from 'react';

import { Container,Grid, Placeholder, Menu, Segment } from 'semantic-ui-react'

//import './Menu.css';



class Menuvertical extends Component {

  constructor(props) {
    super(props);
  }

  state = {activeItem: 'Descartes'}
  handleItemClick = (e, {name}) =>


      this.setState({activeItem: name})


  render()

  {

    const { activeItem } = this.state
return(


    <Menu pointing vertical>
    <Menu.Item name='Descartes' active={activeItem === 'Descartes'} onClick={this.handleItemClick} />
    <Menu.Item name='Graphs' active={activeItem === 'Graphs'} onClick={this.handleItemClick} />
    <Menu.Item
    name='Resources'
    active={activeItem === 'Resources'}
    onClick={this.handleItemClick}
    />
    <Menu.Item
        name='Links'
        active={activeItem === 'Links'}
        onClick={this.handleItemClick}
    />
    </Menu>


  )
      } // render slut..
}
export default Menuvertical;



