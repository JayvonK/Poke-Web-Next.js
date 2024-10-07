import { capatilizeFirstLetter } from '@/utils/helpers/HelperFunctions'
import React, { useEffect, useState } from 'react'

const PokeType = (props: { type: string }) => {
  // Example of using typescript's index signature
  const colorClasses: { [key: string]: string } = {
    water: "bg-poke-water",
    normal: "bg-poke-normal",
    fighting: "bg-poke-fighting",
    flying: "bg-poke-flying",
    poison: "bg-poke-poison",
    ground: "bg-poke-ground",
    rock: "bg-poke-rock",
    bug: "bg-poke-bug",
    ghost: "bg-poke-ghost",
    steel: "bg-poke-steel",
    fire: "bg-poke-fire",
    grass: "bg-poke-grass",
    electric: "bg-poke-electric",
    psychic: "bg-poke-psychic",
    ice: "bg-poke-ice",
    dragon: "bg-poke-dragon",
    dark: "bg-poke-dark",
    fairy: "bg-poke-fairy",
    unknown: "bg-poke-unknown",
    shadow: "bg-poke-shadow",
  }

  const [bg, setBg] = useState<string>("")

  useEffect(() => {
    // Using bracket notation because the key is not known ahead of time, dot notation only works when the key is static not dynamic
    const bgColor = colorClasses[props.type] || "bg-gray-200";

    setBg(bgColor);
  }, [props.type])

  return (
    <div className={`px-3 py-1 rounded-full ${bg} inline-block text-2xl mb-6 drop-shadow-lg w-fit`}>
      <p className='drop-shadow-lg'>{capatilizeFirstLetter(props.type)}</p>
    </div>
  )
}

export default PokeType