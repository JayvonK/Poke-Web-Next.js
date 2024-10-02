import { PokeAbilities, PokeMoves } from "@/interfaces/PokeData";

export const capatilizeFirstLetter = (word: string | PokeMoves[] | PokeAbilities[]) => {
  if (typeof word === "string") {
    if (word.includes("-")) {
      return word
        .split('-')
        .map((p) => p[0].toUpperCase() + p.slice(1))
        .join(" ")
    }
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

export const ConvertPokeHeight = (decimeter: number) => {
  const totalInches = decimeter * 3.93701;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}ft ${inches}in`;
}

export const ConvertPokeWeight = (hectograms: number) => {
  return (hectograms * 0.220462).toFixed(2);
}
