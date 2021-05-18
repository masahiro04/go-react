import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import firebase from '../services/firebase';
import { loginUser } from '../redux/actions/auth';
// import auth from './services/users';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state, setState] = useState({
    signinCheck: false, // ログインチェックが完了してるか
    signedIn: false, // ログインしてるか
  });

  const dispatch = useDispatch();

  const logInUserAction = (user) => dispatch(loginUser(user));

  useEffect(() => {
    let mounted = false;
    const f = async () => {
      if (!mounted) {
        // ログインしてるかどうかチェック
        const token = await firebase.getUserState().catch(() => {
          setState({
            signinCheck: true,
            signedIn: false,
          });
        });

        localStorage.setItem('token', token?.za);
        // const user = await auth.me();
        // TODO(okubo): user serviceがないのでmockで対応
        const user = { id: 1, name: 'okubo', email: 'stmhamachiii@gmail.com' };

        await logInUserAction(user);

        firebase.authenticated = true;
        setState({
          signinCheck: true,
          signedIn: true,
        });
        await logInUserAction(user?.data);
      }
    };
    f();
    return () => {
      mounted = true;
    };
  }, []);

  return (
    <Route { ...rest } render={ props => {
    if (state.signinCheck) {
      if (firebase.isAuthenticated()) {
        return <Component { ...props } />;
      } else {
        return (
          <Redirect
            to={ {
          pathname: '/login',
        } }
        />
      );
      }
    } else {
      return (
        <div>Loading</div>
      )
    }
  } }
  />
);
}
export default PrivateRoute;
