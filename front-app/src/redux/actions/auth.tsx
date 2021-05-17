import * as types from '../../types/auth';
import { User } from '../../types/user';

export function loginUser(user: User): types.UserActionTypes {
  return {
    type: types.LOGIN_USER,
    payload: { user }
  };
}

export function currentUser(): types.UserActionTypes {
  return {
    type: types.CURRENT_USER,
    payload: {}
  };
}

export function logoutUser(): types.UserActionTypes {
  return {
    type: types.LOGOUT_USER,
    payload: {}
  };
}
