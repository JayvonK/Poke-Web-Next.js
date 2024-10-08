import { Button } from '@nextui-org/button'
import React from 'react'

const EvolutionComponent = (props: { firstIdx: string, secondIdx: string, evolReq: string, evolClick: (idx: string) => void}) => {
  return (
    <div className='w-full'>
      <div className="flex w-full h-20 items-center justify-between">
        <Button className="bg-black bg-opacity-50 rounded-full w-20 h-20 p-2 hover:scale-105" isIconOnly onClick={() => { props.evolClick(props.firstIdx) }}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.firstIdx}.png`} alt="" />
        </Button>

        <img className="h-12" src="/assets/images/arrow.png" alt="" />

        <Button className="bg-black bg-opacity-50 rounded-full w-20 h-20 p-2 hover:scale-105" isIconOnly onClick={() => { props.evolClick(props.secondIdx) }}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.secondIdx}.png`} alt="" />
        </Button>
      </div>

      <p className='text-xl pt-4'>Req: {props.evolReq}</p>

    </div>

  )
}

export default EvolutionComponent