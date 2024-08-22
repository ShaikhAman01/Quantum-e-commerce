import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { FiShoppingBag, FiUser, FiLogIn, FiLogOut } from "react-icons/fi"; // Import different icons
import { auth } from "../../firebase/FirebaseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("users"));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("users");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out");
    }
  };

  const cartItems = useSelector((state) => state.cart);

  return (
    <nav className="bg-white shadow-md top-0 mx-8 lg:mx-16">
      <div className="lg:flex lg:justify-between items-center py-4 lg:px-4">
        <div className="left py-3 lg:py-0 flex items-center">
          <Link to={"/"}>
            <h2 className="text-red-600 font-semibold tracking-wider text-2xl uppercase sm:text-3xl hover:text-red-500 transition duration-300">
              Quantum
            </h2>
          </Link>
          <div className="hidden lg:flex lg:ml-6 space-x-6 text-lg">
            <Link to={"/"} className="text-gray-700 hover:text-red-500 transition duration-300">
              Home
            </Link>
            <Link to={"/allproducts"} className="text-gray-700 hover:text-red-500 transition duration-300">
              Shop
            </Link>
            <Link to={"/aboutUs"} className="text-gray-700 hover:text-red-500 transition duration-300">
              About Us
            </Link>
            <Link to={"/contact"} className="text-gray-700 hover:text-red-500 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="right flex items-center">
          <SearchBar />
          <Link to={"/cart"} className="ml-6 relative">
            <FiShoppingBag className="w-6 h-6 text-gray-700 hover:text-red-500 transition duration-300" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-red-600 text-white text-xs font-semibold rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cartItems.length}
              </span>
            )}
          </Link>
          <div className="relative ml-3" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex items-center">
              <FiUser className="w-6 h-6 text-gray-700 hover:text-red-500 transition duration-300" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                {user ? (
                  <>
                    <Link
                      to={
                        user.role === "admin"
                          ? "/admin-dashboard"
                          : "/user-dashboard"
                      }
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <FiUser />
                      <span>{user.name || "User"}</span>
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <FiLogOut />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <FiLogIn />
                      <span>Sign In</span>
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <FiLogIn />
                      <span>Sign Up</span>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
