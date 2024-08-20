import { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";  
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context;
    const [search, setSearch] = useState("");

    const filterSearchData = getAllProduct.filter((obj) =>
        obj.title.toLowerCase().includes(search)
    ).slice(0, 8);

    const navigate = useNavigate();

    return (
        <div className="relative">
            {/* search input */}
            <div className="input flex justify-center items-center">
                <div className="relative w-96">
                    <input
                        type="text"
                        placeholder="Search here"
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-gray-200 placeholder-gray-500 rounded-full px-12 py-2 w-full shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300 text-black transition duration-300"
                    />
                    <AiOutlineSearch className="absolute left-4 top-2/4 transform -translate-y-2/4 text-gray-500" size={20} />
                </div>
            </div>

            {/* search drop-down */}
            <div className="flex justify-center">
                {search && (
                    <div className="absolute bg-white w-96 z-50 my-1 rounded-lg shadow-lg border border-gray-200">
                        {filterSearchData.length > 0 ? (
                            <>
                                {filterSearchData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition duration-300"
                                        onClick={() => navigate(`/productinfo/${item.id}`)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <img className="w-10 h-10 object-cover rounded-md" src={item.productImageUrl} alt={item.title} />
                                            <span className="text-sm font-medium text-gray-800">{item.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="flex flex-col items-center py-4">
                                <img
                                    className="w-16 mb-2"
                                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                                    alt="No results"
                                />
                                <span className="text-sm text-gray-500">No results found</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
