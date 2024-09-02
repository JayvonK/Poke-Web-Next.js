interface PokeAbilities {
  ability: {
    name: string;
    url: string;
  },
  is_hidden: boolean;
  slot: number;
}

export interface PokeData {
  abilities: PokeAbilities[];
  
}

