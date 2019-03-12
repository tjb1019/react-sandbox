import React from 'react';

class Team extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'team',
    };
  }

  render() {
    return (
      <h1>My name is {this.state.name}</h1>
    )
  }
}

export default Team;