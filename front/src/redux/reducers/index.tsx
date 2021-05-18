import { combineReducers } from 'redux';
// import groupReducer from './groups';
// import userReducer from './users';
// import boardReducer from './boards';
import authReducer from './auth';

const reducers = combineReducers({
  // group: groupReducer,
  // board: boardReducer,
  // user: userReducer,
  auth: authReducer,
});

export default reducers;
