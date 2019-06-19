import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import supplierReducer from './supplierReducer';

const rootReducer = combineReducers({
  profileReducer,
  supplierReducer
});

export default rootReducer;