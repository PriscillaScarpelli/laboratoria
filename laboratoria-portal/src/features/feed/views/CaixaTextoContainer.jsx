import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CaixaEdicaoPage from './CaixaEdicaoPage';
import feedOperations from '../redux/feedOperations';

export class CaixaEdicaoContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <CaixaEdicaoPage />
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      teste: feedOperations.teste
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CaixaEdicaoPage);
