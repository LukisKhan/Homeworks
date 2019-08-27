
export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
}

export const selectPokeItems = (state, pokemon) => {
  // debugger;
  return pokemon ? pokemon.item_ids.map(id => state.entities.item[id]) : [];
};
