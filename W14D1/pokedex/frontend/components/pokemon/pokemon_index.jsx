import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor (props) {
    super (props);
  }
  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    const pokemons = this.props.pokemon;
    console.log('pokemon index render');
    return (
      <ul>
        {pokemons.map(pokemon => <PokemonIndexItem key={pokemon.id} pokemon={pokemon} /> )}
      </ul>
    )
    






    // let pokemonList = <div>empty </div>;
    // const pokemonItems = pokemons.map(poke => (
    //   <PokemonIndexItem key={poke.id} pokemon={poke} />
    // ));
    // const pokemonList = ( 
    // <section className="pokedex">
    //   <ul>{pokemonItems}</ul>
    // </section>); 

    // const pokemonList = pokemons.map ( (pokemon)=> {
    //   let index = Object.keys(pokemon);
    //   return (<li key={pokemon[index].id}>{pokemon[index].name}
    //     <img src={pokemon[index].image_url} alt="" width="2%"/>
    //     </li>)
    // });

    // return <div className="pokemon">
    //   <ul>
    //     { pokemonList }
    //   </ul>
    // </div>
  }


}

export default PokemonIndex;