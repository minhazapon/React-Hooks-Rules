
// pokemon API https://pokeapi.co/api/v2/pokemon/pikachu

import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Api() {

    const [pokemonData, setPokemon] = useState([])

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
            <div className=" flex justify-center ">
                <div className=" ">

                    <img src={pokemonData.sprites.back_default} alt="" />
                    <p> {pokemonData.name} </p>

                </div>

            </div >
        )

    }
}

export default Api
