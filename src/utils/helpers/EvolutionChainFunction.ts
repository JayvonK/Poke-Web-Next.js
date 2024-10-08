import { PokeEvolution } from "@/interfaces/PokeEvolution";
import { GrabIdFromUrl } from "./HelperFunctions";

export const GrabEvolutionHelper = (data: PokeEvolution) => {
  const evolArray = [];
  const evolIdx = 1;
  let initPokemonId = GrabIdFromUrl(data.chain.species.url);

  while (data.chain.evolves_to.length >= 1){
    data.chain.evolves_to.forEach((evol) => {
      
    })
  }
}