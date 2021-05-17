import React from 'react';

import { Provider } from 'react-redux';
import Routes from './navigation/routes';
// import Nav from './pages/Nav';

import Store from './redux/store';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './components/Footer';

import './App.css';

const App: React.FC = () => (
  <Provider store={Store}>
    {/*<Nav />*/}
    <Routes />
    {/*<Footer />*/}
  </Provider>
);

export default App;
