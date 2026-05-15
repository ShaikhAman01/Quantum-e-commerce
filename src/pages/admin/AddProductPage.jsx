import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const categoryList = [
    { name: 'ImmerseWithMusic' },
    { name: 'SmartWearableTech' },
    { name: 'EssentialWorkTools' },
    { name: 'UltimateGamingGear' },
    { name: 'ExploreVirtualReality' },
    { name: 'PremiumSoundSystems' }
];

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity: 1,
    });

    const addProductFunction = async () => {
        // 1. Validation
        if (product.title === "" || product.price === "" || product.productImageUrl === "" || product.category === "" || product.description === "") {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');

            const productData = {
                ...product,
                price: Number(product.price), // Ensure price is a Number, not a String
                time: Timestamp.now().toMillis(), 
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })
            };

            await addDoc(productRef, productData);
            toast.success("Product added successfully");
            navigate('/admin-dashboard');
        } catch (error) {
            console.log(error);
            toast.error("Failed to add product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
            {loading && <Loader />}
            <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add Product</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            value={product.title}
                            onChange={(e) => setProduct({...product, title: e.target.value})}
                            placeholder="e.target.value Product Title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                        <input
                            type="number"
                            value={product.price}
                            onChange={(e) => setProduct({...product, price: e.target.value})}
                            placeholder="Product Price"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                            type="text"
                            value={product.productImageUrl}
                            onChange={(e) => setProduct({...product, productImageUrl: e.target.value})}
                            placeholder="Product Image URL"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                            value={product.category}
                            onChange={(e) => setProduct({...product, category: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                        >
                            <option value="" disabled>Select Product Category</option>
                            {categoryList.map(({name}, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            value={product.description}
                            onChange={(e) => setProduct({...product, description: e.target.value})}
                            placeholder="Product Description"
                            rows="4"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                        ></textarea>
                    </div>
                </div>
                <button
                    onClick={addProductFunction}
                    className="w-full mt-6 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 font-bold shadow-lg active:scale-95 transition-all duration-200"
                >
                    Add Product
                </button>
            </div>
        </div>
    );
}

export default AddProductPage;