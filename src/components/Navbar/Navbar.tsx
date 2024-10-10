import React, { Dispatch, SetStateAction, useState } from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { ButtonType } from '@/enums/ButtonEnums'
import { Autocomplete, Input } from '@nextui-org/react'
import { NameUrl } from '@/interfaces/Common'
import { CapatilizeFirstLetter, GrabIdFromUrl } from '@/utils/helpers/HelperFunctions'

interface NavbarProps {
  inputVal: string,
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClear: () => void,
  searchFunction: () => void,
  shuffleFunction: () => void,
  favoriteFunction: () => void,
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  allPokemon: NameUrl[];
  setSearchVal: Dispatch<SetStateAction<string>>,
}

const Navbar = ({ inputVal, searchFunction, shuffleFunction, favoriteFunction, onInputChange, onClear, onKeyDown, allPokemon = [], setSearchVal }: NavbarProps) => {

  const [searchBoxOpen, setSearchBoxOpen] = useState<boolean>(false);

  let blurTime: ReturnType<typeof setTimeout>;

  const handleOpenSearchBox = () => {
    if (searchBoxOpen) {
      let blurTime = setTimeout(() => {
        setSearchBoxOpen(false);
      }, 250)
    } else if (!searchBoxOpen) {
      clearTimeout(blurTime);
      setSearchBoxOpen(true);
    }
  }

  return (
    <div className='grid xl:grid-cols-[43%_57%] lg:grid-cols-2 font-chakra mb-10'>
      <div className='lg:block flex items-center justify-between xl:mb-0 mb-4'>
        <h1 className='font-chakra-bold xl:text-8xl lg:text-[90px] text-7xl drop-shadow-lg text-white'>POKEWEB</h1>

        <div className='lg:hidden md:flex hidden relative gap-4'>
          <Input
            type="text"
            value={inputVal}
            className='w-[240px] h-full relative'
            classNames={{ inputWrapper: ["rounded-none", "text-5xl", "h-[64px]", searchBoxOpen ? "rounded-t-2xl" : "rounded-2xl"] }}
            label="Search For Pokemon"
            onChange={onInputChange}
            onClear={onClear}
            onKeyDown={onKeyDown}
            onFocus={handleOpenSearchBox}
            onBlur={handleOpenSearchBox}
          />

          {
            searchBoxOpen &&
            <div className='absolute w-full z-30 rounded-b-2xl'>
              {
                allPokemon && allPokemon.length > 0 ? allPokemon.slice(0, 5).map((pokemon, idx) =>
                  <button key={idx} className={`hover:brightness-75 w-full flex items-center gap-4 bg-white px-4 py-2 ${(idx === allPokemon.slice(0, 5).length - 1) && 'rounded-b-2xl'}`} onClick={() => { setSearchVal(GrabIdFromUrl(pokemon.url)) }}>
                    <img className='w-10' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${GrabIdFromUrl(pokemon.url)}.png`} alt="" />
                    <p>{CapatilizeFirstLetter(pokemon.name)}</p>
                  </button>
                ) :
                  <div className={`hover:brightness-75 w-full flex items-center gap-4 bg-white px-4 py-2 rounded-b-2xl`}>
                    <p>No Pokemon Found</p>
                  </div>
              }

            </div>
          }

          <ButtonComponent type={ButtonType.Search} onClick={searchFunction} />

        </div>
      </div>

      <div className='w-full flex items-center lg:justify-start xl:gap-6 gap-4'>
        <div className='lg:block md:hidden block relative'>
          <Input
            type="text"
            value={inputVal}
            className='xl:w-[405px] lg:w-[225px] sm:w-[300px] w-[200px] h-full relative'
            classNames={{ inputWrapper: ["rounded-none", "text-5xl", "h-[64px]", searchBoxOpen ? "rounded-t-2xl" : "rounded-2xl"] }}
            label="Search For Pokemon"
            onChange={onInputChange}
            onClear={onClear}
            onKeyDown={onKeyDown}
            onFocus={handleOpenSearchBox}
            onBlur={handleOpenSearchBox}
          />

          {
            searchBoxOpen &&
            <div className='absolute w-full z-30 rounded-b-2xl'>
              {
                allPokemon && allPokemon.length > 0 ? allPokemon.slice(0, 5).map((pokemon, idx) =>
                  <button key={idx} className={`hover:brightness-75 w-full flex items-center gap-4 bg-white px-4 py-2 ${(idx === allPokemon.slice(0, 5).length - 1) && 'rounded-b-2xl'}`} onClick={() => { setSearchVal(GrabIdFromUrl(pokemon.url)) }}>
                    <img className='w-10' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${GrabIdFromUrl(pokemon.url)}.png`} alt="" />
                    <p>{CapatilizeFirstLetter(pokemon.name)}</p>
                  </button>
                ) :
                  <div className={`hover:brightness-75 w-full flex items-center gap-4 bg-white px-4 py-2 rounded-b-2xl`}>
                    <p>No Pokemon Found</p>
                  </div>
              }

            </div>
          }

        </div>

        <div className='flex xl:gap-6 gap-4 lg:w-fit w-full lg:justify-start justify-end'>
          <ButtonComponent type={ButtonType.Search} onClick={searchFunction} className='lg:block md:hidden block' />
          <ButtonComponent type={ButtonType.Shuffle} onClick={shuffleFunction} />
          <ButtonComponent type={ButtonType.Favorite} onClick={favoriteFunction} />
        </div>


      </div>
    </div>
  )
}

export default Navbar