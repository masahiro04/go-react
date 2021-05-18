import * as types from '../../types/auth';

const initialState: types.UserState = { user: {} };

export default function authReducer(state = initialState, action: types.UserActionTypes) {
  switch (action.type) {
    case types.CURRENT_USER:
      return { ...state };
    case types.LOGIN_USER:
      const { user } = action.payload;
      return { ...state, user: user };
    case types.LOGOUT_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};
