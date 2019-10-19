import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import PollutionControl from './Components/PollutionControl/PollutionControl';
import Auth from './Components/Authenticate/Auth';
// redux setup
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/pollution" exact component={PollutionControl} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
