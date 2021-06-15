import React, { Component } from 'react';
import './App.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import Password from './components/Password';
import PasswordList from './components/PasswordList';

import { saveState, loadState } from './functions/passwordState'
const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Password />
        <PasswordList />
      </div>
    </Provider>
  );
}

export default App;