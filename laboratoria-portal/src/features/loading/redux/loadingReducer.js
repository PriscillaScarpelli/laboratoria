import * as loadingActions from './loadingActions';

const INITIAL_STATE = {
  carregando: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loadingActions.ALTERAR_ESTADO_BACKDROP_LOADING:
      return {
        ...state,
        carregando: action.payload.carregando
      };

    default:
      return state;
  }
};
