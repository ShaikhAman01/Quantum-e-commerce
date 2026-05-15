import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

export default function HomePageProductCard() {
  const navigate = useNavigate();
  const { loading, getAllProduct } = useContext(myContext);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="px-16 mx-auto pb-10">
      <div className="mb-10 max-w-[600px] mx-auto">
        <h1 className="text-3xl font-black text-stone-900 lg:text-4xl text-center">Best Seller Products</h1>
      </div>

      {loading && <div className="flex justify-center"><Loader /></div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {getAllProduct.slice(0, 8).map((item) => {
          const isItemInCart = cartItems.some((p) => p.id === item.id);
          return (
            <div key={item.id} className="group bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-52 overflow-hidden mb-4">
                <img
                  onClick={() => navigate(`/productinfo/${item.id}`)}
                  className="object-contain h-full w-full cursor-pointer transition-transform duration-500 group-hover:scale-110"
                  src={item.productImageUrl}
                  alt={item.title}
                  onError={(e) => { e.target.src = "https://placehold.co/400x400?text=Quantum+Product"; }}
                />
              </div>
              <div className="space-y-1">
                <h2 className="font-bold text-stone-900 truncate">{item.title}</h2>
                <p className="text-xl font-black text-stone-900">₹{item.price}</p>
              </div>
              <button
                onClick={() => isItemInCart ? dispatch(deleteFromCart(item)) : dispatch(addToCart(item))}
                className={`w-full mt-4 py-2 rounded-full font-bold transition-all active:scale-95 ${
                  isItemInCart ? "bg-red-50 text-red-500 border border-red-100" : "bg-stone-900 text-white"
                }`}
              >
                {isItemInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}