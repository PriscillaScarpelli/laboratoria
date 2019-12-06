import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const enhancedMiddewares = applyMiddleware(thunk);

const initialState = {};
const store = createStore(rootReducer, initialState, enhancedMiddewares);

export default store;
