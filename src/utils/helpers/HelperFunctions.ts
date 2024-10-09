import { PokeAbilities, PokeMoves } from "@/interfaces/PokeData";
import { PokeEncounters } from "@/interfaces/PokeEncounters";

export const CapatilizeFirstLetter = (word: string | PokeMoves[] | PokeAbilities[]) => {
  if (typeof word === "string") {
    if (word.includes("-")) {
      return word
        .split('-')
        .map((p) => p[0].toUpperCase() + p.slice(1))
        .join(" ")
    } else if (word.includes("_")){
      return word
        .split('_')
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

export const GrabIdFromUrl = (url: string) => {
  let res = "";
  let idx = 2;
  while (!isNaN(Number(url[url.length - idx]))) {
    res += url[url.length - idx];
    idx += 1;
  }
  return res.split("").reverse().join("");
}

export const DisplayAllEncounters = (encounterData: PokeEncounters[]) => {
  const encounterArray = encounterData.map(encounter =>
    CapatilizeFirstLetter(encounter.location_area.name)
  );

  return encounterArray.length === 0 ? "N/A" : encounterArray.join(", ")
}
