import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Search from "./components/pages/Search";
import Shop from "./components/pages/Shop";
import Footer from "./components/Footer";
import ProductCategory from "./components/pages/ProductCategory"
import Product from "./components/pages/Product";
import NewProducts  from "./components/pages/NewProducts";
import Products from "./components/pages/Products";
import BrandProducts from "./components/pages/BrandProducts";
import HawaiiShirts from "./components/pages/BigSavingProduct/HawaiiShirts";
import CargoJoggers from "./components/pages/BigSavingProduct/CargoJoggers";
import OversizedTshirts from "./components/pages/BigSavingProduct/OversizedTshirts";
import PrintedTshirts from "./components/pages/BigSavingProduct/PrintedTshirts";
import UrbanTShirts from "./components/pages/BigSavingProduct/UrbanTshirts";
import SingleNew from "./components/pages/SingleNew";
import Cart from "./components/pages/Cart";
import Favorite from "./components/pages/Favorite";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (

    <>
        <Header />
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/:category/:tag" element={<ProductCategory/>}/>
          <Route path="/products/:category" element={<Products/>}/>
          <Route path="/new/:category/:tag" element={<NewProducts />} />
          <Route path="/products/brand/:brand" element={<BrandProducts />} />
          <Route path="/hawaii-shirts" element={<HawaiiShirts />} />
          <Route path="/cargo-joggers" element={<CargoJoggers />} />
          <Route path="/oversized-tshirts" element={<OversizedTshirts />} />
          <Route path="/printed-tshirt" element={<PrintedTshirts />} />
          <Route path="/urban-shirt" element={<UrbanTShirts />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/single/:id" element={<SingleNew />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <Footer/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

    </>
  );
}

export default App;
