import { useEffect, useState } from "react"

function AsyncAwait() {

    const [pokemonData, setPokemonData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
                let result = await data.json()
                setPokemonData(result)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])

    if (loading)
        return
    <p className="text-center font-bold text-8xl text-black">
        Loading...</p>;
    if (error)
        return
    <p>
        Error: {error}
    </p>;

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

export default AsyncAwait
