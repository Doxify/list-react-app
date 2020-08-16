import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Lists from './components/lists/Lists';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/lists" component={Lists}/>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }

}

export default App;
