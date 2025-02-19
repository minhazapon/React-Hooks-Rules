


function Details({ creator }) {

    const { name, technology, details, university, since, country } = creator

    return (
        <>
            <div>
                <div className="card bg-base-100 w-96 h-[700px] border-[1px] ">
                    <figure>
                        <img
                            src="https://techsteamcenter.com/wp-content/uploads/2023/08/computer-language.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"> name: {name} </h2>
                        <h2 className="card-title"> name: {technology} </h2>
                        <p className=" mt-3 ">details: {details} </p>
                        <p className=" mt-3 ">university: {university} </p>
                        <p className=" mt-3 ">since: {since} </p>
                        <p className=" mt-3 ">country: {country} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
