import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Dashboard/Slider';
import PollutionControl from './Components/PollutionControl/PollutionControl';
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
            <Route path="/" exact component={Slider} />>
            <Route path="/pollution" exact component={PollutionControl} />>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
