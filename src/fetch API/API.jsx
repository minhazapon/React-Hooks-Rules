
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
            <>
                <div className=" flex justify-center mt-10 ">
                    <div className=" grid  md:grid-cols-4 gap-24 ">
                        <div className=" flex justify-center ">
                            <div className=" border-[1px] ">
                                <img className=" h-[100px] " src={pokemonData.sprites.back_default} alt="" />
                                <p className=" text-center"> {pokemonData.name} </p>
                            </div>
                        </div >

                        <div className=" flex justify-center ">
                            <div className=" border-[1px] ">
                                <img className=" h-[100px] " src={pokemonData.sprites.back_default} alt="" />
                                <p className=" text-center"> {pokemonData.name} </p>
                            </div>
                        </div >

                        <div className=" flex justify-center ">
                            <div className=" border-[1px] ">
                                <img className=" h-[100px] " src={pokemonData.sprites.back_default} alt="" />
                                <p className=" text-center"> {pokemonData.name} </p>
                            </div>
                        </div >

                        <div className=" flex justify-center ">
                            <div className=" border-[1px] ">
                                <img className=" h-[100px] " src={pokemonData.sprites.back_default} alt="" />
                                <p className=" text-center"> {pokemonData.name} </p>
                            </div>
                        </div >

                        <div className=" flex justify-center ">
                            <div className=" border-[1px] ">
                                <img className=" h-[100px] " src={pokemonData.sprites.back_default} alt="" />
                                <p className=" text-center"> {pokemonData.name} </p>
                            </div>
                        </div >

                        <div className=" flex justify-center ">
                            <div className=" border-[1px] ">
                                <img className=" h-[100px] " src={pokemonData.sprites.back_default} alt="" />
                                <p className=" text-center"> {pokemonData.name} </p>
                            </div>
                        </div >
                    </div>
                </div>
            </>
        )
    }
}

export default Api
