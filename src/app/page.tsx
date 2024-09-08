'use client'
import Navbar from "@/components/Navbar/Navbar";
import { PokeData } from "@/interfaces/PokeData";
import { SquirtleData } from "@/seed/Squirtle";
import { grabPokemonData } from "@/utils/data-services/data-services";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() { 
  const [searchVal, setSearchVal] = useState<string>("");
  const [bgClass, setBgClass] = useState<string>("bg-poke-blue");
  const [pokemonData, setPokemonData] = useState<PokeData>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchVal(value);
  }

  const handleSearch = () => {

  }

  const handleClear = () => {
    setSearchVal("");
  }

  const handleShuffle = () => {
    
  }

  const handleFavorite = () => {
    
  }

  const grabPokemon = async () => {
    setPokemonData(await grabPokemonData('squirtle'));
  }

  useEffect(() => {
    grabPokemon();
  }, [])

  return (
    <main className={`${bgClass} min-h-screen px-24 py-8`}>
      <Navbar searchVal={searchVal} searchFunction={handleSearch} shuffleFunction={handleShuffle} favoriteFunction={handleFavorite} onSearchChange={handleOnChange} onClear={handleClear}/>

      {pokemonData && <img src={pokemonData.sprites.other["official-artwork"].front_default} alt={""}/>}
    </main>
  );
}
