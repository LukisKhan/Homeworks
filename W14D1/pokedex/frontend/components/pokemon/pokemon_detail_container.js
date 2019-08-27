import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];
  return {
    pokemon,
    items: [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }],
    loading: "test"
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const pokemonId = ownProps.match.params.pokemonId;
  return {
    requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
  };
};
// const mapDispatchToProps = {requestSinglePokemon};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);