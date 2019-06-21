import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import DashboardCard from './dashboard-card';

class Dashboard extends Component {

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <DashboardCard />
        </Grid>
        <Grid item xs={3}>
          <DashboardCard />
        </Grid>
        <Grid item xs={3}>
          <DashboardCard />
        </Grid>
        <Grid item xs={3}>
          <DashboardCard />
        </Grid>
        <Grid item xs={3}>
          <DashboardCard />
        </Grid>
        <Grid item xs={3}>
          <DashboardCard />
        </Grid>
        <Grid item xs={3}>
          <DashboardCard />
        </Grid>
        <Grid item xs={3}>
          <DashboardCard />
        </Grid>
      </Grid>
    );
  }
}

export default Dashboard;