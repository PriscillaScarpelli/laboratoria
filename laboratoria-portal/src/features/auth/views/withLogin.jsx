import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Auth from '../Auth';

const withLogin = WrappedComponent => {
  return withRouter(
    class extends Component {
      render() {
        if (Auth.tokenValido()) return <WrappedComponent {...this.props} />;
        return <div />;
      }
    }
  );
};

export default withLogin;
