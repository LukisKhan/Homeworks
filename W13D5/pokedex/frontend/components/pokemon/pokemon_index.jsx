import React from 'react';

class PokemonIndex extends React.Component {
  constructor (props) {
    super (props);
  }

  render() {
    const pokemons = this.props.pokemon;
    const pokemonList = pokemons.map ( (pokemon)=> {
      let index = Object.keys(pokemon);
      return (<li key={pokemon[index].id}>{pokemon[index].name}
        <img src={pokemon[index].image_url} alt="" width="2%"/>
        </li>)
      });
      
    return <div className="pokemon">
      <ul>
        { pokemonList }
      </ul>
    </div>

  }
  componentDidMount() {
    this.props.requestAllPokemon();
  }

}

export default PokemonIndex;