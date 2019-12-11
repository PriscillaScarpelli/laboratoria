import * as loadingOperations from '../../loading/redux/loadingOperation';
import FeedManager from '../feedManager';

class FeedOperations {
  teste = () => async dispatch => {
    try {
    } catch {
      dispatch(loadingOperations.alteraEstadoBackdropLoading(false));
    }
  };
  callbackLoading = callback => async dispatch => {
    dispatch(loadingOperations.alteraEstadoBackdropLoading(false));
  };
}

export default new FeedOperations();
