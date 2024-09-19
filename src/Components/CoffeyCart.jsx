import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeyCart = ({ coffey, coffeys, setCoffeys }) => {
    const { _id, name, supplier, category, chef, taste, details, photo } = coffey;

    const handleDelete = _id => {
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
                fetch(`http://localhost:5000/coffey/${_id}`, { 
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffey has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffeys.filter(cof => cof._id !== _id);
                            setCoffeys(remaining); 
                        }
                    });
            }
        });
    };
    return (
        <div className="max-w-6xl mx-auto">
            <div className="card card-side bg-base-100 shadow-xl p-3 mb-3">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="flex justify-between border w-full p-10">
                    <div>
                        <h2 className="card-title"> Name : {name}</h2>
                        <p>{supplier}</p>
                        <p>{category}</p>
                        <p>{taste}</p>
                        <p>{details}</p>
                        <p>{chef}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-4">
                            <button className="btn join-item">view</button>
                            <Link to={`updateCoffey/${_id}`}>
                                <button className="btn join-item">edit</button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn join-item bg-orange-400">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeyCart;