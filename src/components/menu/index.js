import React from 'react';

class Menu extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: 'menu',
    };
  }

  render = () => {
    return (
      <h1>My name is {this.state.name}</h1>
    );
  }
}

export default Menu;