
// pokemon API https://pokeapi.co/api/v2/pokemon/pikachu

import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Api() {

    const [pokemonData, setPokemon] = useState(null)

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(res => {
                setPokemon(res.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    if (pokemonData) {
        return (
            <>
                <div className=" ">
                    <div className=" ">
                        <div className=" flex justify-center mt-10 ">
                            <div className=" border-[1px] p-5 bg-blue-50 rounded h-[500px] w-[400px] ">
                                <div className=" flex justify-center">
                                    <img className=" h-[300px] " src={pokemonData.sprites.other.dream_world.front_default} alt="" />
                                </div>
                                <p className=" text-center mt-5 text-5xl font-bold text-black"> {pokemonData.name} </p>
                                <div className=" flex justify-center items-center gap-5 mt-5 ">
                                    <p className=" border-[1px] p-2 bg-green-300 rounded-md ">base_stat: {pokemonData.stats[5].base_stat} </p>
                                    <p className=" border-[1px] p-2 bg-green-300 rounded-md ">effort: {pokemonData.stats[5].effort} </p>
                                    <p className=" border-[1px] p-2 bg-green-300 rounded-md ">name: {pokemonData.stats[5].stat.name} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Api
