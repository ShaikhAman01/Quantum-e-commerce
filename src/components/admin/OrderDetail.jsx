import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, deleteProduct } = context;

    return (
        <div className="py-5">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold text-[#F42c37]">All Orders</h1>
            </div>

            <div className="w-full overflow-x-auto shadow-sm border rounded-lg bg-white">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="h-12 px-6 text-sm font-medium">S.No.</th>
                            <th className="h-12 px-6 text-sm font-medium">Order Id</th>
                            <th className="h-12 px-6 text-sm font-medium">Image</th>
                            <th className="h-12 px-6 text-sm font-medium">Title</th>
                            <th className="h-12 px-6 text-sm font-medium">Category</th>
                            <th className="h-12 px-6 text-sm font-medium">Price</th>
                            <th className="h-12 px-6 text-sm font-medium">Quantity</th>
                            <th className="h-12 px-6 text-sm font-medium">Total Price</th>
                            <th className="h-12 px-6 text-sm font-medium">Status</th>
                            <th className="h-12 px-6 text-sm font-medium">Name</th>
                            <th className="h-12 px-6 text-sm font-medium">Address</th>
                            <th className="h-12 px-6 text-sm font-medium">Pincode</th>
                            <th className="h-12 px-6 text-sm font-medium">Phone Number</th>
                            <th className="h-12 px-6 text-sm font-medium">Email</th>
                            <th className="h-12 px-6 text-sm font-medium">Date</th>
                            <th className="h-12 px-6 text-sm font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllOrder.map((order, orderIndex) => (
                            order.cartItems.map((item, index) => {
                                const { id, productImageUrl, title, category, price, quantity } = item;
                                return (
                                    <tr key={index} className="border-t last:border-b hover:bg-gray-50 transition-colors">
                                        <td className="h-12 px-6 text-sm text-gray-800">{index + 1}.</td>
                                        <td className="h-12 px-6 text-sm text-gray-800">{order.id}</td>
                                        <td className="h-12 px-6 text-sm">
                                            <div className="flex justify-center">
                                                <img className="w-16 h-16 object-cover rounded-lg" src={productImageUrl} alt={title} />
                                            </div>
                                        </td>
                                        <td className="h-12 px-6 text-sm text-gray-800 capitalize">{title}</td>
                                        <td className="h-12 px-6 text-sm text-gray-800 capitalize">{category}</td>
                                        <td className="h-12 px-6 text-sm text-gray-800">₹{price}</td>
                                        <td className="h-12 px-6 text-sm text-gray-800">{quantity}</td>
                                        <td className="h-12 px-6 text-sm text-gray-800">₹{price * quantity}</td>
                                        <td className={`h-12 px-6 text-sm capitalize text-green-600 `}>{order.status}</td>
                                        <td className="h-12 px-6 text-sm text-gray-800 capitalize">{order.addressInfo.name}</td>
                                        <td className="h-12 px-6 text-sm text-gray-800 capitalize">{order.addressInfo.address}</td>
                                        <td className="h-12 px-6 text-sm text-gray-800">{order.addressInfo.pincode}</td>
                                        <td className="h-12 px-6 text-sm text-gray-800">{order.addressInfo.mobileNumber}</td>
                                        <td className="h-12 px-6 text-sm text-gray-800">{order.email}</td>
                                        <td className="h-12 px-6 text-sm text-gray-800">{order.date}</td>
                                        <td onClick={() => deleteProduct(order.id)} className="h-12 px-6 text-sm text-red-500 hover:text-red-700 cursor-pointer">
                                            Delete
                                        </td>
                                    </tr>
                                );
                            })
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderDetail;
