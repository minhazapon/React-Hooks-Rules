import axios from "axios"
import { useState } from "react"
import StateDetails from "./StateDetails"



function StateHooks() {

    const [books, setBooks] = useState([])

    axios.get('https://raw.githubusercontent.com/minhazapon/React-Hooks-Rules/refs/heads/main/public/bookData.json')
        .then((res) => {
            setBooks(res.data)
        })
        .catch(error => {
            console.log(error)
        })


    return (
        <>
            <div className=" m-20 ">
                <div className=" flex justify-center ">
                    <div className=" grid  md:grid-cols-3 gap-5 ">
                        {
                            books.map(books => <StateDetails key={books.id} books={books} ></StateDetails>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default StateHooks
