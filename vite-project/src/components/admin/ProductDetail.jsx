import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;
    // console.log(getAllProduct)

    // navigate 
    const navigate = useNavigate();

    // Delete product 
    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', id))
            toast.success('Product Deleted successfully')
            getAllProductFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    
    return (
        <div className="py-5">
            <div className="flex justify-between items-center mb-4">
                {/* Heading */}
                <h1 className="text-2xl font-semibold text-[#F42c37]">All Products</h1>
                {/* Add Product Button */}
                <Link to="/addproduct">
                    <button className="px-5 py-2 bg-[#F42c37] text-white rounded-lg hover:bg-white hover:text-[#F42c37] border border-[#F42c37] transition duration-300">
                        Add Product
                    </button>
                </Link>
            </div>

            {/* Loading */}
            <div className="flex justify-center relative top-28 ">
                {loading && <Loader />}
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto shadow-sm border rounded-lg bg-white">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="h-12 px-6 text-sm font-medium ">S.No.</th>
                            <th className="h-12 px-6 text-sm font-medium ">Image</th>
                            <th className="h-12 px-6 text-sm font-medium ">Title</th>
                            <th className="h-12 px-6 text-sm font-medium ">Price</th>
                            <th className="h-12 px-6 text-sm font-medium ">Category</th>
                            <th className="h-12 px-6 text-sm font-medium ">Date</th>
                            <th className="h-12 px-6 text-sm font-medium ">Action</th>
                            <th className="h-12 px-6 text-sm font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllProduct.map((item, index) => {
                            const { id, title, price, category, date, productImageUrl } = item;
                            return (
                                <tr key={id} className="border-t last:border-b">
                                    <td className="h-12 px-6 text-sm text-gray-800">{index + 1}.</td>
                                    <td className="h-12 px-6 text-sm">
                                        <div className="flex justify-center">
                                            <img className="w-20 h-20 object-cover rounded-lg" src={productImageUrl} alt={title} />
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm text-gray-800 capitalize">{title}</td>
                                    <td className="h-12 px-6 text-sm text-gray-800">₹{price}</td>
                                    <td className="h-12 px-6 text-sm text-gray-800 capitalize">{category}</td>
                                    <td className="h-12 px-6 text-sm text-gray-800">{date}</td>
                                    <td onClick={() => navigate(`/updateproduct/${id}`)}  className="h-12 px-6 text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
                                        Edit
                                    </td>
                                    <td onClick={() => deleteProduct(id)} className="h-12 px-6 text-sm text-red-500 hover:text-red-700 cursor-pointer">
                                        Delete
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductDetail;
