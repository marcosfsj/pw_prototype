import React from 'react';
import Grid from '@material-ui/core/Grid';
import SaveButton from '../components/buttons/SaveButton';
import DeleteButton from '../components/buttons/DeleteButton';
import EditButton from '../components/buttons/EditButton';

export default function ButtonsBar() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={1}>
        <SaveButton />
      </Grid>
      <Grid item xs={1}>
        <EditButton />
      </Grid>
      <Grid item xs={1}>
        <DeleteButton />
      </Grid>
    </Grid>
  );
}
