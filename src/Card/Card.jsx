import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const Card = ({ coffee }) => {
    const { _id, coffeename, Quantity, Supplier, Taste, Category, Details, photo } = coffee;
    const handelDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/AddCoffee/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
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
                            <Link to={`/addCoffee/${_id}`}><button className="btn join-item">Eidit</button></Link>
                            <button onClick={() => handelDelete(_id)} className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    coffee: PropTypes.object.isRequired,
}
export default Card;