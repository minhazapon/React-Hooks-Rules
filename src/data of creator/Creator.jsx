import axios from "axios"
import { useState } from "react"
import Details from "./Details"

function Creator() {

    const [creator, setCreator] = useState([])

    axios.get('https://raw.githubusercontent.com/minhazapon/React-Hooks-Rules/refs/heads/main/public/create.json')
        .then(res => {
            setCreator(res.data)
        })
        .catch(error => {
            console.log(error)
        })

    return (
        <>
            <div className=" m-20 ">
                <div>
                    <p className=" text-center text-5xl font-bold text-cyan-700 ">Creator of programming technology</p>
                    <div className=" flex justify-center mt-10 ">
                        <div className=" grid  md:grid-cols-3 gap-6 ">
                            {
                                creator.map(creator => <Details key={creator.id} creator={creator} ></Details>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Creator
