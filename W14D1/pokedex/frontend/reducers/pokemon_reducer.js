import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let poke;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      console.log("reducer with receive all pokemon action");
      return Object.assign({}, state, action.pokemon);
    //
    case RECEIVE_SINGLE_POKEMON:
      console.log("reducer with receive SINGLE pokemon action");
      poke = action.payload.pokemon;
      // debugger;
      return Object.assign({}, state, { [poke.id]: poke });
    //
    default: 
      return state;
  }
}

export default pokemonReducer;