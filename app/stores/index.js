import {combineReducers} from 'redux';
import rootSaga from 'app/sagas';
import configureStore from './CreateStore';
import MetaReducer from './Meta/Reducers';

export default () => {
  const rootReducer = combineReducers({
    meta: MetaReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
