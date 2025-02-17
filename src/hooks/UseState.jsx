import axios from "axios"
import { useState } from "react"
import StateDetails from "./StateDetails"



function StateHooks() {

    const [books, setBooks] = useState([])

    axios.get(BookData)
        .then((res) => {
            setBooks(res.data)
        })
        .catch(error => {
            console.log(error)
        })


    return (
        <>
            <div className=" m-20 ">


                <div>
                    <div>

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
