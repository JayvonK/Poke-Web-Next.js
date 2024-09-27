'use client'
import Navbar from "@/components/Navbar/Navbar";
import PokeType from "@/components/PokeType/PokeType";
import { PokeData } from "@/interfaces/PokeData";
import { SquirtleData } from "@/seed/Squirtle";
import { capatilizeFirstLetter } from "@/utils/helpers/HelperFunctions";
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
    if (inputVal.trim() !== "") {
      setSearchVal(inputVal);
    }
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
            <p className="font-chakra-bold text-3xl mb-4">
              #{pokemonData.id.toString().padStart(3, '0')}
            </p>

            <h2 className="font-chakra-bold text-5xl mb-6">
              {capatilizeFirstLetter(pokemonData.species.name)}
            </h2>

            {
              pokemonData.types.map((type, idx) => {
                return <PokeType key={idx} type={type.type.name} />
              })
            }

            <p className="text-2xl max-h-72 overflow-auto mb-6">
              <span className="font-chakra-bold">Abilities:</span> {capatilizeFirstLetter(pokemonData.abilities)}
            </p>

            <p className="text-2xl max-h-72 overflow-auto">
              <span className="font-chakra-bold">Moves:</span> {capatilizeFirstLetter(pokemonData.moves)}
            </p>
          </div>
        </div>
      }

    </main>
  );
}
