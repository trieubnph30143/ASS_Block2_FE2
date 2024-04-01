import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutClient from "./layout/LayoutClient";
import Home from "./pages/client/home/Home";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LayoutAdmin from "./layout/LayoutAdmin";
import DashBoard from "./pages/admin/dashboard/DashBoard";
import AddProduct from "./pages/admin/product/AddProduct";
import EditProduct from "./pages/admin/product/EditProduct";
import ListProduct from "./pages/client/ListProduct/ProductList";
import Login from "./pages/client/login/Login";
import DetailProduct from "./pages/client/productDetail/DetailProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={LayoutClient}>
            <Route path='' Component={Home} />
            <Route path='products' Component={ListProduct} />
            <Route path='detail' Component={DetailProduct} />
            <Route path='login' Component={Login} />
          </Route>
          <Route path='/dashbroad' Component={LayoutAdmin}>
            <Route path='' Component={DashBoard} />
            <Route path='add_product' Component={AddProduct} />
            <Route path='edit_product' Component={EditProduct} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
