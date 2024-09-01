import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center font-chakra'>
      <h1 className='font-chakra-bold text-[128px] drop-shadow-md text-white'>POKEWEB</h1>
      <input type="text" className='h-[92px] text-3xl px-3 border border-black' placeholder='Search for Pokemon'/>
    </div>
  )
}

export default Navbar