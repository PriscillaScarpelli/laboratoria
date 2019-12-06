import * as loadingActions from './loadingActions';

export const alteraEstadoBackdropLoading = carregando => async dispatch => {
  dispatch(loadingActions.alterarEstadoBackdropLoading(carregando));
};
