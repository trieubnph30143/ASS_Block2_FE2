import { useEffect, useState } from "react";
import ProductList from "../home/ProductList";
import { getCategoryProduct } from "../../../service/product";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ListProduct = () => {
  const [product, setProduct] = useState<any>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const { id } = useParams();
  const getAll = async () => {
    try {
      let skip = page !== 0 ? (page - 1) * limit : 0;
      let data: any = await getCategoryProduct({ page: skip, limit, id: id });
      console.log(data);
      if (data?.status === 0) {
        setTotalPage(Math.ceil(data.count / data.size));
        setProduct(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAll();
  }, [page, id]);
  const handleChangePage = (page: any) => {
    setPage(page);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className='container mx-auto'>
      <ProductList
        title={product && product.length && product[0].categoryId.name}
        product={product}
      />
      {totalPage === 0 ? (
        ""
      ) : (
        <nav
          className='mt-[20px] '
          style={{ display: "flex", justifyContent: "center" }}
          aria-label='Page navigation example '>
          <ul className='flex items-center -space-x-px h-8 text-sm'>
            <li
              style={
                page <= 1
                  ? { pointerEvents: "none", opacity: 0.5 }
                  : { pointerEvents: "all", opacity: 1 }
              }>
              <p
                onClick={handlePrevPage}
                className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                <span className='sr-only'>Previous</span>
                <svg
                  className='w-2.5 h-2.5 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 1 1 5l4 4'
                  />
                </svg>
              </p>
            </li>
            {[...Array(totalPage)].map((_, index) => {
              console.log(index === page);
              return (
                <li>
                  <p
                    onClick={() => handleChangePage(index + 1)}
                    className={
                      index !== page - 1
                        ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        : "z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    }>
                    {index + 1}
                  </p>
                </li>
              );
            })}
            <li
              style={
                page == totalPage
                  ? { pointerEvents: "none", opacity: 0.5 }
                  : { pointerEvents: "all", opacity: 1 }
              }>
              <p
                onClick={handleNextPage}
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                <span className='sr-only'>Next</span>
                <svg
                  className='w-2.5 h-2.5 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='m1 9 4-4-4-4'
                  />
                </svg>
              </p>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default ListProduct;
