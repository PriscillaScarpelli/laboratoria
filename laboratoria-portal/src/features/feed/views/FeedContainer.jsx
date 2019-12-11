import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FeedPage from './FeedPage';
import feedOperations from '../redux/feedOperations';

export class FeedContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <FeedPage />
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

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
