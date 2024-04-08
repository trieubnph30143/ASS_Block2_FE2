import { useEffect, useState } from "react";
import Banner from "./Banner";
import Content from "./Content";
import ProductList from "./ProductList";
import { getProduct } from "../../../service/product";

const Home = () => {
  const [product, setProduct] = useState([]);
  const getAll = async () => {
    try {
      let data = await getProduct({ page: 0, limit: 4 });
      if (data?.status === 0) {
        setProduct(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <div className='container mx-auto'>
        <Content />
        <ProductList product={product} />
      </div>

      <Banner />
      <div className='container mx-auto'>
        <ProductList product={product} />
      </div>
    </div>
  );
};

export default Home;
