'use client'
import Navbar from "@/components/Navbar/Navbar";
import { PokeData } from "@/interfaces/PokeData";
import { SquirtleData } from "@/seed/Squirtle";
import { grabPokemonData } from "@/utils/services/data-services";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
    setInputVal("");
  }

  const handleShuffle = () => {

  }

  const handleFavorite = () => {

  }

  const grabPokemon = async (pokeVal: string) => {
    try {
      const data = await grabPokemonData(pokeVal)
      setPokemonData(data);
      console.log(data);
    } catch (error) {
      toast.error("Pokemon doesn't exist")
    }

    initialLoad.current = false;
  }

  useEffect(() => {
    if (initialLoad.current) {
      grabPokemon('squirtle');
    } else {
      grabPokemon(searchVal);
    }
  }, [searchVal])

  return (
    <main className={`${bgClass} min-h-screen px-24 py-8`}>
      <Navbar inputVal={inputVal} searchFunction={handleSearch} shuffleFunction={handleShuffle} favoriteFunction={handleFavorite} onInputChange={handleOnChange} onClear={handleClear} />

      {pokemonData &&
        <div className="grid grid-cols-2">
          <div>
            <img src={pokemonData.sprites.other["official-artwork"].front_default} alt={"Picture of Pokemon"} />
          </div>

          <div className="text-white font-chakra drop-shadow-lg">
            <p className="font-chakra-bold">
              {pokemonData.id}
            </p>

            <h2 className="font-chakra-bold">
              {pokemonData.species.name}
            </h2>

            <p>
              {pokemonData.types[0].type.name              }
            </p>
          </div>
        </div>
      }


    </main>
  );
}
