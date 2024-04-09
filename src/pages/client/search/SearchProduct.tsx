import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, searchProduct } from "../../../service/product";
import Product from "../../../components/Product";

const SearchProduct = () => {
  const { search } = useParams();
  const [product, setProduct] = useState([]);
  const getAll = async () => {
    try {
      let data = await searchProduct(search);
      if (data?.status === 0) {
        setProduct(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAll();
  }, [search]);

  return (
    <div className='container mx-auto'>
      <div style={{ marginTop: "50px" }}>
        <h2>Search Products</h2>
        <div className='flex justify-content-between align-items-end'>
          <span>Từ khóa : {search} </span>
        </div>
        {product && product.length > 0 ? (
          <div className='grid grid-cols-4 gap-4 mt-5'>
            {product &&
              product.length &&
              product.map((item: any) => {
                return <Product item={item} />;
              })}
          </div>
        ) : (
          <h2 style={{ textAlign: "center" }}>Không có sản phẩm nào </h2>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
