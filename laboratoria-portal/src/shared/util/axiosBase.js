import axios from 'axios';
import { Auth } from '../../features/auth';

axios.interceptors.request.use(
  config => {
    const auth = Auth.obtemDadosSessao();
    if (!auth) return config;
    let headers = config.headers ? config.headers : {};
    headers = { ...headers, Authorization: `Bearer ${auth.idToken}`, usuario: auth.email };
    config.headers = headers;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
