import React from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { ButtonType } from '@/enums/ButtonEnums'

interface NavbarProps {
  searchVal: string,
  searchFunction: () => void,
  shuffleFunction: () => void,
  favoriteFunction: () => void
}

const Navbar = ({ searchVal, searchFunction, shuffleFunction, favoriteFunction } : NavbarProps) => {
  return (
    <div className='flex items-center font-chakra'>
      <h1 className='font-chakra-bold text-[128px] drop-shadow-md text-white'>POKEWEB</h1>
      <input type="text" value={searchVal} className='h-[92px] text-3xl px-3 border border-black' placeholder='Search for Pokemon'/>
      <ButtonComponent type={ButtonType.Search} onClick={() => {}}/>
    </div>
  )
}

export default Navbar