import { Button } from '@nextui-org/button'
import React from 'react'

const EvolutionComponent = (props: {firstPic: string, secondPic: string}) => {
  return (
    <div className="flex w-full h-20 items-center justify-between">
      <Button className="bg-black bg-opacity-50 rounded-full w-20 h-20 p-2 hover:scale-105" isIconOnly onClick={() => { }}>
        <img src={props.firstPic} alt="" />
      </Button>

      <img className="h-12" src="/assets/images/arrow.png" alt="" />

      <Button className="bg-black bg-opacity-50 rounded-full w-20 h-20 p-2 hover:scale-105" isIconOnly onClick={() => { }}>
        <img src={props.secondPic} alt="" />
      </Button>
    </div>
  )
}

export default EvolutionComponent