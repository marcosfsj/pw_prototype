import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DashCard from '../../components/dashboard/DashCard';

export default class Dashboard extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <DashCard />
        </Grid>
        <Grid item xs={3}>
          <DashCard />
        </Grid>
        <Grid item xs={3}>
          <DashCard />
        </Grid>
        <Grid item xs={3}>
          <DashCard />
        </Grid>
        <Grid item xs={3}>
          <DashCard />
        </Grid>
        <Grid item xs={3}>
          <DashCard />
        </Grid>
        <Grid item xs={3}>
          <DashCard />
        </Grid>
        <Grid item xs={3}>
          <DashCard />
        </Grid>
      </Grid>
    );
  }
}
