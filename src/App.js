import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

// Store
import store from './store/Store';

// App components
import NavBar from './components/NavBar';
import Dashboard from './features/dashboard/Dashboard';
import Routes from './config/routing/Routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
