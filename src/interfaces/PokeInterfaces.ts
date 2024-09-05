interface PokeAbilities {
  ability: {
    name: string;
    url: string;
  },
  is_hidden: boolean;
  slot: number;
}

interface PokeMoves {
  move: {
    name: string;
    url: string;
  }
}

interface PokeType {
  type: {
    name: string;
    url: string;
  }
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
  moves: PokeMoves[];
  sprites: PokeSprites;
  species: {
    name: string;
    url: string;
  }
  types: PokeType[];
  weight: number;
}
