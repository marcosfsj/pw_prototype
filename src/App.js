import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './components/NavBar';
import Prototype from './features/Prototype';

class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            <Prototype />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
