import React from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { ButtonType } from '@/enums/ButtonEnums'
import { Input } from '@nextui-org/react'

interface NavbarProps {
  searchVal: string,
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClear: () => void,
  searchFunction: () => void,
  shuffleFunction: () => void,
  favoriteFunction: () => void
}

const Navbar = ({ searchVal, searchFunction, shuffleFunction, favoriteFunction, onSearchChange, onClear }: NavbarProps) => {
  return (
    <div className='flex items-center justify-between font-chakra'>
      <h1 className='font-chakra-bold text-8xl drop-shadow-lg text-white'>POKEWEB</h1>

      <div className='flex items-center gap-6'>
        <Input isClearable type="text" value={searchVal} className='w-[405px] h-full' label="Search For Pokemon" onChange={onSearchChange} onClear={onClear}/>

        <ButtonComponent type={ButtonType.Search} onClick={() => { }} />
        <ButtonComponent type={ButtonType.Shuffle} onClick={() => { }} />
        <ButtonComponent type={ButtonType.Favorite} onClick={() => { }} />
      </div>
    </div>
  )
}

export default Navbar