import { NameUrl } from "@/interfaces/Common";
import { PokeData } from "@/interfaces/PokeData";
import { PokeEncounters } from "@/interfaces/PokeEncounters";
import { PokeEvolution } from "@/interfaces/PokeEvolution";
import { PokeSpecies } from "@/interfaces/PokeSpecies";

const url = 'https://pokeapi.co/api/v2/';

export const grabPokemonData = async (pokeName: string | number) => {
  const promise = await fetch(url + 'pokemon/' + pokeName);
  const data: PokeData = await promise.json();
  return data;
}

export const grabPokeEvolution = async (evolUrl: string) => {
  const promise = await fetch(evolUrl);
  const data: PokeEvolution = await promise.json();
  return data;
}

export const grabPokemonSpecies = async (speciesUrl: string) => {
  const promise = await fetch(speciesUrl);
  const data: PokeSpecies = await promise.json();
  return data;
}

export const grabPokeEncounters = async (pokeName: string | number) => {
  const promise = await fetch(url + 'pokemon/' + pokeName + '/encounters');
  const data: PokeEncounters[] = await promise.json();
  return data;
}

export const grabAllPokemon = async () => {
  const promise = await fetch(url + 'pokemon?limit=1025&offset=0');
  const data: NameUrl[] = await promise.json();
  return data;
}