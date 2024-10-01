'use client'
import Navbar from "@/components/Navbar/Navbar";
import PokeType from "@/components/PokeType/PokeType";
import { PokeData } from "@/interfaces/PokeData";
import { SquirtleData } from "@/seed/Squirtle";
import { capatilizeFirstLetter, ConvertPokeHeight, ConvertPokeWeight } from "@/utils/helpers/HelperFunctions";
import { grabPokemonData } from "@/utils/services/data-services";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [searchVal, setSearchVal] = useState<string>("");
  const [inputVal, setInputVal] = useState<string>("");
  const [bgClass, setBgClass] = useState<string>("bg-poke-blue");
  const [pokemonData, setPokemonData] = useState<PokeData>();
  const [isShiny, setIsShiny] = useState<boolean>(false);
  // Using useRef in order to check if page is on initial load (useRef, doesn't cause re-renders like useStates)
  const initialLoad = useRef<boolean>(true);

  // Functions for search input
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
  // End

  const handleShuffle = () => {

  }

  const handleFavorite = () => {

  }

  const handleShinySwitch = () => {
    setIsShiny(!isShiny);
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
        <div className="grid grid-cols-2 font-chakra">
          <div>
            <button onClick={handleShinySwitch} className="h-[550px] w-[550px]">
              <img src={isShiny ? pokemonData.sprites.other["official-artwork"].front_shiny : pokemonData.sprites.other["official-artwork"].front_default} alt={"Picture of Pokemon"} className="w-full h-full" />
            </button>
          </div>

          <div className="text-white font-chakra drop-shadow-lg text-2xl">
            <p className="font-chakra-bold text-3xl mb-4">
              #{pokemonData.id.toString().padStart(3, '0')}
            </p>

            <h2 className="font-chakra-bold text-[42px] mb-6">
              {capatilizeFirstLetter(pokemonData.species.name)}
            </h2>

            {
              pokemonData.types.map((type, idx) => {
                return <PokeType key={idx} type={type.type.name} />
              })
            }

            <div className="grid grid-flow-row gap-7">
              <p>
                <span className="font-chakra-bold">Height:</span> {ConvertPokeHeight(pokemonData.height)}
              </p>

              <p>
                <span className="font-chakra-bold">Weight:</span> {ConvertPokeWeight(pokemonData.weight)}lbs
              </p>

              <p className="max-h-72 overflow-auto">
                <span className="font-chakra-bold">Abilities:</span> {capatilizeFirstLetter(pokemonData.abilities)}
              </p>

              <p className="max-h-72 overflow-auto">
                <span className="font-chakra-bold">Moves:</span> {capatilizeFirstLetter(pokemonData.moves)}
              </p>
            </div>


          </div>
        </div>
      }

    </main>
  );
}
