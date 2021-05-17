import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../redux/actions/auth';
import { User } from '../../types/user';
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
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-5">
            </div>
            <form className="space-y-6" onSubmit={login}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  メール
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
          
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  パスワード
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
          
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    ログイン情報を保持
                  </label>
                </div>
            
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    パスワードをお忘れの方
                  </a>
                </div>
              </div>
          
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  ログイン
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
