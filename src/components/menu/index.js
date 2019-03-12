import React from 'react';

import annLogo from '../../images/ann-logo.jpg';

class Menu extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: 'menu',
    };
  }

  showAlert = (name) => {
    alert(`hello, ${name}`);
  };

  render = () => {
    return (
      <button onClick={() => this.showAlert(this.props.name)}>
        <img src={annLogo} alt="test logo"/>
      </button>
    );
  }
}

Menu.defaultProps = {name: 'tyler'};

export default Menu;