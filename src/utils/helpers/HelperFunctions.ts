import { PokeAbilities, PokeMoves } from "@/interfaces/PokeData";

export const capatilizeFirstLetter = (word: string | PokeMoves[] | PokeAbilities[]) => {
  if (typeof word === "string") {
    return word[0].toUpperCase() + word.slice(1);
  }

  return word
    .map((m) => {
      if ('move' in m) {
        return m.move.name
          .split("-")
          .map((p) => p[0].toUpperCase() + p.slice(1))
          .join(" ")
      }

      if ('ability' in m) {
        return m.ability.name
          .split('-')
          .map((p) => p[0].toUpperCase() + p.slice(1))
          .join(" ")
      }
    }
    )
    .join(", ");
};
