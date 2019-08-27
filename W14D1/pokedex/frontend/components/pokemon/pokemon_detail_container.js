import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectPokeItems } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];
  return {
    pokemon,
    items: selectPokeItems(state, pokemon),
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