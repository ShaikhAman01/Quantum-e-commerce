import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Button from '../../components/Shared/Button';
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const ProductInfo = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState('')

  const { id } = useParams()

  // getProductData
  const getProductData = async () => {
      setLoading(true)
      try {
          const productTemp = await getDoc(doc(fireDB, "products", id))
          setProduct(productTemp.data());
          setLoading(false)
      } catch (error) {
          console.log(error)
          setLoading(false)
      }
  }

  useEffect(() => {
      getProductData()
  }, [])

  return (
    <Layout>
      <section className="flex flex-col lg:flex-row items-center py-12 lg:py-24 px-6 mx-auto max-w-screen-xl">
        {loading ? (
          <div className="flex justify-center items-center w-full h-96">
            <Loader />
          </div>
        ) : (
          <>
            {/* Product Image Section */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-start">
              <img
                className="rounded-lg shadow-xl object-contain h-full w-full lg:h-[36rem] transition-transform duration-300 hover:scale-105"
                src={product?.productImageUrl}
                alt="Product"
              />
            </div>

            {/* Product Details Section */}
            <div className="w-full lg:w-1/2 lg:pl-12 space-y-6">
              <div>
                <h2 className="text-3xl font-extrabold leading-snug tracking-tight text-gray-900 dark:text-gray-100">
                  {product?.title}
                </h2>
              </div>

              <div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product?.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
                  ₹ {product?.price}
                </p>
                <Button text="Add to Cart" bgColor={"bg-primary"} textColor={"text-white"} className="py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition" />
              </div>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default ProductInfo;
