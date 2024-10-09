import React from "react";
import { PokeEvolve } from "@/interfaces/PokeEvolution";
import { CapatilizeFirstLetter, GrabIdFromUrl } from "./HelperFunctions";
import EvolutionComponent from "@/components/EvolutionComponent.tsx/EvolutionComponent";
import { EvolutionDetails } from "@/interfaces/PokeEvolution";

export const getAllEvolutionIds = (chain: PokeEvolve, pokeIds: string[][] = []) => {
  if (chain.evolves_to.length > 0) {
    chain.evolves_to.forEach((evol) => {
      let trigger = "Unknown";
      if (evol.evolution_details.length > 0 && evol.evolution_details[0] !== null) {
        const trigObj: EvolutionDetails = evol.evolution_details[0];
        let trigArray: string[] = [];
        for (const key in trigObj) {
          const val = trigObj[key as keyof EvolutionDetails];
          if (val !== null && val !== false && val !== "") {
            if (typeof val === 'object' && 'name' in val) {
              trigArray.push(`${CapatilizeFirstLetter(key)}: ${CapatilizeFirstLetter(val.name)}`)
            } else {
              trigArray.push(`${CapatilizeFirstLetter(key)}: ${typeof val === 'string' ? CapatilizeFirstLetter(val) : val}`)
            }
          }
        }

        if(trigArray.length > 0){
          trigger = trigArray.join(", ");
        }
      }

      pokeIds.push([GrabIdFromUrl(chain.species.url), GrabIdFromUrl(evol.species.url), trigger]);
    })
  }

  // Recursively call for all evolves_to
  for (const evol of chain.evolves_to) {
    getAllEvolutionIds(evol, pokeIds);
  }

  return pokeIds;
};

export const GrabEvolutionHelper = (idArray: string[][], evolClick: (idx: string) => void, isShiny: boolean): JSX.Element[] => {
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
          isShiny={isShiny}
        />
      )
    })

    return evolArray;
  }


}

