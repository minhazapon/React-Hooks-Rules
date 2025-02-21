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



    return (
        <div>

        </div>
    )
}

export default AsyncAwait
