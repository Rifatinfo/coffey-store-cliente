import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffey = () => {
    const coffey = useLoaderData();
    const { _id, name, supplier, category, chef, taste, details, photo } = coffey;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedCoffey = {
            name: form.name.value,
            supplier: form.supplier.value,
            category: form.category.value,
            chef: form.chef.value,
            taste: form.taste.value,
            details: form.details.value,
            photo: form.photo.value
        };

        // Send updated data to the server 
        fetch(`http://localhost:5000/coffey/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffey)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {  // Check for success
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                } 
            //     else {
            //         Swal.fire({
            //             title: 'Error!',
            //             text: 'No changes made or update failed.',
            //             icon: 'error',
            //             confirmButtonText: 'Try Again'
            //         });
            //     }
            // })
            // .catch(error => {
            //     console.error('Error updating coffee:', error);
            //     Swal.fire({
            //         title: 'Error!',
            //         text: 'Failed to update coffee.',
            //         icon: 'error',
            //         confirmButtonText: 'Try Again'
            //     });
            });
    };

    return (
        <div>
            <h1>Update Coffee</h1>
            <form onSubmit={handleUpdateCoffee}>
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-2/4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter coffee name" defaultValue={name} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" name="supplier" placeholder="Enter coffee supplier" defaultValue={supplier} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input defaultValue={category} type="text" name="category" placeholder="Enter coffee category" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input defaultValue={chef} type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input defaultValue={taste} type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input defaultValue={details} type="text" name="details" placeholder="Enter coffee details" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input defaultValue={photo} type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control text-center">
                        <button className="w-full bg-[#D2B48C] py-3 mt-5 rounded-lg">Update Coffee</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffey;
