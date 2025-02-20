import { useEffect } from "react"
import { useState } from "react"


function Effect() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(` the best number is a ${count} `)
    }, [count])

    return (
        <>
            <div className=" m-20 ">

                <div className=" flex justify-center items-center gap-5  ">
                    <p> count: {count} </p>
                    <button onClick={() => setCount(count + 1)} className=" btn ">Will++</button>
                </div>

            </div>
        </>
    )
}

export default Effect
