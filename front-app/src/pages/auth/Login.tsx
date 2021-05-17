import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../redux/actions/auth';

import { User } from '../../types/user';
import auth from '../../services/users';
import firebase from '../../services/firebase';

const Signin: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState({ variant: '', text: '' });

  const dispatch = useDispatch();
  const logInUserAction = (user: User) => dispatch(loginUser(user));

  useEffect(() => {
    let mounted = false;
    // eslint-disable-next-line consistent-return
    const f = async () => {
      if (!mounted) {
        await firebase.checkLogin();
        if (firebase.authenticated) {
          return <Redirect to="/" />;
        }
      }
    };
    f();
    return () => {
      mounted = true;
    };
  }, []);

  const login = async (e: any) => {
    // setLoading(true);
    e.preventDefault();
    if (email === '' || password === '') {
      // setMessage({ variant: 'danger', text: 'Emailとパスワードを入力してください' });
      // setLoading(false);
      return;
    }

    try {
      const token: any = await firebase.login(email, password).catch(() => {});

      localStorage.setItem('token', token.user.za);
      // const user: any = await auth.me();
      // TODO(okubo): mock userなので後で直す
      const user = { id: 1, name: 'okubo', email: 'stmhamachiii@gmail.com' };
      await logInUserAction(user);
      // setLoading(false);
      // setMessage({ variant: 'success', text: 'ユーザー登録が完了しました。ログインしてください！' });
      if (user) {
        setRedirect(true);
      }
    } catch {
      // setMessage({ variant: 'danger', text: 'ログインできませんでした。Emailとパスワードを確認してください。' });
      // setLoading(false);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h2 className="text-center">ログイン</h2>
      <form onSubmit={login}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
  
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-block" type="submit">
          ログイン
        </button>
      </form>
    </>
  );
};

export default Signin;
