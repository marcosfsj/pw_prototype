import React from 'react';
import Grid from '@material-ui/core/Grid';
import SaveButton from '../components/SaveButton';
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';

export default function Prototype() {
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
