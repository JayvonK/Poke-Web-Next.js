interface NameUrl {
  name: string;
  url: string;
}

interface EvolutionDetails {
  gender: number | null;
  held_item: NameUrl | null;
  item: NameUrl | null;
  known_move: NameUrl | null;
  known_move_type: NameUrl | null;
  location: NameUrl | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number | null;
  needs_overworld_rain: boolean | null;
  party_species: NameUrl | null;
  party_type: NameUrl | null;
  relative_physical_stats: number | null;
  time_of_day: string | null;
  trade_species: NameUrl | null;
  trigger: NameUrl | null;
  turn_upside_down: boolean | null;
}

interface PokeEvolve {
  evolution_details: EvolutionDetails[];
  evolves_to: PokeEvolve[] | [];
  species: NameUrl;
}

export interface PokeEvolution {
  id: number;
  chain: PokeEvolve;
}