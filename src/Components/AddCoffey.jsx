import Swal from 'sweetalert2'
const AddCoffey = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffey = { name, supplier, category, chef, taste, details, photo }
        console.log(newCoffey);

        // send data to the server 
        fetch('http://localhost:5000/coffey', {  // Update to the correct port and path
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffey)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'Success!',
                text: 'Coffee added successfully!',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
            } else {
              Swal.fire({
                title: 'Error!',
                text: 'Failed to add coffee.',
                icon: 'error',
                confirmButtonText: 'Try Again'
              });
            }
          })
          
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div  onSubmit={handleAddCoffee} >
            <h1>Add Coffey</h1>
            <form>
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-2/4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Enter coffee name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="supplier" name="supplier" placeholder="Enter coffee Supplier" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="category" name="category" placeholder="Enter coffee Category" className="input input-bordered"  />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="chef" name="chef" placeholder="Enter coffee Chef" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="taste" name="taste" placeholder="Enter coffee Taste" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="details" name="details" placeholder="Enter coffee details" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="photo" name="photo" placeholder="Enter Photo url" className="input input-bordered"  />
                    </div>
                    <div className="form-control text-center">
                        <button className="w-full bg-[#D2B48C] py-3 mt-5 rounded-lg">Add Coffee</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffey;