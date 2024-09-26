import { NameUrl } from "./Common";

interface PokeAbilities {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
}

export interface PokeMoves {
  move: NameUrl;
}

interface PokeType {
  type: NameUrl;
}

interface PokeStats {
  base_stat: number;
  effort: number;
  stat: NameUrl;
}

interface PokeSprites {
  other: {
    ["official-artwork"]: {
      front_default: string;
      front_shiny: string;
    }
  },
  versions: {
    ["generation-v"]: {
      ["black-white"]: {
        animated: {
          front_default: string;
        }
      }
    }
  }
}

export interface PokeData {
  abilities: PokeAbilities[];
  height: number;
  id: number;
  moves: PokeMoves[];
  sprites: PokeSprites;
  species: NameUrl;
  stats: PokeStats[];
  types: PokeType[];
  weight: number;
}
