import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../../redux/cartSlice";
import BuyNowModal from "../../components/buyNowModal/BuyNowModal";
import toast from "react-hot-toast";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart) || [];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getStableDiscount = (item) => {
        const price = Number(item?.price) || 0;
        if (!item || price === 0) return { discountPercentage: 0, discountedPrice: 0 };

        const idString = String(item.id || item.title || "default");
        const seed = idString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        
        const rawPercentage = (seed % 21) + 10;
        const discountPercentage = Math.round(rawPercentage / 5) * 5; 
        const discountedPrice = Math.round(price - (price * discountPercentage) / 100);
        
        return { discountPercentage, discountedPrice };
    };

    const cartItemsWithDiscounts = cartItems.map((item) => ({
        ...item,
        ...getStableDiscount(item)
    }));

    const cartItemTotal = cartItemsWithDiscounts.reduce((prev, curr) => {
        const qty = Number(curr.quantity) || 0;
        return prev + qty;
    }, 0);

    const cartTotal = cartItemsWithDiscounts.reduce((prev, curr) => {
        const p = Number(curr.discountedPrice) || 0;
        const q = Number(curr.quantity) || 0;
        return prev + (p * q);
    }, 0);

    const user = JSON.parse(localStorage.getItem("users"));
    const [addressInfo, setAddressInfo] = useState({
        name: "", address: "", pincode: "", mobileNumber: "",
    });

    const buyNowFunction = async () => {
        if (!addressInfo.name || !addressInfo.address || !addressInfo.pincode || !addressInfo.mobileNumber) {
            return toast.error("All Fields are required");
        }

        const orderInfo = {
            cartItems,
            addressInfo,
            email: user?.email,
            userid: user?.uid,
            status: "confirmed",
            time: Timestamp.now().toMillis(), // Non-serializable fix
            date: new Date().toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
        };

        try {
            await addDoc(collection(fireDB, "order"), orderInfo);
            setAddressInfo({ name: "", address: "", pincode: "", mobileNumber: "" });
            toast.success("Order Placed Successfully");
        } catch (error) {
            console.error(error);
            toast.error("Order failed");
        }
    };

    return (
        <Layout>
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
                    {/* Items Section */}
                    <section className="lg:col-span-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <ul className="divide-y divide-gray-200">
                            {cartItemsWithDiscounts.length > 0 ? (
                                cartItemsWithDiscounts.map((item) => (
                                    <li key={item.id || item.title} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0">
                                            <img
                                                src={item.productImageUrl}
                                                alt={item.title}
                                                className="h-full w-full rounded-md object-contain"
                                                onError={(e) => { e.target.src = "https://placehold.co/200x200?text=Product"; }}
                                            />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col justify-between">
                                            <div>
                                                <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                                                <div className="mt-1 flex items-end gap-2">
                                                    <p className="text-xs text-gray-400 line-through">₹{Number(item.price || 0).toLocaleString()}</p>
                                                    <p className="text-sm font-bold text-green-600">{item.discountPercentage}% Off</p>
                                                </div>
                                                <p className="text-lg font-black text-gray-900">₹{Number(item.discountedPrice || 0).toLocaleString()}</p>
                                            </div>
                                            <div className="flex items-center gap-4 mt-4">
                                                <div className="flex items-center border rounded-lg overflow-hidden">
                                                    <button onClick={() => dispatch(decrementQuantity(item.id))} className="px-3 py-1 hover:bg-gray-100">-</button>
                                                    <span className="px-3 font-bold border-x">{item.quantity}</span>
                                                    <button onClick={() => dispatch(incrementQuantity(item.id))} className="px-3 py-1 hover:bg-gray-100">+</button>
                                                </div>
                                                <button onClick={() => dispatch(deleteFromCart(item))} className="text-red-500 flex items-center gap-1 text-xs font-bold uppercase hover:underline">
                                                    <Trash size={14} /> Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <div className="text-center py-20 text-gray-500 font-medium italic">Your cart is feeling a bit light...</div>
                            )}
                        </ul>
                    </section>

                    {/* Order Summary Section */}
                    <section className="lg:col-span-4 mt-8 lg:mt-0">
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 sticky top-10">
                            <h2 className="text-lg font-bold border-b pb-4 mb-4 text-gray-800">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Price ({String(cartItemTotal)} items)</span>
                                    <span>₹{String((cartTotal || 0).toLocaleString())}</span>
                                </div>
                                <div className="flex justify-between text-green-600 font-bold">
                                    <span>Delivery Charges</span>
                                    <span>FREE</span>
                                </div>
                                <div className="flex justify-between text-xl font-black border-t pt-4 text-gray-900">
                                    <span>Total Amount</span>
                                    <span>₹{String((cartTotal || 0).toLocaleString())}</span>
                                </div>
                                
                                <div className="pt-4">
                                    {user ? (
                                        <BuyNowModal addressInfo={addressInfo} setAddressInfo={setAddressInfo} buyNowFunction={buyNowFunction} />
                                    ) : (
                                        <button 
                                            onClick={() => navigate("/login")} 
                                            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95"
                                        >
                                            Login to Checkout
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;