import { ButtonType } from '@/enums/ButtonEnums'
import Image from 'next/image'
import React from 'react'

interface ButtonProps {
  type: string
  onClick: () => void
}

const ButtonComponent = ({ type, onClick }: ButtonProps) => {
  return (
    <button className='bg-black bg-opacity-50 rounded-2xl w-16 h-16 hover:bg-opacity-40 p-1' onClick={onClick}>
      <div className='w-full h-full relative'>
        <Image
          src={
            type === ButtonType.Favorite ? '/assets/images/heart fill 2.png' :
              type === ButtonType.Search ? '/assets/images/search icon.png' :
                '/assets/images/shuffle icon.png'
          }
          alt={type === ButtonType.Favorite ? 'Heart icon' : type === ButtonType.Search ? 'Search icon' : 'Shuffle icon'}
          fill
        />
      </div>
    </button>
  )
}

export default ButtonComponent