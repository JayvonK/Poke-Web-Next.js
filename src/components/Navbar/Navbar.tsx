import React from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { ButtonType } from '@/enums/ButtonEnums'
import { Input } from '@nextui-org/react'

interface NavbarProps {
  inputVal: string,
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClear: () => void,
  searchFunction: () => void,
  shuffleFunction: () => void,
  favoriteFunction: () => void
}

const Navbar = ({ inputVal, searchFunction, shuffleFunction, favoriteFunction, onInputChange, onClear }: NavbarProps) => {
  return (
    <div className='grid grid-cols-2 font-chakra mb-10'>
      <h1 className='font-chakra-bold text-8xl drop-shadow-lg text-white'>POKEWEB</h1>

      <div className='flex items-center gap-6'>
        <div>
          <Input isClearable type="text" value={inputVal} className='w-[405px] h-full' label="Search For Pokemon" onChange={onInputChange} onClear={onClear} />
        </div>

        <ButtonComponent type={ButtonType.Search} onClick={searchFunction} />
        <ButtonComponent type={ButtonType.Shuffle} onClick={shuffleFunction} />
        <ButtonComponent type={ButtonType.Favorite} onClick={favoriteFunction} />
      </div>
    </div>
  )
}

export default Navbar