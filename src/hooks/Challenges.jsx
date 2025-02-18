import { useState } from "react"



function Challenges() {

    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter("")
    }


    return (
        <div className="m-20 ">
            <div className=" border-[1px] border-blue-800  p-10 rounded">
                <p className=" text-center text-6xl font-bold text-black ">UseState Challenge</p>
                <div>
                    <p className=" mt-10 text-xl "> Count: {counter} </p>
                    <div className=" mt-10 flex items-center gap-3 ">
                        <p className=" text-xl ">SetValue:</p>
                        <input className=" border-[1px] border-blue-800 h-[50px] w-full rounded-lg p-5 " placeholder="Value" type="number" />
                    </div>
                </div>
                <div className=" flex justify-between gap-5 items-center mt-14  ">
                    <button onClick={() => handleIncrement()} className=" btn text-white bg-cyan-600 w-[300px] ">Increment</button>
                    <button onClick={() => handleDecrement()} className=" btn text-white bg-cyan-600 w-[300px] ">Decrement</button>
                    <button onClick={handleReset} className=" btn text-white bg-cyan-600 w-[300px] ">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Challenges
