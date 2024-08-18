import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import Button from "../../components/Shared/Button";

const CategoryPage = () => {
    const { categoryname } = useParams();
    const { getAllProduct, loading } = useContext(myContext);
    const navigate = useNavigate();
    const [filterProduct, setFilterProduct] = useState([]);

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
            <h1 className="text-3xl font-bold lg:text-4xl text-center">{categoryname}</h1>
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
                                    <Button text="Add to Cart" bgColor="bg-primary" textColor="text-white" />
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
    <h1 className="text-black text-xl">No {categoryname} products found</h1>
</div>

                    )}
                </div>
            </div>
        </Layout>
    );
};

export default CategoryPage;
