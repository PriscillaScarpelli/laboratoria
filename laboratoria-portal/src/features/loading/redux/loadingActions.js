import { action } from 'typesafe-actions';

export const ALTERAR_ESTADO_BACKDROP_LOADING = 'loading/ALTERAR_ESTADO_BACKDROP_LOADING';

export const alterarEstadoBackdropLoading = carregando =>
  action(ALTERAR_ESTADO_BACKDROP_LOADING, {
    carregando
  });
