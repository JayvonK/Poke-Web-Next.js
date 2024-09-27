import { capatilizeFirstLetter } from '@/utils/helpers/HelperFunctions'
import React, { useEffect, useState } from 'react'

const PokeType = (props: { type: string }) => {
  // Example of using typescript's index signature
  const colorClasses: { [key: string]: string } = {
    water: "bg-water",
    normal: "bg-normal",
    fighting: "bg-fighting",
    flying: "bg-flying",
    poison: "bg-poison",
    ground: "bg-ground",
    rock: "bg-rock",
    bug: "bg-bug",
    ghost: "bg-ghost",
    steel: "bg-steel",
    fire: "bg-fire",
    grass: "bg-grass",
    electric: "bg-electric",
    psychic: "bg-psychic",
    ice: "bg-ice",
    dragon: "bg-dragon",
    dark: "bg-dark",
    fairy: "bg-fairy",
    unknown: "bg-unknown",
    shadow: "bg-shadow",
  }

  const [bg, setBg] = useState<string>("")

  useEffect(() => {
    // Using bracket notation because the key is not known ahead of time, dot notation only works when the key is static not dynamic
    const bgColor = colorClasses[props.type] || "bg-gray-200";

    setBg(bgColor);
  }, [props.type])

  return (
    <div className={`px-3 rounded-full ${bg} inline-block text-2xl mb-6`}>
      {capatilizeFirstLetter(props.type)}
    </div>
  )
}

export default PokeType