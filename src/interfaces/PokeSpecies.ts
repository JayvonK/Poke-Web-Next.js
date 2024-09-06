import { NameUrl } from "./Common";

export interface PokeSpecies {
  color: NameUrl;
  egg_groups: NameUrl[];
  evolution_chain: {
    url: string;
  }
  evolves_from_species: NameUrl | null;
  flavor_text_entries: {
    flavor_text_entries: string;
    language: NameUrl;
    version: NameUrl;
  }[];
  
}