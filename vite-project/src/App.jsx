import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProducts from "./pages/allProducts/AllProducts";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/contactUs";
import UserDashBoard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";




 
function App() {
  return (
    <div>
    <Router>
    <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/*" element={<NoPage/>}/>
        <Route path="/productinfo" element={<ProductInfo />}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="user-dashboard" element ={<UserDashBoard />}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="/updateproduct" element={<UpdateProductPage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;

