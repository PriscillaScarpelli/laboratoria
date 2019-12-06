import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Auth from '../Auth';
import Callback from './callback';
import history from '../../../shared/router/history';

export class CallbackContainer extends Component {
  async componentDidMount() {
    Auth.trataAutenticacao(async (autenticado, mensagem) => {
      if (autenticado) {
        history.push('/cargaEquipe');
      } else {
        history.replace('/');
      }
    });
  }

  render() {
    return <Callback />;
  }
}

export default withRouter(CallbackContainer);
