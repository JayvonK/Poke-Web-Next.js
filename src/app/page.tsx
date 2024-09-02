'use client'
import Navbar from "@/components/Navbar/Navbar";
import { grabPokemonData } from "@/utils/data-services/data-services";
import { useEffect, useState } from "react";

export default function Home() { 
  const [searchVal, setSearchVal] = useState<string>("");
  const [bgClass, setBgClass] = useState<string>("bg-poke-blue");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchVal(value);
  }

  const handleSearch = () => {

  }

  const handleShuffle = () => {
    
  }

  const handleFavorite = () => {
    
  }

  const grabPokemon = async () => {
    return await grabPokemonData('squirtle');
  }

  useEffect(() => {
  }, [])

  return (
    <main className={`${bgClass} min-h-screen px-24 py-8`}>
      <Navbar searchVal={searchVal} searchFunction={handleSearch} shuffleFunction={handleShuffle} favoriteFunction={handleFavorite} onSearchChange={handleOnChange}/>
    </main>
  );
}
