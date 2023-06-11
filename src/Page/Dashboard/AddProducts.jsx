import { useState } from "react";
import Swal from "sweetalert2";



const AddProducts = () => {
    // const { user } = useContext(AuthContext)
    const [category, setCategory] = useState('Kitchen')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target

        const product_name = form.product_name.value
        const price = parseFloat(form.price.value)
        const available_since = form.date.value
        const date = new Date()
        const status = form.status.value
        const productsDetails = { product_name, category, price, available_since, status, date }
        fetch('http://localhost:5000/add-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productsDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    Swal.fire(
                        'Good job!',
                        'Successfully Added your product',
                        'success'
                    )
                }
            })

    }


    const handleCategory = (event) => {
        setCategory(event.target.value)
        console.log(event.target.value)
    }



    return (
        <div className='md:m-40 m-10 addToy-banner my-16 '>
            <form className="border  rounded py-10 px-10 md:px-20" onSubmit={handleSubmit}>
                <h1 className="text-center text-4xl mb-5 font-semibold">Add A Toys</h1>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name='product_name' placeholder="Product Name" className="input input-bordered" />
                    </div>


                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>

                        <select value={category} onChange={handleCategory} className='input input-bordered'>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Bath">Bath</option>
                            <option value="Bedding">Bedding</option>
                        </select>



                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Unit Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text" name='status' placeholder="Status" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Since</span>
                        </label>
                        <input type="date" name='date' placeholder="Available Since" className="input input-bordered" required />
                    </div>






                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning">Add Toys</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;