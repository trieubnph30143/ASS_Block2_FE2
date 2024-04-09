import { useEffect, useState } from "react";
import Banner from "./Banner";
import Content from "./Content";
import ProductList from "./ProductList";
import { getCategoryProduct, getProduct } from "../../../service/product";

const Home = () => {
  const [productHandle, setProductHandle] = useState([]);
  const [productMachine, setProductMachine] = useState([]);
  const getAll = async () => {
    try {
      let gamingHandle: any = await getCategoryProduct({
        page: 0,
        limit: 4,
        id: "65a4b6ed94169f6d14f5dffe",
      });
      let gamingMachine: any = await getCategoryProduct({
        page: 0,
        limit: 4,
        id: "65a4b6fb94169f6d14f5e000",
      });
      if (gamingHandle?.status === 0 && gamingMachine?.status === 0) {
        setProductMachine(gamingMachine.data);
        setProductHandle(gamingHandle.data);
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
        <ProductList title={"Gaming Handle"} product={productHandle} />
      </div>

      <Banner />
      <div className='container mx-auto'>
        <ProductList title={"Gaming Machine"} product={productMachine} />
      </div>
    </div>
  );
};

export default Home;
