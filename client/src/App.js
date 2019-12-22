import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Setting from './components/Setting';
import GenerateReport from './components/GenerateReport';
import Report from './components/Report';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route path="/" exact component={Setting} />
            <Route path="/generatereport" component={GenerateReport} />
            <Route path="/report" component={Report} />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
