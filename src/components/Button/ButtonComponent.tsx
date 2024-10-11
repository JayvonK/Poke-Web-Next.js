import { ButtonType } from '@/enums/ButtonEnums'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'

interface ButtonProps {
  type: string
  onClick: () => void
  className?: string
}

const ButtonComponent = ({ type, onClick, className }: ButtonProps) => {
  return (
    <Button className={`bg-black bg-opacity-50 rounded-2xl sm:w-16 sm:h-16 h-14 w-14 p-1 ${className}`} onClick={onClick} isIconOnly>
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
    </Button>
  )
}

export default ButtonComponent