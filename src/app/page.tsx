'use client'
import Navbar from "@/components/Navbar/Navbar";
import { PokeData } from "@/interfaces/PokeData";
import { SquirtleData } from "@/seed/Squirtle";
import { grabPokemonData } from "@/utils/data-services/data-services";
import { useEffect, useRef, useState } from "react";

export default function Home() { 
  const [searchVal, setSearchVal] = useState<string>("");
  const [inputVal, setInputVal] = useState<string>("");
  const [bgClass, setBgClass] = useState<string>("bg-poke-blue");
  const [pokemonData, setPokemonData] = useState<PokeData>();
  const initialLoad = useRef<boolean>(true);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputVal(value);
  }

  const handleSearch = () => {
    setSearchVal(inputVal);
  }

  const handleClear = () => {
    setSearchVal("");
  }

  const handleShuffle = () => {
    
  }

  const handleFavorite = () => {
    
  }

  const grabPokemon = async (pokeVal: string) => {
    setPokemonData(await grabPokemonData(pokeVal));
    initialLoad.current = false;
  }

  useEffect(() => {
    if (initialLoad.current){
      grabPokemon('squirtle');
    } else {
      grabPokemon(searchVal);
    }
  }, [searchVal])

  return (
    <main className={`${bgClass} min-h-screen px-24 py-8`}>
      <Navbar inputVal={inputVal} searchFunction={handleSearch} shuffleFunction={handleShuffle} favoriteFunction={handleFavorite} onInputChange={handleOnChange} onClear={handleClear}/>

      {pokemonData?.sprites && <img src={pokemonData.sprites.other["official-artwork"].front_default} alt={"Picture of Pokemon"}/>}
    </main>
  );
}
