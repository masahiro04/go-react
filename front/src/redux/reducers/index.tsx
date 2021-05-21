import { combineReducers } from 'redux';
// import groupReducer from './groups';
// import userReducer from './users';
// import boardReducer from './boards';
import authReducer from './auth';
import blogReducer from './blogs';

const reducers = combineReducers({
  // group: groupReducer,
  // board: boardReducer,
  blog: blogReducer,
  auth: authReducer,
});

export default reducers;
