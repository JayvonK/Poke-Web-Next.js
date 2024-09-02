import React from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { ButtonType } from '@/enums/ButtonEnums'

interface NavbarProps {
  searchVal: string,
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  searchFunction: () => void,
  shuffleFunction: () => void,
  favoriteFunction: () => void
}

const Navbar = ({ searchVal, searchFunction, shuffleFunction, favoriteFunction, onSearchChange }: NavbarProps) => {
  return (
    <div className='flex items-center justify-between font-chakra'>
      <h1 className='font-chakra-bold text-8xl drop-shadow-lg text-white'>POKEWEB</h1>

      <div className='flex items-center gap-9'>
        <input type="text" value={searchVal} className='h-16 text-3xl px-3 border border-black' placeholder='Search for Pokemon' onChange={onSearchChange} />
        <ButtonComponent type={ButtonType.Search} onClick={() => { }} />
        <ButtonComponent type={ButtonType.Shuffle} onClick={() => { }} />
        <ButtonComponent type={ButtonType.Favorite} onClick={() => { }} />
      </div>
    </div>
  )
}

export default Navbar