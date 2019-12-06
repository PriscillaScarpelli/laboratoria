import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import store from './store';
import './App.css';
import TelaInicial from './features/geral/views/TelaInicial';
import BackdropLoadingContainer from './features/loading/views/BackdropLoadingContainer';
import CallbackContainer from './features/auth/views/callbackContainer';
import { withLogin } from './features/auth';
import './shared/util/axiosBase';
import history from './shared/router/history';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BackdropLoadingContainer />
        <Router history={history}>
          <Switch>
            <Route path='/' exact={true} component={TelaInicial} />
            <Route exact path='/callback' component={CallbackContainer} />
            {/* <Route path='/cargaEquipe' exact={true} component={withLogin(CargaEquipeContainer)} /> */}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
