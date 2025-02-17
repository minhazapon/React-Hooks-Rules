

function StateDetails({ books }) {

    const { id, image, name, details, since, writer, price } = books

    return (
        <div>
            <div className="card bg-base-100 w-96 h-[500px] shadow-xl">
                <figure>
                    <img className=" h-[400px] w-full "
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p> {name} </p>
                    <p> {details} </p>
                    <p> {since} </p>
                    <p> {writer} </p>
                    <p> {price} </p>
                </div>
            </div>
        </div>
    )
}

export default StateDetails
