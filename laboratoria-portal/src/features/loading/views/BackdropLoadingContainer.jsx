import React from 'react';
import { connect } from 'react-redux';
import BackdropLoading from './BackdropLoading';

const BackdropLoadingContainer = props => {
  const { carregando } = props;
  return <BackdropLoading carregando={carregando} />;
};

const mapStateToProps = ({ loading }) => {
  return {
    carregando: loading.carregando
  };
};

export default connect(mapStateToProps)(BackdropLoadingContainer);
