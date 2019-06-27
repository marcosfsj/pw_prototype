import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// Theme
import theme from './config/theme/theme';

// Store Provider
import StoreProvider from './utils/store-provider';

// Routes
import routes from './config/routing/routes';

// App components
import NavBar from './components/layout/NavBar';
import Dashboard from './features/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <StoreProvider>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <NavBar />
              </Grid>
              <Grid item xs={12}>
                <Container maxWidth="xl">
                  <Router>
                    <Switch>
                      <Route exact path="/" component={Dashboard} />
                      <Route component={routes} />
                    </Switch>
                  </Router>
                </Container>
              </Grid>
            </Grid>
          </MuiThemeProvider>
      </StoreProvider>
    );
  }
}

export default App;
