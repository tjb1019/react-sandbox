import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './components/menu';
import Team from './components/team';
import Stats from './components/stats';
import NotFound from './404';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/menu" component={Menu}/>
          <Route path="/team" component={Team}/>
          <Route path="/stats" component={Stats}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
