import { PokeMoves } from "@/interfaces/PokeData";

export const capatilizeFirstLetter = (word: string | PokeMoves[]) => {
  // Grabbing first letter with charAt and making it uppercase, then concatenating the rest of the string using .slice to grab all the letters starting at the index of 1

  if (typeof word === 'string') {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } else {
    let emptyString = "";
    word.forEach(n => {
      let name = n.move.name;
      let cap = name.charAt(0).toUpperCase() + name.slice(1) + ', ';
      emptyString += cap;
    });
    return emptyString;
  }

}