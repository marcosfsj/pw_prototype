import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import DashboardCard from './dashboard-card';

const propTypes = {};
const defaultProps = {};

class Dashboard extends Component {
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

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;

export default Dashboard;