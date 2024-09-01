import { ButtonType } from '@/enums/ButtonEnums'
import Image from 'next/image'
import React from 'react'

interface ButtonProps {
  type: string
  onClick: () => void
}

const ButtonComponent = ({ type, onClick }: ButtonProps) => {
  return (
    <button className='bg-black bg-opacity-50 rounded-lg w-[92px] h-[92px] relative' onClick={onClick}>
      <Image
        src={
          type === ButtonType.Favorite
            ? '/assets/images/heart outline.png'
            : type === ButtonType.Search
              ? '/assets/images/search icon.png'
              : '/assets/images/shuff icon.png'
        }
        alt={type === ButtonType.Favorite ? 'Heart icon' : type === ButtonType.Search ? 'Search icon' : 'Shuffle icon'}
        fill
      />
    </button>
  )
}

export default ButtonComponent