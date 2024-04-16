import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Shop from "./components/pages/Shop";
import Footer from "./components/Footer";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (

    <>
        <Header />
        <Routes>
          <Route path="/" element={<Shop/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
