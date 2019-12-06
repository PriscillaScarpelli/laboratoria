import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';

export class BackdropLoading extends Component {
  render() {
    const { carregando, classes } = this.props;
    return (
      <Grid
        container
        alignItems='center'
        justify='center'
        className={
          carregando ? classes.container : [classes.container, classes.displayNone].join(' ')
        }
      >
        <Grid item>
          <img src='/images/loading.gif' alt='loading' />
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255,255,255,0.8)',
    position: 'fixed',
    top: 0,
    zIndex: 9999
  },
  displayNone: {
    display: 'none'
  }
});

export default withStyles(styles)(BackdropLoading);
