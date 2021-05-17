// import { Company } from './company';

export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const ADD_USERS = 'ADD_USERS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export interface User {
  id: number;
  name: string;
  email?: string;
  password?: string;
}

export interface UserState {
  users: User[]
}

export interface GetUsersAction {
  type: typeof GET_USERS
  // eslint-disable-next-line @typescript-eslint/ban-types
  payload: {}
}

export interface AddUsersAction {
  type: typeof ADD_USERS
  payload: { users: User[] }
}

export interface AddUserAction {
  type: typeof ADD_USER
  payload: { user: User }
}

export interface UpdateUserAction {
  type: typeof UPDATE_USER
  payload: { user: User }
}

export interface DeleteUserdAction {
  type: typeof DELETE_USER
  payload: { id: string }
}

export type UserActionTypes =
  GetUsersAction
  | AddUsersAction
  | AddUserAction
  | UpdateUserAction
  | DeleteUserdAction;
