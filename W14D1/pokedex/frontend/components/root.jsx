import PokemonIndexContainer from '../components/pokemon/pokemon_index_container';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from "react-router-dom";
import PokemonDetail from './pokemon/pokemon_detail';
import { log } from 'util';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

console.log("this is in root");
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;
