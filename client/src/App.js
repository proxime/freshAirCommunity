import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import PollutionControl from './Components/PollutionControl/PollutionControl';
import Auth from './Components/Authenticate/Auth';
import Profile from './Components/Profile/Profile';
// redux setup
import { Provider } from 'react-redux';
import { getUser } from './actions/auth';
import store from './store';

function App() {
  useEffect(() => {
    store.dispatch(getUser())
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/pollution" exact component={PollutionControl} />
            <Route path="/auth" component={Auth} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
