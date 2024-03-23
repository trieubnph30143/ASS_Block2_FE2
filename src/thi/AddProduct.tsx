import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { typeProduct } from "../type/product";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contextProduct } from "../App";
import ProductList from "./ProductList";
const schema = yup.object({
  name: yup.string().required(),
  image: yup.string().required(),
  price: yup.number().required(),
  desc: yup.string().required(),
  category: yup.string().required(),
});
export function AddProduct() {
  let { getAll }: any = useContext(contextProduct);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<typeProduct>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (value: typeProduct) => {
    let res = await fetch("http://localhost:3000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    let data = await res.json();
    if (data) {
      alert("them thanh cong");
      reset();
      getAll();
    }
  };
  return (
    <div>
      <div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center'>
        <div className='container max-w-screen-lg mx-auto'>
          <div>
            <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
              <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
                <div className='text-gray-600'>
                  <Link to={"/products"}>List Product</Link>
                </div>
                <div className='lg:col-span-2'>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                    <div className='md:col-span-5'>
                      <label htmlFor='full_name'>Name</label>
                      <input
                        type='text'
                        {...register("name")}
                        id='full_name'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        defaultValue=''
                      />
                      <p>{errors.name?.message}</p>
                    </div>
                    <div className='md:col-span-5'>
                      <label htmlFor='email'>Image</label>
                      <input
                        type='text'
                        {...register("image")}
                        id='email'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        defaultValue=''
                        placeholder='email@domain.com'
                      />
                      <p>{errors.image?.message}</p>
                    </div>
                    <div className='md:col-span-3'>
                      <label htmlFor='address'>Price</label>
                      <input
                        type='number'
                        {...register("price")}
                        id='address'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        defaultValue=''
                        placeholder=''
                      />
                      <p>{errors.desc?.message}</p>
                    </div>
                    <div className='md:col-span-2'>
                      <label htmlFor='city'>Desc</label>
                      <input
                        type='text'
                        {...register("desc")}
                        id='city'
                        className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                        defaultValue=''
                        placeholder=''
                      />
                    </div>
                    <div className='md:col-span-2'>
                      <select
                        {...register("category")}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        id=''>
                        <option value='iphone'>Iphone</option>
                        <option value='samsung'>Samsung</option>
                      </select>
                      <p>{errors.category?.message}</p>
                    </div>

                    <div className='md:col-span-5 text-right'>
                      <div className='inline-flex items-end'>
                        <button
                          type='submit'
                          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
}
