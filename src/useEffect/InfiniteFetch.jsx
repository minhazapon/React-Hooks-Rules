import { useEffect } from "react"
import { useState } from "react"


function Fetch() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('bookData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className=" m-20 flex justify-center ">
            <div className=" grid  md:grid-cols-3 gap-5 ">
                {
                    data.map(allData => <p key={allData.id}>
                        <div>
                            <div>
                                <div className="card bg-base-100 w-96 h-[700px] border-[1px] ">
                                    <figure>
                                        <img
                                            src="https://grihoshaj.com/cdn/shop/files/MiniBookshelf.jpg?v=1696723309"
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <p> {allData.name} </p>
                                        <p> {allData.details} </p>
                                        <p> {allData.since} </p>
                                        <p> {allData.writer} </p>
                                        <p> {allData.price} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    )
}

export default Fetch
