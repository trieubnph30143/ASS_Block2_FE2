import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Product } from "./component/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./component/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/product' element={<Product />}></Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position={"top-right"}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export default App;
