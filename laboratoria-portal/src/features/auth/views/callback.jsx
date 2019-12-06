import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export const callback = () => {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      style={{
        height: window.innerHeight
      }}
    >
      <CircularProgress color='primary' />
    </Grid>
  );
};

export default callback;
