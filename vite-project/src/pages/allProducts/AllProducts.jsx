import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import Button from "../../components/Shared/Button";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";



const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const {loading, getAllProduct} = context


    return (
      <Layout>
      <div>
        <div className="px-16 mx-auto pb-10">
          {/* Header section */}
          <div className="mb-10 max-w-[600px] mx-auto space-y-2">
            <h1 className="text-3xl font-bold lg:text-4xl text-center">All Products</h1>
          </div>

          <div className="flex justify-center">
            {loading && <Loader />}
          </div>
  
          {/* Body section */}
          <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
              {getAllProduct.map((item) => (
                <div className="group bg-gradient-to-br from-gray-400 to-gray-200 rounded-3xl p-6 relative w-full max-w-xs" key={item.id}>
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
                    <Button text="Add to Cart" bgColor="bg-primary" textColor="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Layout>
    );
}

export default AllProduct;