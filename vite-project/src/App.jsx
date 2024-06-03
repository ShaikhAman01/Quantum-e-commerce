import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productIngo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
function App() {
  return (
    <div>
    <Router>
    <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/*" element={<NoPage/>}/>
        <Route path="/productinfo" element={<ProductInfo />}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;

