import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

export default function HomePageProductCard() {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    // console.log(item)
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Deleted from cart");
  };

  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <div className="px-16 mx-auto pb-10">
        {/* Header section */}
        <div className="mb-10 max-w-[600px] mx-auto space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl text-center">
            Best Seller Products
          </h1>
        </div>

        <div className="flex justify-center">{loading && <Loader />}</div>

        {/* Body section */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            {getAllProduct.slice(0, 8).map((item, index) => (
              <div
                className="group bg-gradient-to-br from-gray-400 to-gray-200 rounded-3xl p-6 relative w-full max-w-xs shadow-lg hover:shadow-xl transition-shadow"
                key={index}
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    onClick={() => navigate(`/productinfo/${item.id}`)}
                    className="object-contain h-full w-full cursor-pointer"
                    src={item.productImageUrl}
                    alt={item.title}
                  />
                </div>
                <div className="leading-7 text-center mt-2">
                  <h2 className="font-semibold text-left">{item.title}</h2>
                  <p className="font-bold text-left">₹ {item.price}</p>
                </div>
                <div className="flex justify-center ">
                  {cartItems.some((p) => p.id === item.id) ? (
                    <button
                      onClick={() => deleteCart(item)}
                      className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addCart(item)}
                      className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="text-center mt-4">
<Button onClick={() => addCart(item)} text="Add to Cart" bgColor="bg-primary" textColor="text-white" />
</div> */
}
