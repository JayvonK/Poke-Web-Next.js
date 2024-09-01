'use client'
import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";

export default function Home() { 
  const [searchVal, setSearchVal] = useState<string>("");
  const [bgClass, setBgClass] = useState<string>("bg-poke-blue");

  const handleSearch = () => {

  }

  const handleShuffle = () => {
    
  }

  const handleFavorite = () => {
    
  }

  return (
    <main className="bg-poke-blue min-h-screen">
      <Navbar searchVal={searchVal} searchFunction={handleSearch} shuffleFunction={handleShuffle} favoriteFunction={handleFavorite}/>
    </main>
  );
}
