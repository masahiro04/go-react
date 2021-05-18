import { User } from './user';

export const CURRENT_USER = 'CURRENT_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export interface UserState {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: {}
}

export interface CurrentUser {
  type: typeof CURRENT_USER
  // eslint-disable-next-line @typescript-eslint/ban-types
  payload: {}
}

export interface LoginUserAction {
  type: typeof LOGIN_USER
  payload: { user: User }
}

export interface LogoutUserAction {
  type: typeof LOGOUT_USER
  // eslint-disable-next-line @typescript-eslint/ban-types
  payload: {}
}

export type UserActionTypes = LoginUserAction | CurrentUser | LogoutUserAction;
