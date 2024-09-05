import { PokeData } from "@/interfaces/PokeData";
import { PokeEvolution } from "@/interfaces/PokeEvolution";

const url = 'https://pokeapi.co/api/v2/';


export const grabPokemonData = async (pokeName: string | number) => {
  const promise = await fetch(url + 'pokemon/' + pokeName);
  const data: PokeData = await promise.json();
  return data;
}

export const grabPokeEveloution = async (pokeId: number) => {
  const promise = await fetch(url + 'evolution-chain/' + pokeId);
  const data: PokeEvolution = await promise.json();
  return data;
}