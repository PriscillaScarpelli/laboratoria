import { combineReducers } from 'redux';
import loadingReducer from '../features/loading/redux/loadingReducer';
import feedReducer from '../features/feed/redux/feedReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  feed: feedReducer
});
export default rootReducer;
