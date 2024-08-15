import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import cartImg from "../../assets/shopping-bag.png";
import userImg from "../../assets/user2.png";
import { auth } from "../../firebase/FirebaseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Get user from localStorage
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

  return (
    <nav className="bg-white top-0 mx-16">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
        <div className="left py-3 lg:py-0 flex items-center">
          <Link to={"/"}>
            <h2 className="text-red-600 font-semibold tracking-widest text-xl uppercase sm:text-2xl">
              Quantum
            </h2>
          </Link>
          <Link to={"/"} className="ml-6 text-black font-medium">
            Home
          </Link>
          <Link to={"/allproducts"} className="ml-6 text-black font-medium">
            Shop
          </Link>
          <Link to={"/aboutUs"} className="ml-6 text-black font-medium">
            About Us
          </Link>
          <Link to={"/contact"} className="ml-6 text-black font-medium">
            Contact Us
          </Link>
        </div>

        <div className="right flex items-center">
          <SearchBar />
          <Link to={"/cart"} className="ml-6">
            <img className="w-6 h-auto" src={cartImg} alt="cart" />
          </Link>
          <div className="relative ml-3" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex items-center">
              <img className="w-6 h-auto" src={userImg} alt="user" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {user ? (
                  <>
                    <Link
                      to={
                        user.role === "admin"
                          ? "/admin-dashboard"
                          : "/user-dashboard"
                      }
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {user.name || "User"}
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Up
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
