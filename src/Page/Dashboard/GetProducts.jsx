import { useQuery } from "@tanstack/react-query";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const GetProducts = () => {

    const { data: products = [], refetch } = useQuery({
        queryKey: ['all-products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-products')
            const data = res.json()
            return data


        }


    })



    const handleDelete = (id) => {
        fetch(`http://localhost:5000/product/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },


        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Successfully deleted your product',
                        'success'
                    )
                }
                console.log(data)
            })
    }
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Availavle Since</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            products && products.map((product, index) => <>


                                <tr key={product._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {product.product_name}
                                    </td>
                                    <td>
                                        {product.category}

                                    </td>


                                    <td>
                                        ${
                                            product.price
                                        }                                    </td>
                                    <td>
                                        {
                                            product.status
                                        }                                    </td>
                                    <td>
                                        {
                                            product.available_since
                                        }
                                    </td>
                                    <td>
                                        <button className="btn whitespace-no-wrap bg-opacity-50 btn-ghost btn-xs  hover:text-black bg-yellow-600"><FaPenAlt ></FaPenAlt></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(product._id)} className="btn whitespace-no-wrap bg-opacity-50 btn-ghost btn-xs  hover:text-black bg-red-600"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>

                            </>)
                        }

                    </tbody>


                </table>
            </div>

        </>
    );
};

export default GetProducts;