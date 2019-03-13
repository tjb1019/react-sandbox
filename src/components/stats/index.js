import React from 'react';

class Stats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'stats',
    };
  }

  render = () => {
    return (
      <h1>My name is {this.state.name}</h1>
    )
  };
}

export default Stats;