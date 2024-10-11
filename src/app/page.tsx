'use client'
import Navbar from "@/components/Navbar/Navbar";
import PokeType from "@/components/PokeType/PokeType";
import { NameUrl } from "@/interfaces/Common";
import { PokeData } from "@/interfaces/PokeData";
import { PokeEncounters } from "@/interfaces/PokeEncounters";
import { PokeEvolution } from "@/interfaces/PokeEvolution";
import { PokeSpecies } from "@/interfaces/PokeSpecies";
import { getAllEvolutionIds, GrabEvolutionHelper } from "@/utils/helpers/EvolutionChainFunction";
import { CapatilizeFirstLetter, ConvertPokeHeight, ConvertPokeWeight, DisplayAllEncounters, GrabIdFromUrl } from "@/utils/helpers/HelperFunctions";
import { grabAllPokemon, grabPokeEncounters, grabPokeEvolution, grabPokemonData, grabPokemonSpecies } from "@/utils/services/data-services";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Tooltip } from "@nextui-org/tooltip";
import { useCallback, useEffect, useRef, useState } from "react";
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
  let pastSearch = typeof window === 'undefined' ? "7" : JSON.parse(localStorage.getItem("pastPokeSearch") || "7");
  const [searchVal, setSearchVal] = useState<string>("");
  const [inputVal, setInputVal] = useState<string>("");
  const [bgClass, setBgClass] = useState<string>("bg-poke-white");
  const [pokemonData, setPokemonData] = useState<PokeData>();
  const [evolutionData, setEvolutionData] = useState<PokeEvolution>();
  const [encounterData, setEncounterData] = useState<PokeEncounters[]>();
  const [allPokemons, setAllPokemons] = useState<NameUrl[]>([]);
  const [allPokemonsFiltered, setAllPokemonsFiltered] = useState<NameUrl[]>([]);
  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [isFav, setIsFav] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Using useRef in order to check if page is on initial load (useRef, doesn't cause re-renders like useStates)
  const initialLoad = useRef<boolean>(true);

  // Functions for search input
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputVal(value);
    const filteredArr = allPokemons.filter(poke => poke.name.toLowerCase().includes(value.toLowerCase()));
    setAllPokemonsFiltered(filteredArr);
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  const handleSearch = (val: string = inputVal) => {
    if (val.trim() !== "" && pokemonData && val !== pokemonData.id.toString()) {
      if (!isNaN(Number(val)) && Number(val) > 1025) {
        toast.error("There's only 1025 Pokemon");
      } else {
        setSearchVal(val.toLowerCase());
      }
    }
  }

  const handleClear = () => {
    setInputVal("");
  }
  // End

  const handleShuffle = () => {
    const randomVal = (Math.floor(Math.random() * 1025) + 1).toString();
    handleSearch(randomVal);
  }

  const handleOpenFavorites = () => {
    setIsModalOpen(!isModalOpen);
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
      const data = await grabPokemonData(pokeVal);
      const id = data.id.toString();
      setPokemonData(data);

      const speciesData: PokeSpecies = await grabPokemonSpecies(data.species.url);
      setBgClass(bgColors[speciesData.color.name])

      setIsFav(favArray.includes(id));
      localStorage.setItem("pastPokeSearch", id);

      const evolutionData = await grabPokeEvolution(speciesData.evolution_chain.url);
      setEvolutionData(evolutionData);

      const encounterData = await grabPokeEncounters(id);
      setEncounterData(encounterData);

    } catch (error) {
      toast.error("Pokemon doesn't exist")
    }

    initialLoad.current = false;
  }, [])

  const grabAllPokemons = async () => {
    try {
      const all = await grabAllPokemon();
      setAllPokemons(all.results);
      const filtered = all.results.filter(poke => poke.name.toLowerCase().includes(inputVal.toLowerCase()))
      setAllPokemonsFiltered(filtered);
    } catch (error) {
      toast.error("Sorry, the search function isn't working right now")
    }
  }

  useEffect(() => {
    if (initialLoad.current) {
      grabPokemon(pastSearch);
      grabAllPokemons();
    } else {
      grabPokemon(searchVal);
    }
  }, [searchVal])

  return (
    <main className={`relative`}>

      {/* This is an absolute picture that is centered with the whole screen */}
      <img src="/assets/images/poke ball.png" alt="" className="fixed z-10 left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%] opacity-10 xl:w-[512px] xl:h-[512px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] w-[150px] h-[150px]" />
      <div className={`${bgClass} h-full w-full fixed`}></div>

      <div className="2xl:px-20 md:px-10 px-6 py-8">
        <Navbar
          inputVal={inputVal}
          searchFunction={handleSearch}
          shuffleFunction={handleShuffle}
          favoriteFunction={handleOpenFavorites}
          onInputChange={handleOnChange}
          onClear={handleClear}
          onKeyDown={onKeyDown}
          allPokemon={allPokemonsFiltered}
          setSearchVal={setSearchVal}
        />

        <div className="flex-grow">
          {
            pokemonData &&
            <div className="lg:grid 2xl:grid-cols-[43%_43%_14%] xl:grid-cols-[43%_40%_17%] lg:grid-cols-2 xl:grid-rows-1 lg:grid-rows-2 font-chakra xl:h-[680px] text-white lg:text-2xl text-xl z-20 relative">
              <div className="flex flex-col justify-between xl:pr-10 lg:pr-14 lg:h-full lg:mb-0 mb-8">
                <div className="flex w-full justify-center">
                  <button onClick={handleShinySwitch} className="xl:h-[500px] xl:w-[500px] sm:h-[400px] sm:w-[400px] xs:w-[300px] xs:h-[300px] w-[200px] h-[200px] hover:scale-110">
                    <img src={isShiny ? pokemonData.sprites.other["official-artwork"].front_shiny : pokemonData.sprites?.other["official-artwork"].front_default} alt={"Picture of Pokemon"} className="aspect-square w-full h-full" />
                  </button>

                  <p className="sideways absolute 2xl:-left-10 -left-5 xl:top-[25%] sm:top-[8%] xs:top-[4%] top-0 animate-pulse">Click the pokemon!</p>
                </div>

                <div className="lg:block hidden">
                  <p className="font-chakra-bold mt-4 mb-6">Stats <span className="font-chakra">(hover for EV)</span>:</p>

                  <div className="flex flex-wrap gap-y-6 xl:gap-x-14 gap-x-11">
                    {
                      pokemonData.stats.map((stat, idx) =>
                        <Tooltip showArrow={true} content={stat.effort + ' Effort Points'} placement="top-start" key={idx}>
                          <p className="hover:cursor-default w-fit hover:underline">
                            {stat.stat.name === 'hp' ? stat.stat.name.toUpperCase() : CapatilizeFirstLetter(stat.stat.name)}: {stat.base_stat}
                          </p>
                        </Tooltip>
                      )
                    }
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-6 drop-shadow-lg 2xl:h-[680px] xl:h-[750px] lg:h-[680px] xl:pr-10">
                <p className="font-chakra-bold text-3xl">
                  #{pokemonData.id.toString().padStart(3, '0')}
                </p>

                {isShiny && <img className="absolute -top-2 w-6 left-20" src="/assets/images/stars.png" alt="stars" />}

                <div className="flex gap-4 min-h-12">
                  <h2 className="font-chakra-bold sm:text-5xl text-4xl">
                    {CapatilizeFirstLetter(pokemonData.species.name)}
                  </h2>

                  <button onClick={handleToggleFavorite}>
                    <img src={isFav ? "/assets/images/heart fill.png" : "/assets/images/heart outline.png"} alt="" className={`${isFav ? "h-12" : "h-11"}`} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-x-2">
                  {
                    pokemonData.types.map((type, idx) => {
                      return <PokeType key={idx} type={type.type.name} />
                    })
                  }
                </div>

                <p>
                  <span className="font-chakra-bold">Height:</span> {ConvertPokeHeight(pokemonData.height)}
                </p>

                <p>
                  <span className="font-chakra-bold">Weight:</span> {ConvertPokeWeight(pokemonData.weight)}lbs
                </p>

                <p className="min-h-8 max-h-11 overflow-auto">
                  <span className="font-chakra-bold">Abilities:</span> {CapatilizeFirstLetter(pokemonData.abilities)}
                </p>

                <p className="min-h-8 max-h-20 overflow-auto">
                  <span className="font-chakra-bold">Locations:</span> {encounterData && DisplayAllEncounters(encounterData)}
                </p>

                <p className="flex-grow overflow-auto">
                  <span className="font-chakra-bold">Moves:</span> {CapatilizeFirstLetter(pokemonData.moves)}
                </p>

                <div className="lg:hidden block">
                  <p className="font-chakra-bold mb-6">Stats <span className="font-chakra">(hover for EV)</span>:</p>

                  <div className="flex flex-wrap gap-y-6 xl:gap-x-16 gap-x-11">
                    {
                      pokemonData.stats.map((stat, idx) =>
                        <Tooltip showArrow={true} content={stat.effort + ' Effort Points'} placement="top-start" key={idx}>
                          <p className="hover:cursor-default w-fit hover:underline">
                            {stat.stat.name === 'hp' ? stat.stat.name.toUpperCase() : CapatilizeFirstLetter(stat.stat.name)}: {stat.base_stat}
                          </p>
                        </Tooltip>
                      )
                    }
                  </div>
                </div>
              </div>



              {/* Evolution Chain */}

              <div className="xl:col-span-1 col-span-2 xl:mt-0 mt-12 2xl:h-[680px] xl:h-[750px] h-fit xl:overflow-auto">
                <p className="font-chakra-bold drop-shadow-lg mb-8">Evolution Chain:</p>
                <div className=" flex flex-wrap xl:gap-6 gap-10">
                  {
                    evolutionData && GrabEvolutionHelper(getAllEvolutionIds(evolutionData.chain), handleSearch, isShiny)
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>


      <Modal backdrop="blur" isOpen={isModalOpen} onOpenChange={handleOpenFavorites} size="2xl" classNames={{ body: "bg-black" }}>
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col gap-1">Favorites</ModalHeader>
              <div className="flex flex-wrap px-6 gap-4">
                {
                  favArray.map((fav, idx) =>
                    <button key={idx} onClick={() => { setSearchVal(fav); onClose() }} className="hover:scale-110">
                      <div className='w-full h-full relative'>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fav}.png`}
                          alt={'Picture of pokemon'}
                          className="w-16"
                        />
                      </div>
                    </button>
                  )
                }
              </div>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ div>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
