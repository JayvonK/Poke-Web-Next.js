import { PokeMoves } from "@/interfaces/PokeData";

export const capatilizeFirstLetter = (word: string | PokeMoves[]) => {
  if (typeof word === "string") {
    return word[0].toUpperCase() + word.slice(1);
  }

  return word
    .map((m) =>
      m.move.name
        .split("-")
        .map((p) => p[0].toUpperCase() + p.slice(1))
        .join(" ")
    )
    .join(", ");
};
