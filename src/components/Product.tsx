import { useEffect, useState } from "react";

export default function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      <div
        className=''
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "10px",
          padding: "0 20px",
        }}>
        {product &&
          product.length &&
          product.map((item: any) => {
            return (
              <div className='group relative'>
                <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                  <img
                    src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
                    alt="Front of men's Basic Tee in black."
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  />
                </div>
                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-gray-700'>
                      <a href='#'>
                        <span aria-hidden='true' className='absolute inset-0' />
                        {item.title}
                      </a>
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'> {item.desc}</p>
                  </div>
                  <p className='text-sm font-medium text-gray-900'>
                    $ {item.price}
                  </p>
                  <p className='text-sm font-medium text-gray-900'>
                    {item.review}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
