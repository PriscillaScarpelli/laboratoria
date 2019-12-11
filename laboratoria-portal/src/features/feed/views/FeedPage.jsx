import React from 'react';
import { Grid, withStyles, Link } from '@material-ui/core';
import Header from '../../../shared/components/header/Header';
import styles from './styles/feedStyles';
import CaixaEdicao from './CaixaEdicaoContainer';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class FeedPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Header Logo menuLateral />
        <Grid container className={classes.container}>
          <Grid item md={12} xs={12}>
            <Grid container>
              <CaixaEdicao></CaixaEdicao>
            </Grid>
          </Grid>
          <Grid item md={3} xs={3}>
            <Grid container className={classes.filtro}>
              <Grid item md={6} xs={6}>
                <Link>Público</Link>
              </Grid>
              <Grid item md={6} xs={6}>
                <Link>Amigos</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={9} xs={9}>
            <Grid container className={classes.filtro}>
              <Grid item md={6} xs={6}>
                <Link>Público</Link>
              </Grid>
              <Grid item md={6} xs={6}>
                <Link>Amigos</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(FeedPage);
