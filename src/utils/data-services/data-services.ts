const url = 'https://pokeapi.co/api/v2/';


export const grabPokemonData = async (pokeName: string | number) => {
  const promise = await fetch(url + 'pokemon/' + pokeName);
  const data = await promise.json();
  return data;
}