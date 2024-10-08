import React from "react";
import { PokeEvolve } from "@/interfaces/PokeEvolution";
import { CapatilizeFirstLetter, GrabIdFromUrl } from "./HelperFunctions";
import EvolutionComponent from "@/components/EvolutionComponent.tsx/EvolutionComponent";

export const getAllEvolutionIds = (chain: PokeEvolve, pokeIds: string[][] = []) => {
  if (chain.evolves_to.length > 0) {
    chain.evolves_to.forEach((evol) => {
      let evolDetails = [];

      pokeIds.push([GrabIdFromUrl(chain.species.url), GrabIdFromUrl(evol.species.url), CapatilizeFirstLetter(evol.evolution_details[0].trigger?.name || 'Unkown')]);
    })
  }

  // Recursively call for all evolves_to
  for (const evol of chain.evolves_to) {
    getAllEvolutionIds(evol, pokeIds);
  }

  return pokeIds;
};

export const GrabEvolutionHelper = (idArray: string[][], evolClick: (idx: string) => void): JSX.Element[] => {
  const evolArray: JSX.Element[] = [];

  if (idArray.length === 0) {
    return [
      <p key={'no evolution key'}>No Evolutions</p>
    ]
  } else {
    idArray.forEach((evol, idx) => {
      evolArray.push(
        <EvolutionComponent
          key={idx}
          firstIdx={evol[0]}
          secondIdx={evol[1]}
          evolReq={evol[2]}
          evolClick={evolClick}
        />
      )
    })

    return evolArray;
  }


}

