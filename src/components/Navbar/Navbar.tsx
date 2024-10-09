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
    <div className='grid grid-cols-[43%_57%] font-chakra mb-10'>
      <h1 className='font-chakra-bold text-8xl drop-shadow-lg text-white'>POKEWEB</h1>

      <div className='flex items-center gap-6'>
        <div className='relative'>
          <Input
            type="text"
            value={inputVal}
            className='w-[405px] h-full relative'
            classNames={{ inputWrapper: ["rounded-none", "text-5xl"] }}
            label="Search For Pokemon"
            onChange={onInputChange}
            onClear={onClear}
            onKeyDown={onKeyDown}
            onFocus={handleOpenSearchBox}
            onBlur={handleOpenSearchBox}
          />

          {
            searchBoxOpen &&
            <div className='absolute bg-white px-4 py-2 w-full z-30'>
              {
                allPokemon && allPokemon.length > 0 ? allPokemon.slice(0, 5).map((pokemon, idx) =>
                  <button key={idx} className='hover:brightness-75 w-full flex items-center gap-4' onClick={() => { setSearchVal(GrabIdFromUrl(pokemon.url)) }}>
                    <img className='w-10' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${GrabIdFromUrl(pokemon.url)}.png`} alt="" />
                    <p>{CapatilizeFirstLetter(pokemon.name)}</p>
                  </button>
                ) : <>No Pokemon Found</>
              }

            </div>
          }

        </div>

        <ButtonComponent type={ButtonType.Search} onClick={searchFunction} />
        <ButtonComponent type={ButtonType.Shuffle} onClick={shuffleFunction} />
        <ButtonComponent type={ButtonType.Favorite} onClick={favoriteFunction} />
      </div>
    </div>
  )
}

export default Navbar