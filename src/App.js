import React from 'react';

import Menu from './components/menu';
import Team from './components/team';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Team/>
      </div>
    );
  }
}

export default App;
