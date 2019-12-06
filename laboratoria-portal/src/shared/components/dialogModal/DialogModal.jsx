import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { tipoBotaoModal, tipoModal } from '../../../shared/constants/modal';
import { Grid } from '@material-ui/core';

const DialogModalAcoes = ({ acao, classes, data }) => {
  let temaBotao;
  if (acao.temaBotao === tipoBotaoModal.PRIMARIO) {
    temaBotao = classes.botaoPrimario;
  } else if (acao.temaBotao === tipoBotaoModal.SECUNDARIO) {
    temaBotao = classes.botaoSecundario;
  }
  return (
    <>
      {(acao.temaBotao === tipoBotaoModal.PRIMARIO ||
        acao.temaBotao === tipoBotaoModal.SECUNDARIO) && (
        <Button className={temaBotao} onClick={acao.onClick}>
          {acao.textoBotao}
        </Button>
      )}
    </>
  );
};

class DialogModal extends Component {
  defineIcone = () => {
    const { classes } = this.props;
    switch (this.props.tipo) {
      case tipoModal.UPLOAD_SUCESSO:
        return <img className={classes.icone} alt='' src={require('../../icones/sucesso.svg')} />;
      case tipoModal.SEM_CONEXAO:
        return (
          <img className={classes.icone} alt='' src={require('../../icones/nao-salvo-17.svg')} />
        );
      default:
        return;
    }
  };

  render() {
    return (
      <Dialog open={this.props.aberto} onClose={this.props.fecharModal} disableBackdropClick>
        <div className={this.props.classes.conteudoContainer}>
          <div className={this.props.classes.divIcone}>{this.defineIcone()}</div>
          <DialogTitle
            disableTypography={true}
            style={{ padding: '0px 60px', paddingBottom: '0px' }}
          >
            {this.props.titulo}
          </DialogTitle>
          <DialogContent style={{ padding: '20px 40px' }}>
            <DialogContentText className={this.props.classes.textoConteudo}>
              {this.props.conteudo}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Grid container direction='row' justify='flex-end' alignItems='center'>
              {this.props.acoes &&
                this.props.acoes.map((acao, i) => (
                  <Grid key={i} item style={{ paddingRight: '20px' }}>
                    <DialogModalAcoes
                      classes={this.props.classes}
                      key={i}
                      acao={acao}
                      data={this.props.data}
                    />
                  </Grid>
                ))}
            </Grid>
          </DialogActions>
        </div>
      </Dialog>
    );
  }
}

const textoPadrao = {
  align: 'center',
  fontFamily: 'Lato'
};

const botaoPadrao = {
  height: 40,
  width: 90,
  borderRadius: 17,
  fontFamily: 'Lato',
  fontSize: 16,
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.19)'
};

const styles = theme => ({
  conteudoContainer: {
    width: 450,
    paddingBottom: '20px'
  },
  textoConteudo: {
    fontFamily: textoPadrao.fontFamily,
    textAlign: textoPadrao.align,
    fontSize: 16
  },
  erro: {
    color: '#FFFFFF'
  },
  botaoSecundario: {
    borderRadius: botaoPadrao.borderRadius,
    fontSize: botaoPadrao.fontSize,
    fontFamily: textoPadrao.fontFamily,
    textAlign: textoPadrao.align,
    color: '#525252',
    border: '1px solid #CBCBCB',
    padding: '8px 10px'
  },
  botaoPrimario: {
    borderRadius: botaoPadrao.borderRadius,
    fontSize: botaoPadrao.fontSize,
    fontFamily: textoPadrao.fontFamily,
    textAlign: textoPadrao.align,
    color: '#FFFFFF',
    backgroundColor: '#225086',
    padding: '8px 25px',
    '&:hover': {
      backgroundColor: '#002859'
    }
  },
  divIcone: {
    padding: 0,
    margin: 0,
    marginTop: 25,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icone: {
    height: 120
  },
  iconeCadastro: {
    color: '#DA974A',
    height: 70,
    width: 70,
    margin: '35px 0px 25px 0px'
  }
});

export default withStyles(styles)(DialogModal);
