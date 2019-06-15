import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './config/routing/Routes';
import NavBar from './components/NavBar';
import Dashboard from './features/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <NavBar />
            </Grid>
            <Grid item xs={12}>
              <Route exact path="/" component={Dashboard} />
              <Route component={Routes} />
            </Grid>
          </Grid>
        </Switch>
      </Router>
    );
  }
}

export default App;
