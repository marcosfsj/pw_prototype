import React from 'react';
import Grid from '@material-ui/core/Grid';
import BaseDataTable from '../components/base/BaseDataTable';
import ButtonBar from '../components/ButtonBar';

export default function Prototype() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <BaseDataTable />
      </Grid>
      <Grid item xs={12}>
        <ButtonBar />
      </Grid>
    </Grid>
  );
}
