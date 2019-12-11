import React, { Component } from 'react';
import { withStyles, Grid, Typography, Button } from '@material-ui/core';
import DialogModal from '../../../shared/components/dialogModal/DialogModal';
import { tipoBotaoModal, botoesModal, tipoModal } from '../../../shared/constants/modal';
import Auth from '../../auth/Auth';
import { createStyles } from '@material-ui/core/styles';

class TelaInicial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalAberto: false,
      conteudoModal: '',
      tituloModal: '',
      tipoModal: '',
      acoesModal: []
    };
  }

  abrirModal = () => {
    const tituloModal = 'Ainda não possui acesso?';
    const conteudoModal =
      'Caso ainda não tenha sido cadastrado, mande um e-mail para priscillamscarpelli@gmail.com para que seu acesso seja liberado';
    const acoesModal = [
      {
        onClick: this.fecharModal,
        temaBotao: tipoBotaoModal.PRIMARIO,
        textoBotao: botoesModal.FECHAR
      }
    ];

    this.setState({
      modalAberto: true,
      conteudoModal: conteudoModal,
      tituloModal: tituloModal,
      acoesModal: acoesModal,
      tipoModal: tipoModal.SEM_CADASTRO
    });
  };

  fecharModal = () => {
    this.setState({
      modalAberto: false
    });
  };

  render() {
    const { classes } = this.props;
    const { modalAberto, tipoModal, acoesModal, conteudoModal, tituloModal } = this.state;
    return (
      <>
        <div className={classes.container}>
          <Grid
            container
            justify='center'
            direction='column'
            alignContent='center'
            alignItems='center'
            className={classes.item}
          >
            <img src='images/logo.png' alt='' className={classes.logo} />
            <Typography variant='body1' className={classes.textoPrincipal}>
              Bem-vindo ao mural da Laboratoria!
            </Typography>
            <Button onClick={() => Auth.login()} className={classes.botao}>
              Entrar
            </Button>
            <Typography onClick={this.abrirModal} className={classes.textoSecundario}>
              Não possuo cadastro
            </Typography>
          </Grid>
        </div>

        <DialogModal
          aberto={modalAberto}
          titulo={<Typography className={classes[tipoModal]}>{tituloModal}</Typography>}
          conteudo={conteudoModal}
          acoes={acoesModal}
          fecharModal={this.fecharModal}
          tipo={tipoModal}
        />
      </>
    );
  }
}

const textoPadrao = {
  fontFamily: 'Lato',
  color: '#525252',
  textAlign: 'center'
};

const tituloPadrao = {
  fontFamily: 'Lato',
  textAlign: 'center',
  fontSize: 21,
  fontWeight: 'bold'
};

const styles = theme =>
  createStyles({
    container: {
      backgroundImage: `url(${'images/background_telaInicial.jpg'})`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundPosition: 'center',
      height: '100vh',
      backgroundSize: 'cover'
    },
    item: {
      maxWidth: '79vw',
      backgroundColor: '#FFFFFF',
      height: 540,
      width: 430,
      borderRadius: 7,
      padding: '0px 50px',
      [theme.breakpoints.between('xs', 'sm')]: {
        width: 340,
        height: 380
      }
    },
    logo: {
      [theme.breakpoints.up('xs')]: {
        width: 250
      },
      [theme.breakpoints.up('sm')]: {
        width: 300
      },
      [theme.breakpoints.up('md')]: {
        width: 350
      }
    },
    botao: {
      ...textoPadrao,
      height: 55,
      width: 330,
      maxWidth: '56vw',
      borderRadius: 6,
      backgroundColor: '#225086',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,0.19)',
      color: '#FFFFFF',
      margin: '60px 0px 15px 0px',
      '&:hover': {
        backgroundColor: '#002859',
        boxShadow: '0 2px 4px 0 #002859'
      }
    },
    textoPrincipal: {
      ...textoPadrao,
      fontSize: 20,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 15
      },
      paddingTop: '30px'
    },
    textoSecundario: {
      ...textoPadrao,
      fontSize: 16,
      textDecoration: 'underline',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 14
      }
    },
    SEM_CADASTRO: {
      ...tituloPadrao,
      color: '#225086',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: 18
      }
    }
  });

export default withStyles(styles)(TelaInicial);
