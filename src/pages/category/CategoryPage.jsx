import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import Button from "../../components/Shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const CategoryPage = () => {
  const { categoryname } = useParams();
  const { getAllProduct, loading } = useContext(myContext);
  const navigate = useNavigate();
  const [filterProduct, setFilterProduct] = useState([]);

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    // console.log(item)
    dispatch(addToCart(item));
    toast.success("Add to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (!loading) {
      const filtered = getAllProduct.filter((product) =>
        product.category.toLowerCase().includes(categoryname.toLowerCase())
      );
      setFilterProduct(filtered);
    }
  }, [categoryname, getAllProduct, loading]);

  return (
    <Layout>
      <div className="mb-10 max-w-[600px] mx-auto space-y-2">
        <h1 className="text-3xl font-bold lg:text-4xl text-center">
          {categoryname}
        </h1>
      </div>
      <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
          {filterProduct.length > 0 ? (
            filterProduct.map((item, index) => (
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
                <div className="text-center mt-4">
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
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <img
                className="mb-2"
                src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723852800&semt=ais_hybrid"
                alt="No products"
              />
              <h1 className="text-black text-xl">
                No {categoryname} products found
              </h1>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
