import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon, fetchSinglePokemon } from './util/api_util';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors'
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;

});

export default Root;
