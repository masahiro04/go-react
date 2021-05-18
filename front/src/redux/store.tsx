import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import Reducers from './reducers/index';

const middleware = applyMiddleware(thunk);

// 毎回localStorageに保存
function saveToLocalStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

// リフレッシュしたらlocalStorageから取得
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
  Reducers,
  persistedState,
  middleware
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
