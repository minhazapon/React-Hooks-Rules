import { useEffect, useState } from "react"


function Clean() {

    const [clean, setClean] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setClean((times) => times + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className=" flex justify-center mt-10 ">
            <p> TimeIs: {clean} </p>
        </div>
    )
}

export default Clean
