import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// Theme
import theme from './config/theme/theme';

// Store
import store from './store/store';

// Routes
import routes from './config/routing/routes';

// App components
import NavBar from './components/NavBar';
import Dashboard from './features/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <Router>
          <Switch>
            <MuiThemeProvider theme={theme}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <NavBar />
                </Grid>
                <Grid item xs={12}>
                  <Container maxWidth="xl">
                    <Route exact path="/" component={Dashboard} />
                    <Route component={routes} />
                  </Container>
                </Grid>
              </Grid>
            </MuiThemeProvider>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
