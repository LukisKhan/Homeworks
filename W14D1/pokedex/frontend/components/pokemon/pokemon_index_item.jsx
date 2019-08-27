import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li className="PokemonIndexItem">
      <Link to={`/pokemon/${pokemon.id}`}>
        <div>{pokemon.id}</div>
        <img src={pokemon.image_url} alt={pokemon.name} width="2%"/>
        <span>{pokemon.name}</span>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;



