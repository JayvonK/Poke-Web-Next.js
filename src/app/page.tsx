'use client'
import Navbar from "@/components/Navbar/Navbar";
import PokeType from "@/components/PokeType/PokeType";
import { PokeData } from "@/interfaces/PokeData";
import { SquirtleData } from "@/seed/Squirtle";
import { capatilizeFirstLetter, ConvertPokeHeight, ConvertPokeWeight } from "@/utils/helpers/HelperFunctions";
import { grabPokemonData, grabPokemonSpecies } from "@/utils/services/data-services";
import { Tooltip } from "@nextui-org/tooltip";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const bgColors: { [key: string]: string } = {
    "blue": "bg-poke-blue",
    "red": "bg-poke-red",
    "purple": "bg-poke-purple",
    "black": "bg-poke-black",
    "brown": "bg-poke-brown",
    "gray": "bg-poke-gray",
    "green": "bg-poke-green",
    "pink": "bg-poke-pink",
    "white": "bg-poke-white",
    "yellow": "bg-poke-yellow",
  }
  let favArray: string[] = typeof window === 'undefined' ? [] : JSON.parse(localStorage.getItem("favs") || "[]");
  const [searchVal, setSearchVal] = useState<string>("");
  const [inputVal, setInputVal] = useState<string>("");
  const [bgClass, setBgClass] = useState<string>("bg-poke-white");
  const [pokemonData, setPokemonData] = useState<PokeData>();
  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [isFav, setIsFav] = useState<boolean>(false);

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
    const randomVal = (Math.floor(Math.random() * 500)).toString();
    setSearchVal(randomVal);
  }

  const handleOpenFavorites = () => {

  }

  const handleShinySwitch = () => {
    setIsShiny(!isShiny);
  }

  const handleToggleFavorite = () => {
    const id = pokemonData?.id.toString() || '7';

    !isFav ? favArray.push(id) : favArray.splice(favArray.indexOf(id), 1);
    localStorage.setItem("favs", JSON.stringify(favArray));
    setIsFav(!isFav);
  }

  const grabPokemon = useCallback(async (pokeVal: string) => {
    try {
      const data = await grabPokemonData(pokeVal)
      setPokemonData(data);

      const speciesData = await grabPokemonSpecies(data.id);
      setBgClass(bgColors[speciesData.color.name])

      setIsFav(favArray.includes(data.id.toString()));
    } catch (error) {
      toast.error("Pokemon doesn't exist")
    }

    initialLoad.current = false;
  }, [])

  useEffect(() => {

    if (initialLoad.current) {
      grabPokemon('squirtle');
    } else {
      grabPokemon(searchVal);
    }
  }, [searchVal, grabPokemon])

  return (
    <main className={`${bgClass} min-h-screen px-24 py-8 relative`}>
      {/* This is an absolute picture that is centered with the whole screen */}
      <img src="/assets/images/poke ball.png" alt="" className="fixed z-10 left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%] opacity-5" />

      <Navbar inputVal={inputVal} searchFunction={handleSearch} shuffleFunction={handleShuffle} favoriteFunction={handleOpenFavorites} onInputChange={handleOnChange} onClear={handleClear} />

      {pokemonData &&
        <div className="grid grid-cols-2 font-chakra text-white text-2xl z-20 relative">
          <div>
            <div className="flex w-full justify-center">
              <button onClick={handleShinySwitch} className="h-[500px] w-[500px]">
                <img src={isShiny ? pokemonData.sprites.other["official-artwork"].front_shiny : pokemonData.sprites?.other["official-artwork"].front_default} alt={"Picture of Pokemon"} className="aspect-square w-full h-full" />
              </button>
            </div>

            <p className="font-chakra-bold mb-4">Stats <span className="font-chakra">(hover for EV)</span>:</p>

            <div className="grid grid-cols-3 gap-y-4">
              {
                pokemonData.stats.map((stat, idx) =>
                  <Tooltip showArrow={true} content={stat.effort + ' Effort Points'} placement="top-start" key={idx}>
                    <p className="hover:cursor-default w-fit">
                      {stat.stat.name === 'hp' ? stat.stat.name.toUpperCase() : capatilizeFirstLetter(stat.stat.name)}: {stat.base_stat}
                    </p>
                  </Tooltip>
                )
              }
            </div>

          </div>

          <div className="drop-shadow-lg h-full">
            <p className="font-chakra-bold text-3xl mb-4">
              #{pokemonData.id.toString().padStart(3, '0')}
            </p>

            <div className="flex gap-4 mb-6 min-h-12">
              <h2 className="font-chakra-bold text-[42px]">
                {capatilizeFirstLetter(pokemonData.species.name)}
              </h2>

              <button onClick={handleToggleFavorite}>
                <img src={isFav ? "/assets/images/heart fill.png" : "/assets/images/heart outline.png"} alt="" className={`${isFav ? "h-12" : "h-11"} -mt-3`} />
              </button>
            </div>

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
