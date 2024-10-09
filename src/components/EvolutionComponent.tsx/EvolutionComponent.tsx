import { Button } from '@nextui-org/button'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown'
import React from 'react'

const EvolutionComponent = (props: { firstIdx: string, secondIdx: string, evolReq: string, evolClick: (idx: string) => void, isShiny: boolean }) => {
  return (
    <div className='w-full'>
      <div className="flex w-full h-20 items-center justify-between mb-4">
        <Button className="bg-black bg-opacity-50 rounded-full w-20 h-20 p-2 hover:scale-105" isIconOnly onClick={() => { props.evolClick(props.firstIdx) }}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork${props.isShiny ? "/shiny/" : "/"}${props.firstIdx}.png`} alt="" />
        </Button>

        <img className="h-12" src="/assets/images/arrow.png" alt="" />

        <Button className="bg-black bg-opacity-50 rounded-full w-20 h-20 p-2 hover:scale-105" isIconOnly onClick={() => { props.evolClick(props.secondIdx) }}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork${props.isShiny ? "/shiny/" : "/"}${props.secondIdx}.png`} alt="" />
        </Button>
      </div>

      <Dropdown>
        <DropdownTrigger>
          <Button className='bg-black bg-opacity-30'>
            <p className='text-2xl text-white'>Details/Reqs</p>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Evolution Requirements">
          {
            props.evolReq.split(",").map((req, idx) =>
              <DropdownItem key={"Evololution Req No. " + idx}>{req}</DropdownItem>
            )
          }
        </DropdownMenu>
      </Dropdown>
    </div>

  )
}

export default EvolutionComponent