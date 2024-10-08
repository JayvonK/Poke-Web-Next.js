import React from "react";
import { PokeEvolve } from "@/interfaces/PokeEvolution";
import { GrabIdFromUrl } from "./HelperFunctions";
import EvolutionComponent from "@/components/EvolutionComponent.tsx/EvolutionComponent";

export const getAllEvolutionIds = (chain: PokeEvolve, pokeIds: string[][] = []) => {
  if (chain.evolves_to.length > 0) {
    chain.evolves_to.forEach((evol) => {
      pokeIds.push([GrabIdFromUrl(chain.species.url), GrabIdFromUrl(evol.species.url)]);
    })
  }

  // Recursively call for all evolves_to
  for (const evol of chain.evolves_to) {
    getAllEvolutionIds(evol, pokeIds);
  }

  return pokeIds;
};

export const GrabEvolutionHelper = (idArray: string[][]): JSX.Element[] => {
  const evolArray: JSX.Element[] = [];

  idArray.forEach((evol, idx) => {
    evolArray.push(
      <EvolutionComponent
        key={idx}
        firstPic={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evol[0]}.png`}
        secondPic={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(evol[1])}.png`} />
    )
  })

  return evolArray;
}

