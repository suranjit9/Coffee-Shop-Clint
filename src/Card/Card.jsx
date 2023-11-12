

const Card = ({ coffee }) => {
    const { coffeename, Quantity, Supplier, Taste, Category, Details, photo } = coffee;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-5">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full pr-5  ">
                    <div>
                    <h2 className="card-title">{coffeename}</h2>
                    <p className="text-left">{Category}</p>
                    <p className="text-left">{Taste}</p>
                    <p className="text-left">{Details}</p>
                    <p className="text-left">{Supplier}</p>
                    <p className="text-left">{Quantity}</p>
                    </div>

                    <div className="card-actions justify-end items-center">
                        <div className="join join-vertical space-y-2">
                            <button className="btn join-item">View</button>
                            <button className="btn join-item">Eidit</button>
                            <button className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;