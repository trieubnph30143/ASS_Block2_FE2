import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Slider from "./components/Slider";
import LayoutClient from "./layout/LayoutClient";
import Home from "./pages/client/home/Home";
import { AddProduct } from "./thi/AddProduct";
import ProductList from "./thi/ProductList";
import { createContext, useEffect, useState } from "react";
import { typeDataProduct } from "./type/product";
import ListProduct from "./pages/client/ListProduct/ProductList";
import DetailProduct from "./pages/client/productDetail/DetailProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const contextProduct = createContext({});
function App() {
  const [product, setProduct] = useState<typeDataProduct[]>([]);
  function getAll() {
    fetch("http://localhost:3000/product")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }
  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={LayoutClient}>
            <Route path='' Component={Home} />
            <Route path='products' Component={ListProduct} />
            <Route path='detail' Component={DetailProduct} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <contextProduct.Provider value={{ product, getAll }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={AddProduct} />
            <Route path='/products' Component={ProductList} />
          </Routes>
        </BrowserRouter>
      </contextProduct.Provider> */}
    </>
  );
}

export default App;
