
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

                            <div className=" border-[1px] p-5 bg-blue-50 rounded ">
                                <img className=" h-[300px] " src={pokemonData.sprites.other.dream_world.front_default} alt="" />
                                <p className=" text-center mt-5 text-5xl font-bold text-black"> {pokemonData.name} </p>
                                <div>
                                    <p></p>
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
