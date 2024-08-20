import { useEffect, useState } from "react";
import Button from "../../components/Shared/Button";
import Layout from "../../components/layout/Layout";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../redux/cartSlice";
import BuyNowModal from "../../components/buyNowModal/BuyNowModal";
import toast from "react-hot-toast";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { Navigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Generate random discounts between 5% to 30%
  const applyRandomDiscounts = (price) => {
    const discountPercentage = Math.floor(Math.random() * 26) + 5; // random discount between 5% and 30%
    const discountedPrice = price - (price * discountPercentage) / 100;
    return {
      discountPercentage,
      discountedPrice: Math.round(discountedPrice),
    };
  };

  // Apply random discounts to all cart items
  const cartItemsWithDiscounts = cartItems.map((item) => {
    const { discountPercentage, discountedPrice } = applyRandomDiscounts(
      item.price
    );
    return {
      ...item,
      discountPercentage,
      discountedPrice,
    };
  });

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Deleted item from cart");
  };

  const cartItemTotal = cartItemsWithDiscounts
    .map((item) => item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const cartTotal = cartItemsWithDiscounts
    .map((item) => item.discountedPrice * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItemsWithDiscounts));
  }, [cartItemsWithDiscounts]);

  // ..buyNow fuction

  const user = JSON.parse(localStorage.getItem("users"));

  // addressInfo
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    address: "",
    pincode: "",
    mobileNumber: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const buyNowFunction = () => {
    // validation
    if (
      addressInfo.name === "" ||
      addressInfo.address === "" ||
      addressInfo.pincode === "" ||
      addressInfo.mobileNumber === ""
    ) {
      return toast.error("All Fields are required");
    }

    // Order Info
    const orderInfo = {
      cartItems,
      addressInfo,
      email: user.email,
      userid: user.uid,
      status: "confirmed",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    try {
      const orderRef = collection(fireDB, "order");
      addDoc(orderRef, orderInfo);
      setAddressInfo({
        name: "",
        address: "",
        pincode: "",
        mobileNumber: "",
      });
      toast.success("Order Placed Successfull");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Shopping Cart
          </h1>
          <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8 p-4 shadow-sm"
            >
              <ul role="list" className="divide-y divide-gray-300">
                {cartItemsWithDiscounts.length > 0 ? (
                  <>
                    {cartItemsWithDiscounts.map((item, index) => (
                      <li key={index} className="flex py-6 sm:py-6">
                        <div className="flex-shrink-0">
                          <img
                            src={item.productImageUrl}
                            alt={item.name}
                            className="h-24 w-24 sm:h-38 sm:w-38 rounded-md object-contain object-center"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-sm">{item.title}</h3>
                              </div>
                              <div className="mt-1 flex text-sm text-gray-500">
                                <p>{item.category}</p>
                              </div>
                              <div className="mt-1 flex items-end">
                                <p className="text-xs font-medium text-gray-500 line-through">
                                  ₹{item.price.toLocaleString()}
                                </p>
                                <p className="ml-2 text-sm font-medium text-green-600">
                                  {item.discountPercentage}% Off
                                </p>
                              </div>
                              <p className="mt-1 text-lg font-semibold text-gray-900">
                                ₹{item.discountedPrice.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div className="min-w-24 flex">
                            <button
                              onClick={() => handleDecrement(item.id)}
                              type="button"
                              className="h-7 w-7"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              className="mx-1 h-7 w-9 rounded-md border text-center"
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              onClick={() => handleIncrement(item.id)}
                              type="button"
                              className="flex h-7 w-7 items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                          <div className="ml-6 flex text-sm">
                            <button
                              onClick={() => deleteCart(item)}
                              type="button"
                              className="flex items-center space-x-1 px-2 py-1 pl-0"
                            >
                              <Trash size={12} className="text-red-500" />
                              <span className="text-xs font-medium text-red-500">
                                Remove
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </>
                ) : (
                  <h1>No Items added to cart</h1>
                )}
              </ul>
            </section>
            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
              >
                Order Summary
              </h2>
              <div>
                <dl className=" space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">
                      Price ({cartItemTotal} item{cartItemTotal > 1 ? "s" : ""})
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ₹ {cartTotal.toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm text-gray-800">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">Free</dd>
                  </div>
                  <div className="flex items-center justify-between border-y border-dashed py-4 ">
                    <dt className="text-base font-medium text-gray-900">
                      Total Amount
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ₹ {cartTotal.toLocaleString()}
                    </dd>
                  </div>
                </dl>
                <div className="px-2 pb-4 font-medium text-green-700">
                  <div className="flex gap-4 mb-6">
                    {user ? (
                      <BuyNowModal
                        addressInfo={addressInfo}
                        setAddressInfo={setAddressInfo}
                        buyNowFunction={buyNowFunction}
                      />
                    ) : (
                      <Navigate to={"/login"} />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
