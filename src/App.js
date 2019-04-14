import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Analysis from './components/Analysis/Analysis'
import Clients from './components/Clients/Clients'
import Sessions from './components/Sessions/Sessions'
import ClientDetails from './components/Clients/ClientDetails'
import SessionDetails from './components/Sessions/SessionDetails'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path="/" activeStyle={{ color: 'red' }} component={Home}/>
            <Route path='/analysis' activeStyle={{ color: 'red' }} component={Analysis} />
            <Route path='/sessions' activeStyle={{ color: 'red' }} component={Sessions}/>
            <Route path='/clients' activeStyle={{ color: 'red' }} component={Clients}/>
            <Route path='/client/:id' activeStyle={{ color: 'red' }} component={ClientDetails}/>
            <Route path='/session/:id' activeStyle={{ color: 'red' }} component={SessionDetails}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
