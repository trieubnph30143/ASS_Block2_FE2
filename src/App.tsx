import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Slider from "./components/Slider";

function App() {
  const menu = ["Home", "About", "Shop", "Contact"];
  return (
    <>
      <Header menu={menu} />
      <Slider />
      <Product />
      <Footer />
    </>
  );
}

export default App;
