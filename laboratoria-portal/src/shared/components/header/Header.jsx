import React, { Component } from 'react';
import {
  Typography,
  withStyles,
  Grid,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { KeyboardBackspaceRounded, Menu } from '@material-ui/icons';
import history from '../../../shared/router/history';

class Header extends Component {
  state = {
    menuLateralAberto: false,
    codigoLoja: ''
  };

  componentDidMount() {}

  Voltar = async () => {
    const { caminhoVoltar } = this.props;
    history.push(`/${caminhoVoltar}`);
  };

  onClickItemMenu = router => {
    history.push(router);
    this.setState({
      menuLateralAberto: false
    });
  };

  toggleDrawer = open => () => {
    this.setState({
      menuLateralAberto: open
    });
  };

  renderDrawer = classes => {
    return (
      <Grid container spacing={0} direction='column'>
        <Grid container spacing={0} direction='column' className={classes.cabecalhoMenuLateral}>
          <Grid item xs={12}>
            <img className={classes.logo} alt='' src='/images/logo.png' />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.boasVindas}>Riva Investimentos</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0} direction='column' className={classes.listaMenuLateral}>
          <List className={classes.lista} />
        </Grid>
      </Grid>
    );
  };

  renderDrawer = classes => {
    return (
      <Grid container spacing={0} direction='column'>
        <Grid container spacing={0} direction='column' className={classes.cabecalhoMenuLateral}>
          <Grid item xs={12}>
            <img className={classes.logo} alt='' src='/images/logo-branca.png' />
          </Grid>
        </Grid>
        <Grid container spacing={0} direction='column' className={classes.listaMenuLateral}>
          <List className={classes.lista}>
            <ListItem
              className={classes.itemListaPrimario}
              classes={{ root: classes.rootItemLista }}
            >
              <ListItemText
                primary='Carga'
                className={classes.textoItemLista}
                classes={{ root: classes.padding0, primary: classes.textoItemLista }}
              />
            </ListItem>
            <ListItem
              button
              key='Carga Equipe'
              onClick={() => this.onClickItemMenu('/cargaEquipe')}
              className={classes.itemLista}
            >
              <ListItemText
                primary='Carga Equipe'
                className={classes.textoItemLista}
                classes={{ root: classes.padding0, primary: classes.textoItemLista }}
              />
            </ListItem>
            <ListItem
              button
              key='Carga Cliente'
              onClick={() => this.onClickItemMenu('/cargaCliente')}
              className={classes.itemLista}
            >
              <ListItemText
                primary='Carga Cliente'
                className={classes.textoItemLista}
                classes={{ root: classes.padding0, primary: classes.textoItemLista }}
              />
            </ListItem>
            <ListItem
              button
              key='Carga Atividade'
              onClick={() => this.onClickItemMenu('/cargaAtividade')}
              className={classes.itemLista}
            >
              <ListItemText
                primary='Carga Atividade'
                className={classes.textoItemLista}
                classes={{ root: classes.padding0, primary: classes.textoItemLista }}
              />
            </ListItem>
            <ListItem
              button
              key='Carga Captação'
              onClick={() => this.onClickItemMenu('/cargaCaptacao')}
              className={classes.itemLista}
            >
              <ListItemText
                primary='Carga Captação'
                className={classes.textoItemLista}
                classes={{ root: classes.padding0, primary: classes.textoItemLista }}
              />
            </ListItem>
            <ListItem
              button
              key='Carga Receita'
              onClick={() => this.onClickItemMenu('/cargaReceita')}
              className={classes.itemLista}
            >
              <ListItemText
                primary='Carga Receita'
                className={classes.textoItemLista}
                classes={{ root: classes.padding0, primary: classes.textoItemLista }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    );
  };

  render() {
    const { classes, texto, voltar, menuLateral, imagemLogo } = this.props;

    return (
      <div className={classes.w100}>
        <Grid
          container
          spacing={0}
          alignItems='flex-end'
          justify='flex-start'
          className={classes.headerContainer}
        >
          <Grid
            container
            item
            xs={1}
            alignItems='flex-end'
            onClick={menuLateral ? this.toggleDrawer(true) : this.Voltar}
            className={classes.iconeContainer}
          >
            {menuLateral ? (
              <Menu className={classes.icone} />
            ) : voltar ? (
              <KeyboardBackspaceRounded className={classes.icone} />
            ) : (
              <div />
            )}
          </Grid>

          <Grid item xs={5}>
            {!texto && imagemLogo && (
              <img src='/images/logo-branca.png' className={classes.imagemLogo} alt='logo-riva' />
            )}
            {!imagemLogo && texto && <Typography className={classes.texto}>{texto}</Typography>}
          </Grid>
        </Grid>
        {menuLateral && (
          <SwipeableDrawer
            open={this.state.menuLateralAberto}
            onClose={this.toggleDrawer(false)}
            onOpen={this.toggleDrawer(true)}
          >
            <div tabIndex={0} role='button'>
              {this.renderDrawer(classes)}
            </div>
          </SwipeableDrawer>
        )}
      </div>
    );
  }
}

const styles = theme => ({
  w100: {
    width: '100%'
  },
  headerContainer: {
    height: 80,
    backgroundColor: '#11263D'
  },
  texto: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: 24,
    paddingBottom: 10
  },
  iconeContainer: {
    height: 80,
    paddingBottom: 10,
    paddingLeft: 15,
    marginLeft: 9
  },
  icone: {
    color: '#FFFFFF',
    fontSize: '29px'
  },
  cabecalhoMenuLateral: {
    backgroundColor: '#11263D',
    padding: '35px 22px 35px 31px',
    width: '315px'
  },
  logo: {
    width: '250px',
    marginBottom: '5px'
  },
  boasVindas: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: '18px',
    lineHeight: '15px'
  },
  listaMenuLateral: {
    padding: '35px 22px 35px 31px'
  },
  lista: {
    padding: 0
  },
  iconeItemLista: {
    color: '#11263D',
    marginRight: '10px'
  },
  tamanhoIconeMaterial: {
    fontSize: '20px'
  },
  tamanhoIcone: {
    height: '20px',
    width: '20px'
  },
  itemLista: {
    paddingTop: '7.5px',
    paddingBottom: '7.5px'
  },
  rootItemLista: {
    padding: 0,
    paddingBottom: '7.5px'
  },
  padding0: {
    padding: 0
  },
  textoItemLista: {
    color: '#525252',
    fontFamily: 'Lato',
    fontSize: '20px',
    lineHeight: '19px'
  },
  imagemLogo: {
    height: '70px',
    width: '400px'
  }
});

export default withStyles(styles)(Header);
